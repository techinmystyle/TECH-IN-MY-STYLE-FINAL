import OsCodeBlock from '../components/OsCodeBlock';
import OsResources from '../components/OsResources';
import OsQuiz from '../components/OsQuiz';

export default function OsProjects() {
    return (
        <div className="module-page animate-fade-in">
            <div className="module-header">
                <span className="module-badge">MODULE 10</span>
                <h1>Projects & <span className="glow-text">Hands-On</span></h1>
                <p className="module-subtitle">Build real OS components  -  from shells to schedulers to memory allocators.</p>
            </div>

            {/* Project 1 */}
            <section className="module-section">
                <h2>Project 1  -  Unix Shell</h2>
                <p>
                    Build a command-line interpreter that reads user input, parses commands, and executes them
                    using <code>fork()</code> and <code>exec()</code>. This project teaches process creation,
                    file descriptor manipulation, and signal handling.
                </p>
                <h3>Features to Implement</h3>
                <ul>
                    <li><strong>Command execution</strong>  -  Parse and execute single commands with arguments</li>
                    <li><strong>Built-in commands</strong>  -  <code>cd</code>, <code>exit</code>, <code>pwd</code>, <code>help</code>, <code>history</code></li>
                    <li><strong>I/O Redirection</strong>  -  <code>&gt;</code> (output), <code>&lt;</code> (input), <code>&gt;&gt;</code> (append), <code>2&gt;</code> (stderr)</li>
                    <li><strong>Pipes</strong>  -  <code>ls | grep .txt | wc -l</code> (multiple pipes)</li>
                    <li><strong>Background processes</strong>  -  <code>command &amp;</code></li>
                    <li><strong>Signal handling</strong>  -  Ctrl+C (SIGINT) should not kill the shell, only the foreground process</li>
                    <li><strong>Environment variables</strong>  -  <code>export VAR=value</code>, variable expansion</li>
                </ul>
                <OsCodeBlock
                    title="simple_shell.c"
                    codes={{
                        c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/wait.h>
#include <signal.h>

#define MAX_LINE 1024
#define MAX_ARGS 64
#define MAX_HISTORY 100

char *history[MAX_HISTORY];
int hist_count = 0;

// Signal handler: don't let Ctrl+C kill the shell
void sigint_handler(int sig) {
    printf("\\nshell> ");
    fflush(stdout);
}

// Parse input line into arguments
int parse_args(char *line, char **args) {
    int count = 0;
    char *token = strtok(line, " \\t\\n");
    while (token && count < MAX_ARGS - 1) {
        args[count++] = token;
        token = strtok(NULL, " \\t\\n");
    }
    args[count] = NULL;
    return count;
}

// Check for I/O redirection
void handle_redirection(char **args, int count) {
    for (int i = 0; i < count; i++) {
        if (strcmp(args[i], ">") == 0) {
            freopen(args[i+1], "w", stdout);
            args[i] = NULL;
        } else if (strcmp(args[i], "<") == 0) {
            freopen(args[i+1], "r", stdin);
            args[i] = NULL;
        } else if (strcmp(args[i], ">>") == 0) {
            freopen(args[i+1], "a", stdout);
            args[i] = NULL;
        }
    }
}

// Execute a single command
void execute(char **args, int background) {
    pid_t pid = fork();
    if (pid == 0) {
        // Child: restore default signal handling
        signal(SIGINT, SIG_DFL);
        execvp(args[0], args);
        fprintf(stderr, "Error: command '%s' not found\\n", args[0]);
        exit(127);
    } else if (pid > 0) {
        if (!background) {
            int status;
            waitpid(pid, &status, 0);
        } else {
            printf("[bg] PID %d started\\n", pid);
        }
    } else {
        perror("fork");
    }
}

// Execute piped commands: cmd1 | cmd2
void execute_pipe(char **cmd1, char **cmd2) {
    int pipefd[2];
    pipe(pipefd);

    pid_t p1 = fork();
    if (p1 == 0) {
        dup2(pipefd[1], STDOUT_FILENO);
        close(pipefd[0]);
        close(pipefd[1]);
        execvp(cmd1[0], cmd1);
        exit(1);
    }

    pid_t p2 = fork();
    if (p2 == 0) {
        dup2(pipefd[0], STDIN_FILENO);
        close(pipefd[0]);
        close(pipefd[1]);
        execvp(cmd2[0], cmd2);
        exit(1);
    }

    close(pipefd[0]);
    close(pipefd[1]);
    waitpid(p1, NULL, 0);
    waitpid(p2, NULL, 0);
}

int main() {
    char line[MAX_LINE];
    char *args[MAX_ARGS];

    signal(SIGINT, sigint_handler);

    printf("=== Simple OS Shell ===\\n");
    printf("Built-in: cd, exit, pwd, history\\n\\n");

    while (1) {
        printf("shell> ");
        if (!fgets(line, sizeof(line), stdin)) break;

        // Save to history
        if (hist_count < MAX_HISTORY)
            history[hist_count++] = strdup(line);

        // Check for background
        int bg = 0;
        char *amp = strchr(line, '&');
        if (amp) { *amp = '\\0'; bg = 1; }

        // Check for pipe
        char *pipe_pos = strchr(line, '|');
        if (pipe_pos) {
            *pipe_pos = '\\0';
            char *cmd1_str = line;
            char *cmd2_str = pipe_pos + 1;
            char *cmd1_args[MAX_ARGS], *cmd2_args[MAX_ARGS];
            parse_args(cmd1_str, cmd1_args);
            parse_args(cmd2_str, cmd2_args);
            execute_pipe(cmd1_args, cmd2_args);
            continue;
        }

        int count = parse_args(line, args);
        if (count == 0) continue;

        // Built-in: exit
        if (strcmp(args[0], "exit") == 0) break;

        // Built-in: cd
        if (strcmp(args[0], "cd") == 0) {
            if (args[1]) chdir(args[1]);
            else chdir(getenv("HOME"));
            continue;
        }

        // Built-in: pwd
        if (strcmp(args[0], "pwd") == 0) {
            char cwd[1024];
            getcwd(cwd, sizeof(cwd));
            printf("%s\\n", cwd);
            continue;
        }

        // Built-in: history
        if (strcmp(args[0], "history") == 0) {
            for (int i = 0; i < hist_count; i++)
                printf("  %d  %s", i + 1, history[i]);
            continue;
        }

        execute(args, bg);
    }

    printf("Goodbye!\\n");
    return 0;
}`,
                        python: `import os
import subprocess
import sys
import readline
import shlex

history = []

def execute_command(args, background=False):
    """Execute a command with fork-exec model."""
    try:
        if background:
            proc = subprocess.Popen(args)
            print(f"[bg] PID {proc.pid} started")
        else:
            result = subprocess.run(args)
            return result.returncode
    except FileNotFoundError:
        print(f"Error: command '{args[0]}' not found")
        return 127

def execute_pipe(cmd1_args, cmd2_args):
    """Execute cmd1 | cmd2 using pipes."""
    p1 = subprocess.Popen(cmd1_args, stdout=subprocess.PIPE)
    p2 = subprocess.Popen(cmd2_args, stdin=p1.stdout)
    p1.stdout.close()
    p2.communicate()

def handle_redirection(args):
    """Handle >, <, >> redirection."""
    new_args = []
    stdout_file = None
    stdin_file = None
    append = False

    i = 0
    while i < len(args):
        if args[i] == '>' and i + 1 < len(args):
            stdout_file = args[i + 1]; i += 2
        elif args[i] == '>>' and i + 1 < len(args):
            stdout_file = args[i + 1]; append = True; i += 2
        elif args[i] == '<' and i + 1 < len(args):
            stdin_file = args[i + 1]; i += 2
        else:
            new_args.append(args[i]); i += 1

    kwargs = {}
    if stdout_file:
        kwargs['stdout'] = open(stdout_file, 'a' if append else 'w')
    if stdin_file:
        kwargs['stdin'] = open(stdin_file, 'r')

    return new_args, kwargs

print("=== Python OS Shell ===")
print("Built-in: cd, exit, pwd, history\\n")

while True:
    try:
        line = input("pyshell> ").strip()
    except (EOFError, KeyboardInterrupt):
        print(); break

    if not line: continue
    history.append(line)

    # Background check
    bg = line.endswith('&')
    if bg: line = line[:-1].strip()

    # Pipe check
    if '|' in line:
        parts = line.split('|', 1)
        cmd1 = shlex.split(parts[0].strip())
        cmd2 = shlex.split(parts[1].strip())
        execute_pipe(cmd1, cmd2)
        continue

    try:
        args = shlex.split(line)
    except ValueError as e:
        print(f"Parse error: {e}"); continue

    if not args: continue

    # Built-ins
    if args[0] == 'exit': break
    elif args[0] == 'cd':
        os.chdir(args[1] if len(args) > 1 else os.path.expanduser('~'))
    elif args[0] == 'pwd':
        print(os.getcwd())
    elif args[0] == 'history':
        for i, cmd in enumerate(history, 1):
            print(f"  {i}  {cmd}")
    else:
        args, kwargs = handle_redirection(args)
        execute_command(args, bg)

print("Goodbye!")`,
                        java: `import java.io.*;
import java.util.*;

public class SimpleShell {
    static List<String> history = new ArrayList<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("=== Java OS Shell ===");
        System.out.println("Built-in: cd, exit, pwd, history\\n");

        while (true) {
            System.out.print("jshell> ");
            if (!scanner.hasNextLine()) break;
            String line = scanner.nextLine().trim();
            if (line.isEmpty()) continue;

            history.add(line);

            // Built-ins
            if (line.equals("exit")) break;
            if (line.equals("pwd")) {
                System.out.println(System.getProperty("user.dir"));
                continue;
            }
            if (line.equals("history")) {
                for (int i = 0; i < history.size(); i++)
                    System.out.printf("  %d  %s%n", i + 1, history.get(i));
                continue;
            }
            if (line.startsWith("cd ")) {
                String dir = line.substring(3).trim();
                File newDir = new File(dir).isAbsolute()
                    ? new File(dir) : new File(System.getProperty("user.dir"), dir);
                if (newDir.isDirectory())
                    System.setProperty("user.dir", newDir.getAbsolutePath());
                else
                    System.out.println("No such directory: " + dir);
                continue;
            }

            // Check for pipes
            if (line.contains("|")) {
                String[] parts = line.split("\\\\|");
                try {
                    ProcessBuilder pb1 = new ProcessBuilder(parts[0].trim().split("\\\\s+"));
                    ProcessBuilder pb2 = new ProcessBuilder(parts[1].trim().split("\\\\s+"));
                    Process p1 = pb1.start();
                    pb2.redirectInput(ProcessBuilder.Redirect.PIPE);
                    Process p2 = pb2.start();
                    p1.getInputStream().transferTo(p2.getOutputStream());
                    p2.getOutputStream().close();
                    p2.waitFor();
                    p2.getInputStream().transferTo(System.out);
                } catch (Exception e) {
                    System.out.println("Error: " + e.getMessage());
                }
                continue;
            }

            // Execute external command
            try {
                ProcessBuilder pb = new ProcessBuilder(line.split("\\\\s+"));
                pb.inheritIO();
                pb.directory(new File(System.getProperty("user.dir")));
                Process p = pb.start();
                p.waitFor();
            } catch (Exception e) {
                System.out.println("Error: " + e.getMessage());
            }
        }
        System.out.println("Goodbye!");
    }
}`,
                    }}
                />
            </section>

            {/* Project 2 */}
            <section className="module-section">
                <h2>Project 2  -  CPU Scheduler Simulator</h2>
                <p>
                    Simulate multiple CPU scheduling algorithms, compare their performance, and visualize the
                    results with Gantt charts and statistics.
                </p>
                <h3>Requirements</h3>
                <ul>
                    <li>Implement FCFS, SJF, SRTF, Round Robin, Priority, and MLFQ</li>
                    <li>Generate random process sets or accept user input</li>
                    <li>Calculate: average waiting time, turnaround time, response time, throughput</li>
                    <li>Output a Gantt chart showing the execution timeline</li>
                    <li>Compare all algorithms side-by-side</li>
                </ul>
                <OsCodeBlock
                    title="scheduler_sim.c"
                    codes={{
                        c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <limits.h>

#define MAX_PROCS 20

typedef struct {
    int pid;
    int arrival;
    int burst;
    int remaining;
    int priority;
    int start_time;
    int finish_time;
    int waiting;
    int turnaround;
    int response;
    int started;
} Process;

void fcfs(Process procs[], int n) {
    printf("\\n=== FCFS Scheduling ===\\n");
    Process p[MAX_PROCS];
    memcpy(p, procs, n * sizeof(Process));

    // Sort by arrival time
    for (int i = 0; i < n - 1; i++)
        for (int j = i + 1; j < n; j++)
            if (p[j].arrival < p[i].arrival) {
                Process tmp = p[i]; p[i] = p[j]; p[j] = tmp;
            }

    int time = 0;
    float total_wait = 0, total_tat = 0;

    printf("Gantt: |");
    for (int i = 0; i < n; i++) {
        if (time < p[i].arrival) time = p[i].arrival;
        p[i].start_time = time;
        p[i].response = time - p[i].arrival;
        p[i].finish_time = time + p[i].burst;
        p[i].turnaround = p[i].finish_time - p[i].arrival;
        p[i].waiting = p[i].turnaround - p[i].burst;
        total_wait += p[i].waiting;
        total_tat += p[i].turnaround;
        printf(" P%d(%d-%d) |", p[i].pid, time, p[i].finish_time);
        time = p[i].finish_time;
    }

    printf("\\n\\nPID  Arrival  Burst  Wait  TAT  Response\\n");
    for (int i = 0; i < n; i++)
        printf("P%-2d    %3d     %3d   %3d   %3d     %3d\\n",
            p[i].pid, p[i].arrival, p[i].burst,
            p[i].waiting, p[i].turnaround, p[i].response);

    printf("Avg Wait: %.2f | Avg TAT: %.2f\\n",
           total_wait / n, total_tat / n);
}

void round_robin(Process procs[], int n, int quantum) {
    printf("\\n=== Round Robin (q=%d) ===\\n", quantum);
    Process p[MAX_PROCS];
    memcpy(p, procs, n * sizeof(Process));
    for (int i = 0; i < n; i++) {
        p[i].remaining = p[i].burst;
        p[i].started = 0;
    }

    int time = 0, done = 0;
    float total_wait = 0, total_tat = 0;

    printf("Gantt: |");
    while (done < n) {
        int found = 0;
        for (int i = 0; i < n; i++) {
            if (p[i].remaining > 0 && p[i].arrival <= time) {
                found = 1;
                if (!p[i].started) {
                    p[i].start_time = time;
                    p[i].response = time - p[i].arrival;
                    p[i].started = 1;
                }
                int exec = (p[i].remaining < quantum) ?
                           p[i].remaining : quantum;
                printf(" P%d(%d-%d) |", p[i].pid, time, time + exec);
                p[i].remaining -= exec;
                time += exec;
                if (p[i].remaining == 0) {
                    p[i].finish_time = time;
                    p[i].turnaround = time - p[i].arrival;
                    p[i].waiting = p[i].turnaround - p[i].burst;
                    total_wait += p[i].waiting;
                    total_tat += p[i].turnaround;
                    done++;
                }
            }
        }
        if (!found) time++;
    }

    printf("\\n\\nPID  Arrival  Burst  Wait  TAT  Response\\n");
    for (int i = 0; i < n; i++)
        printf("P%-2d    %3d     %3d   %3d   %3d     %3d\\n",
            p[i].pid, p[i].arrival, p[i].burst,
            p[i].waiting, p[i].turnaround, p[i].response);

    printf("Avg Wait: %.2f | Avg TAT: %.2f\\n",
           total_wait / n, total_tat / n);
}

int main() {
    Process procs[] = {
        {1, 0, 10, 10, 2, 0,0,0,0,0,0},
        {2, 1,  5,  5, 1, 0,0,0,0,0,0},
        {3, 2,  8,  8, 3, 0,0,0,0,0,0},
        {4, 3,  2,  2, 4, 0,0,0,0,0,0},
    };
    int n = 4;

    printf("Process Set:\\n");
    printf("PID  Arrival  Burst  Priority\\n");
    for (int i = 0; i < n; i++)
        printf("P%-2d    %3d     %3d      %d\\n",
            procs[i].pid, procs[i].arrival,
            procs[i].burst, procs[i].priority);

    fcfs(procs, n);
    round_robin(procs, n, 3);

    return 0;
}`,
                        python: `from dataclasses import dataclass, field
from typing import List
import copy

@dataclass
class Process:
    pid: int
    arrival: int
    burst: int
    priority: int = 0
    remaining: int = 0
    start_time: int = -1
    finish_time: int = 0
    waiting: int = 0
    turnaround: int = 0
    response: int = 0

    def __post_init__(self):
        self.remaining = self.burst

def print_results(name, procs):
    print(f"\\n{'='*10} {name} {'='*10}")
    print(f"{'PID':>4} {'Arr':>5} {'Burst':>6} {'Wait':>6} {'TAT':>6} {'Resp':>6}")
    for p in sorted(procs, key=lambda x: x.pid):
        print(f"P{p.pid:<3} {p.arrival:>5} {p.burst:>6} {p.waiting:>6} {p.turnaround:>6} {p.response:>6}")
    n = len(procs)
    avg_w = sum(p.waiting for p in procs) / n
    avg_t = sum(p.turnaround for p in procs) / n
    print(f"Avg Wait: {avg_w:.2f} | Avg TAT: {avg_t:.2f}")

def fcfs(procs: List[Process]):
    p = sorted(copy.deepcopy(procs), key=lambda x: x.arrival)
    time = 0
    gantt = []
    for proc in p:
        if time < proc.arrival: time = proc.arrival
        proc.start_time = time
        proc.response = time - proc.arrival
        proc.finish_time = time + proc.burst
        proc.turnaround = proc.finish_time - proc.arrival
        proc.waiting = proc.turnaround - proc.burst
        gantt.append(f"P{proc.pid}({time}-{proc.finish_time})")
        time = proc.finish_time
    print("Gantt: | " + " | ".join(gantt) + " |")
    print_results("FCFS", p)

def sjf(procs: List[Process]):
    p = copy.deepcopy(procs)
    time = 0; done = 0; n = len(p)
    completed = [False] * n
    gantt = []
    while done < n:
        candidates = [(i, p[i]) for i in range(n)
                       if not completed[i] and p[i].arrival <= time]
        if not candidates:
            time += 1; continue
        idx, proc = min(candidates, key=lambda x: x[1].burst)
        proc.start_time = time
        proc.response = time - proc.arrival
        proc.finish_time = time + proc.burst
        proc.turnaround = proc.finish_time - proc.arrival
        proc.waiting = proc.turnaround - proc.burst
        gantt.append(f"P{proc.pid}({time}-{proc.finish_time})")
        time = proc.finish_time
        completed[idx] = True; done += 1
    print("Gantt: | " + " | ".join(gantt) + " |")
    print_results("SJF (Non-preemptive)", p)

def round_robin(procs: List[Process], quantum: int):
    p = copy.deepcopy(procs)
    for proc in p: proc.remaining = proc.burst
    time = 0; done = 0; n = len(p)
    gantt = []
    while done < n:
        found = False
        for proc in sorted(p, key=lambda x: x.arrival):
            if proc.remaining > 0 and proc.arrival <= time:
                found = True
                if proc.start_time == -1:
                    proc.start_time = time
                    proc.response = time - proc.arrival
                ex = min(proc.remaining, quantum)
                gantt.append(f"P{proc.pid}({time}-{time+ex})")
                proc.remaining -= ex; time += ex
                if proc.remaining == 0:
                    proc.finish_time = time
                    proc.turnaround = time - proc.arrival
                    proc.waiting = proc.turnaround - proc.burst
                    done += 1
        if not found: time += 1
    print("Gantt: | " + " | ".join(gantt) + " |")
    print_results(f"Round Robin (q={quantum})", p)

# Test data
processes = [
    Process(1, 0, 10, 2),
    Process(2, 1,  5, 1),
    Process(3, 2,  8, 3),
    Process(4, 3,  2, 4),
]

print("Process Set:")
print(f"{'PID':>4} {'Arrival':>8} {'Burst':>6} {'Priority':>9}")
for p in processes:
    print(f"P{p.pid:<3} {p.arrival:>8} {p.burst:>6} {p.priority:>9}")

fcfs(processes)
sjf(processes)
round_robin(processes, 3)`,
                        java: `import java.util.*;

public class SchedulerSim {
    record Process(int pid, int arrival, int burst, int priority) {}

    record Result(int pid, int arrival, int burst,
                  int waiting, int turnaround, int response) {}

    static List<Result> fcfs(List<Process> procs) {
        var sorted = procs.stream()
            .sorted(Comparator.comparingInt(Process::arrival))
            .toList();
        List<Result> results = new ArrayList<>();
        int time = 0;
        StringBuilder gantt = new StringBuilder("Gantt: |");

        for (var p : sorted) {
            if (time < p.arrival()) time = p.arrival();
            int start = time;
            int finish = time + p.burst();
            int tat = finish - p.arrival();
            int wait = tat - p.burst();
            results.add(new Result(p.pid(), p.arrival(), p.burst(),
                                   wait, tat, start - p.arrival()));
            gantt.append(String.format(" P%d(%d-%d) |", p.pid(), start, finish));
            time = finish;
        }
        System.out.println("\\n=== FCFS ===");
        System.out.println(gantt);
        printResults(results);
        return results;
    }

    static List<Result> roundRobin(List<Process> procs, int quantum) {
        int n = procs.size();
        int[] remaining = new int[n];
        int[] startTime = new int[n];
        boolean[] started = new boolean[n];
        Arrays.fill(startTime, -1);

        for (int i = 0; i < n; i++)
            remaining[i] = procs.get(i).burst();

        int time = 0, done = 0;
        List<Result> results = new ArrayList<>();
        StringBuilder gantt = new StringBuilder("Gantt: |");

        while (done < n) {
            boolean found = false;
            for (int i = 0; i < n; i++) {
                var p = procs.get(i);
                if (remaining[i] > 0 && p.arrival() <= time) {
                    found = true;
                    if (!started[i]) {
                        startTime[i] = time;
                        started[i] = true;
                    }
                    int exec = Math.min(remaining[i], quantum);
                    gantt.append(String.format(" P%d(%d-%d) |",
                        p.pid(), time, time + exec));
                    remaining[i] -= exec;
                    time += exec;
                    if (remaining[i] == 0) {
                        int tat = time - p.arrival();
                        int wait = tat - p.burst();
                        results.add(new Result(p.pid(), p.arrival(),
                            p.burst(), wait, tat, startTime[i] - p.arrival()));
                        done++;
                    }
                }
            }
            if (!found) time++;
        }
        System.out.println("\\n=== Round Robin (q=" + quantum + ") ===");
        System.out.println(gantt);
        printResults(results);
        return results;
    }

    static void printResults(List<Result> results) {
        System.out.println("PID  Arr  Burst  Wait  TAT  Resp");
        for (var r : results)
            System.out.printf("P%-2d  %3d   %3d   %3d  %3d   %3d%n",
                r.pid(), r.arrival(), r.burst(),
                r.waiting(), r.turnaround(), r.response());
        double avgW = results.stream().mapToInt(Result::waiting).average().orElse(0);
        double avgT = results.stream().mapToInt(Result::turnaround).average().orElse(0);
        System.out.printf("Avg Wait: %.2f | Avg TAT: %.2f%n", avgW, avgT);
    }

    public static void main(String[] args) {
        var processes = List.of(
            new Process(1, 0, 10, 2),
            new Process(2, 1,  5, 1),
            new Process(3, 2,  8, 3),
            new Process(4, 3,  2, 4)
        );
        fcfs(processes);
        roundRobin(processes, 3);
    }
}`,
                    }}
                />
            </section>

            {/* Project 3 */}
            <section className="module-section">
                <h2>Project 3  -  Memory Allocator</h2>
                <p>
                    Build a custom memory allocator that implements <code>malloc()</code> and <code>free()</code>
                    using a free list. This teaches heap management, fragmentation, and allocation strategies.
                </p>
                <h3>Features to Implement</h3>
                <ul>
                    <li><strong>Free list management</strong>  -  Linked list of free memory blocks</li>
                    <li><strong>Allocation strategies</strong>  -  First-fit, best-fit, worst-fit</li>
                    <li><strong>Block splitting</strong>  -  Split large blocks when allocation is smaller</li>
                    <li><strong>Coalescing</strong>  -  Merge adjacent free blocks on free()</li>
                    <li><strong>Memory stats</strong>  -  Track total allocated, fragmentation level</li>
                </ul>
                <OsCodeBlock
                    title="mem_allocator.c"
                    codes={{
                        c: `#include <stdio.h>
#include <stdint.h>
#include <string.h>

#define HEAP_SIZE (64 * 1024)  // 64 KB heap

static uint8_t heap[HEAP_SIZE];

typedef struct Block {
    size_t size;
    int free;
    struct Block *next;
} Block;

#define BLOCK_SIZE sizeof(Block)
static Block *free_list = NULL;
static int initialized = 0;

void heap_init() {
    free_list = (Block*)heap;
    free_list to size = HEAP_SIZE - BLOCK_SIZE;
    free_list to free = 1;
    free_list to next = NULL;
    initialized = 1;
}

// Split a block if it's larger than needed
void split(Block *block, size_t size) {
    if (block to size >= size + BLOCK_SIZE + 16) {
        Block *new_block = (Block*)((uint8_t*)block + BLOCK_SIZE + size);
        new_block to size = block to size - size - BLOCK_SIZE;
        new_block to free = 1;
        new_block to next = block to next;
        block to size = size;
        block to next = new_block;
    }
}

// First-Fit allocation
void* my_malloc(size_t size) {
    if (!initialized) heap_init();
    if (size == 0) return NULL;

    // Align to 8 bytes
    size = (size + 7) & ~7;

    Block *curr = free_list;
    while (curr) {
        if (curr to free && curr to size >= size) {
            split(curr, size);
            curr to free = 0;
            return (void*)((uint8_t*)curr + BLOCK_SIZE);
        }
        curr = curr to next;
    }
    return NULL;  // Out of memory
}

// Coalesce adjacent free blocks
void coalesce() {
    Block *curr = free_list;
    while (curr && curr to next) {
        if (curr to free && curr to next to free) {
            curr to size += BLOCK_SIZE + curr to next to size;
            curr to next = curr to next to next;
        } else {
            curr = curr to next;
        }
    }
}

void my_free(void *ptr) {
    if (!ptr) return;
    Block *block = (Block*)((uint8_t*)ptr - BLOCK_SIZE);
    block to free = 1;
    coalesce();
}

// Memory statistics
void heap_stats() {
    Block *curr = free_list;
    size_t total = 0, used = 0, free_mem = 0;
    int blocks = 0, free_blocks = 0;

    while (curr) {
        total += curr to size;
        if (curr to free) { free_mem += curr to size; free_blocks++; }
        else { used += curr to size; }
        blocks++;
        curr = curr to next;
    }

    printf("\\n--- Heap Statistics ---\\n");
    printf("Total    : %zu bytes\\n", total);
    printf("Used     : %zu bytes\\n", used);
    printf("Free     : %zu bytes\\n", free_mem);
    printf("Blocks   : %d (free: %d)\\n", blocks, free_blocks);
    printf("Overhead : %zu bytes\\n", blocks * BLOCK_SIZE);
    if (free_blocks > 1)
        printf("Fragmentation: %d fragments\\n", free_blocks);
}

int main() {
    printf("=== Custom Memory Allocator ===\\n");
    printf("Heap size: %d bytes\\n", HEAP_SIZE);

    // Allocate several blocks
    void *a = my_malloc(100);
    void *b = my_malloc(200);
    void *c = my_malloc(50);
    void *d = my_malloc(300);

    printf("\\nAllocated: a=%p, b=%p, c=%p, d=%p\\n", a, b, c, d);
    heap_stats();

    // Write data
    memset(a, 'A', 100);
    memset(b, 'B', 200);

    // Free b and c  to  creates fragmentation
    printf("\\nFreeing b and d...\\n");
    my_free(b);
    my_free(d);
    heap_stats();

    // Allocate in freed space
    printf("\\nAllocating e (150 bytes)...\\n");
    void *e = my_malloc(150);
    printf("e=%p\\n", e);
    heap_stats();

    // Free all
    my_free(a);
    my_free(c);
    my_free(e);
    printf("\\nAfter freeing all:\\n");
    heap_stats();

    return 0;
}`,
                        python: `class Block:
    def __init__(self, size, free=True):
        self.size = size
        self.free = free
        self.data = None

class MemoryAllocator:
    def __init__(self, total_size=65536):
        self.total_size = total_size
        self.blocks = [Block(total_size)]
        self.alloc_map = {}

    def malloc(self, size, strategy='first_fit'):
        if size <= 0: return None
        size = (size + 7) & ~7  # Align to 8

        if strategy == 'first_fit':
            block = next((b for b in self.blocks if b.free and b.size >= size), None)
        elif strategy == 'best_fit':
            candidates = [b for b in self.blocks if b.free and b.size >= size]
            block = min(candidates, key=lambda b: b.size) if candidates else None
        elif strategy == 'worst_fit':
            candidates = [b for b in self.blocks if b.free and b.size >= size]
            block = max(candidates, key=lambda b: b.size) if candidates else None
        else:
            return None

        if not block:
            print(f"  OOM: Cannot allocate {size} bytes")
            return None

        # Split if significantly larger
        if block.size > size + 32:
            new_block = Block(block.size - size, free=True)
            block.size = size
            idx = self.blocks.index(block) + 1
            self.blocks.insert(idx, new_block)

        block.free = False
        ptr = id(block)
        self.alloc_map[ptr] = block
        return ptr

    def free(self, ptr):
        if ptr not in self.alloc_map: return
        block = self.alloc_map.pop(ptr)
        block.free = True
        self._coalesce()

    def _coalesce(self):
        i = 0
        while i < len(self.blocks) - 1:
            if self.blocks[i].free and self.blocks[i + 1].free:
                self.blocks[i].size += self.blocks[i + 1].size
                self.blocks.pop(i + 1)
            else:
                i += 1

    def stats(self):
        used = sum(b.size for b in self.blocks if not b.free)
        free = sum(b.size for b in self.blocks if b.free)
        free_count = sum(1 for b in self.blocks if b.free)
        print(f"  Used: {used:,}  Free: {free:,}  Blocks: {len(self.blocks)}  Fragments: {free_count}")

# Demo
alloc = MemoryAllocator(65536)
print("=== Custom Memory Allocator ===")

a = alloc.malloc(100)
b = alloc.malloc(200)
c = alloc.malloc(50)
d = alloc.malloc(300)
print("After allocations:"); alloc.stats()

alloc.free(b)
alloc.free(d)
print("After freeing b, d:"); alloc.stats()

e = alloc.malloc(150, 'best_fit')
print("After best-fit 150:"); alloc.stats()

alloc.free(a); alloc.free(c); alloc.free(e)
print("After freeing all:"); alloc.stats()`,
                        java: `import java.util.*;

public class MemAllocator {
    record Block(int offset, int size, boolean free) {}

    final int totalSize;
    List<Block> blocks;
    Map<Integer, Block> allocMap = new HashMap<>();

    MemAllocator(int size) {
        totalSize = size;
        blocks = new ArrayList<>();
        blocks.add(new Block(0, size, true));
    }

    int malloc(int size) {
        size = (size + 7) & ~7; // Align

        // First-fit
        for (int i = 0; i < blocks.size(); i++) {
            Block b = blocks.get(i);
            if (b.free() && b.size() >= size) {
                // Split
                if (b.size() > size + 32) {
                    blocks.set(i, new Block(b.offset(), size, false));
                    blocks.add(i + 1, new Block(b.offset() + size,
                                                b.size() - size, true));
                } else {
                    blocks.set(i, new Block(b.offset(), b.size(), false));
                }
                Block allocated = blocks.get(i);
                allocMap.put(allocated.offset(), allocated);
                return allocated.offset();
            }
        }
        return -1; // OOM
    }

    void free(int ptr) {
        if (!allocMap.containsKey(ptr)) return;
        allocMap.remove(ptr);
        for (int i = 0; i < blocks.size(); i++) {
            if (blocks.get(i).offset() == ptr) {
                blocks.set(i, new Block(
                    blocks.get(i).offset(), blocks.get(i).size(), true));
                break;
            }
        }
        coalesce();
    }

    void coalesce() {
        int i = 0;
        while (i < blocks.size() - 1) {
            if (blocks.get(i).free() && blocks.get(i + 1).free()) {
                Block merged = new Block(blocks.get(i).offset(),
                    blocks.get(i).size() + blocks.get(i + 1).size(), true);
                blocks.set(i, merged);
                blocks.remove(i + 1);
            } else i++;
        }
    }

    void stats() {
        int used = blocks.stream()
            .filter(b  to  !b.free())
            .mapToInt(Block::size).sum();
        int free = blocks.stream()
            .filter(Block::free)
            .mapToInt(Block::size).sum();
        long frags = blocks.stream().filter(Block::free).count();
        System.out.printf("  Used: %,d  Free: %,d  Blocks: %d  Fragments: %d%n",
            used, free, blocks.size(), frags);
    }

    public static void main(String[] args) {
        var alloc = new MemAllocator(65536);
        System.out.println("=== Java Memory Allocator ===");

        int a = alloc.malloc(100);
        int b = alloc.malloc(200);
        int c = alloc.malloc(50);
        int d = alloc.malloc(300);
        System.out.print("After alloc: "); alloc.stats();

        alloc.free(b); alloc.free(d);
        System.out.print("After free:  "); alloc.stats();

        int e = alloc.malloc(150);
        System.out.print("After 150:   "); alloc.stats();

        alloc.free(a); alloc.free(c); alloc.free(e);
        System.out.print("All freed:   "); alloc.stats();
    }
}`,
                    }}
                />
            </section>

            {/* Additional Project Ideas */}
            <section className="module-section">
                <h2>Additional Project Ideas</h2>
                <div className="project-grid">
                    <div className="card project-idea">
                        <h3>🔒 Page Replacement Simulator</h3>
                        <p>Implement FIFO, LRU, Optimal, and Clock algorithms. Compare page fault rates with different reference strings and frame counts. Demonstrate Belady's anomaly.</p>
                    </div>
                    <div className="card project-idea">
                        <h3>📁 Simple File System</h3>
                        <p>Build an in-memory file system supporting create, read, write, delete, mkdir. Use inodes and block allocation. Implement ls, cat, and tree commands.</p>
                    </div>
                    <div className="card project-idea">
                        <h3>🔄 Producer-Consumer</h3>
                        <p>Implement the bounded buffer problem with multiple producers and consumers using mutexes and semaphores. Add logging to observe synchronization behavior.</p>
                    </div>
                    <div className="card project-idea">
                        <h3>💽 Disk Scheduler</h3>
                        <p>Simulate FCFS, SSTF, SCAN, C-SCAN, LOOK algorithms. Generate random disk requests and compare total head movement and throughput.</p>
                    </div>
                    <div className="card project-idea">
                        <h3>📡 Chat Server (IPC)</h3>
                        <p>Multi-client chat using sockets and threading. Practice process creation, IPC, and concurrent programming. Add rooms, private messaging, and user management.</p>
                    </div>
                    <div className="card project-idea">
                        <h3>🛡️ Access Control System</h3>
                        <p>Implement an access control matrix with users, roles, and permissions. Support DAC and RBAC models. Add audit logging and permission inheritance.</p>
                    </div>
                </div>
            </section>

            <OsQuiz
                title="Module 10  -  Projects Check"
                questions={[
                    {
                        question: 'Which system call is used to execute a new program in the current process?',
                        options: ['fork()', 'exec()', 'wait()', 'pipe()'],
                        answer: 1,
                        explanation: 'exec() replaces the current process image with a new program.',
                    },
                    {
                        question: 'What is the purpose of coalescing in a memory allocator?',
                        options: [
                            'Splitting large blocks',
                            'Merging adjacent free blocks to reduce fragmentation',
                            'Encrypting memory',
                            'Compressing data',
                        ],
                        answer: 1,
                    },
                    {
                        question: 'In a shell, what does dup2() do?',
                        options: [
                            'Duplicate a process',
                            'Redirect a file descriptor to another',
                            'Create a pipe',
                            'Kill a process',
                        ],
                        answer: 1,
                        explanation: 'dup2(oldfd, newfd) makes newfd a copy of oldfd  -  used for I/O redirection.',
                    },
                ]}
            />
        <OsResources topicId="projects" />
        </div>
    );
}
