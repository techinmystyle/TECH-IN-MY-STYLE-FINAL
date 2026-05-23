import OsCodeBlock from '../components/OsCodeBlock';
import OsResources from '../components/OsResources';
import OsQuiz from '../components/OsQuiz';
import OsInterviewQuestion from '../components/OsInterviewQuestion';
import { SchedulingViz, ProcessStateDiagram } from '../components/OsVisualization';

export default function OsProcessManagement() {
    return (
        <div className="module-page animate-fade-in">
            <div className="module-header">
                <span className="module-badge">MODULE 02</span>
                <h1>Process <span className="glow-text">Management</span></h1>
                <p className="module-subtitle">How the OS creates, schedules, synchronizes, and manages the lifecycle of processes.</p>
            </div>

            {/* 2.1 */}
            <section className="module-section">
                <h2>2.1  -  What is a Process?</h2>
                <p>
                    A process is a <strong>program in execution</strong>. While a program is a passive entity (an executable
                    file on disk), a process is an active entity with a program counter, registers, and allocated resources.
                    Multiple processes can be instances of the same program.
                </p>
                <h3>Process Memory Layout</h3>
                <p>Each process has its own virtual address space divided into segments:</p>
                <ul>
                    <li><strong>Text Segment</strong>  -  The compiled program code (machine instructions). Read-only, shared among instances.</li>
                    <li><strong>Data Segment</strong>  -  Global and static variables. Split into initialized (.data) and uninitialized (.bss).</li>
                    <li><strong>Heap</strong>  -  Dynamically allocated memory (malloc/new). Grows upward. Managed by the programmer or garbage collector.</li>
                    <li><strong>Stack</strong>  -  Function call frames, local variables, return addresses. Grows downward. Managed automatically by the compiler.</li>
                </ul>
                <p>
                    The heap and stack grow toward each other. If they collide, the process is out of memory. The gap
                    between them is unused virtual address space.
                </p>
            </section>

            {/* 2.2 */}
            <section className="module-section">
                <h2>2.2  -  Process Control Block (PCB)</h2>
                <p>
                    The OS represents each process internally using a <strong>Process Control Block (PCB)</strong>, also
                    called a task control block. The PCB is a data structure in the kernel that contains all information
                    about a process:
                </p>
                <ul>
                    <li><strong>Process ID (PID)</strong>  -  Unique integer identifier for the process</li>
                    <li><strong>Process State</strong>  -  New, Ready, Running, Waiting, Terminated</li>
                    <li><strong>Program Counter (PC)</strong>  -  Address of the next instruction to execute</li>
                    <li><strong>CPU Registers</strong>  -  Contents of all CPU registers (accumulator, index, stack pointer)</li>
                    <li><strong>CPU Scheduling Info</strong>  -  Priority, scheduling queue pointers, time slices used</li>
                    <li><strong>Memory Management Info</strong>  -  Page tables, segment tables, base/limit registers</li>
                    <li><strong>I/O Status</strong>  -  List of open files, I/O devices allocated, pending I/O requests</li>
                    <li><strong>Accounting Info</strong>  -  CPU time used, elapsed real time, time limits, job/process numbers</li>
                    <li><strong>Parent PID (PPID)</strong>  -  PID of the parent process</li>
                    <li><strong>Signal Handling</strong>  -  Signal masks, pending signals, signal handlers</li>
                </ul>
                <p>
                    The PCB is the key data structure that allows the OS to switch between processes  -  during a context
                    switch, the current PCB is saved and the next process's PCB is loaded.
                </p>
            </section>

            {/* 2.3 */}
            <section className="module-section">
                <h2>2.3  -  Process States & Transitions</h2>
                <p>
                    A process moves through several states during its lifetime. Understanding these states is
                    fundamental to understanding how the OS manages processes.
                </p>
                <ul>
                    <li><strong>New</strong>  -  Process is being created. OS allocates PID, PCB, and initial resources.</li>
                    <li><strong>Ready</strong>  -  Process is loaded in memory and waiting to be assigned to a CPU. It's in the <strong>ready queue</strong>.</li>
                    <li><strong>Running</strong>  -  Process instructions are being executed by the CPU. Only one process per CPU core can be running.</li>
                    <li><strong>Waiting (Blocked)</strong>  -  Process is waiting for an event (I/O completion, signal, resource availability). It's in a <strong>wait queue</strong>.</li>
                    <li><strong>Terminated (Zombie)</strong>  -  Process has finished execution. Its PCB remains until the parent reads the exit status via <code>wait()</code>.</li>
                </ul>
            </section>

            <ProcessStateDiagram />

            {/* 2.4 */}
            <section className="module-section">
                <h2>2.4  -  Process Creation & Termination</h2>
                <h3>Process Creation</h3>
                <p>
                    In Unix/Linux, <code>fork()</code> creates a new process by duplicating the calling process. The child
                    gets a copy of the parent's address space (via copy-on-write), file descriptors, and environment.
                    After forking, the child typically calls <code>exec()</code> to replace its memory with a new program.
                </p>
                <h3>Fork-Exec Model</h3>
                <ul>
                    <li><code>fork()</code> returns 0 to the child and the child's PID to the parent</li>
                    <li><code>exec()</code> family replaces the process image: <code>execl</code>, <code>execv</code>, <code>execle</code>, <code>execve</code>, <code>execlp</code>, <code>execvp</code></li>
                    <li><code>wait()</code>/<code>waitpid()</code>  -  Parent waits for child to finish, collects exit status</li>
                    <li><code>vfork()</code>  -  Like fork but child shares parent's address space (for immediate exec)</li>
                    <li><code>clone()</code>  -  Linux-specific, fine-grained control over what's shared (used for threads)</li>
                </ul>
                <h3>Process Hierarchy</h3>
                <p>
                    In Unix, all processes form a <strong>tree</strong> rooted at <code>init</code>/<code>systemd</code> (PID 1).
                    Every process (except init) has a parent. Use <code>pstree</code> to visualize. Windows has no strict
                    hierarchy  -  any process can create any other.
                </p>
                <h3>Process Termination</h3>
                <ul>
                    <li><code>exit(status)</code>  -  Normal termination, returns exit code to parent</li>
                    <li><code>kill(pid, signal)</code>  -  Send a signal to terminate another process</li>
                    <li><strong>Zombie Process</strong>  -  Child terminated but parent hasn't called <code>wait()</code>. Still has a PCB entry. Fixed by having the parent call wait.</li>
                    <li><strong>Orphan Process</strong>  -  Parent terminated before child. The child is "adopted" by init (PID 1), which will call wait when it terminates.</li>
                </ul>
                <OsCodeBlock
                    title="process_lifecycle.c"
                    codes={{
                        c: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    printf("Parent PID: %d\\n", getpid());

    pid_t pid = fork();

    if (pid < 0) {
        perror("Fork failed");
        exit(1);
    } else if (pid == 0) {
        // Child process
        printf("Child PID: %d, Parent: %d\\n",
               getpid(), getppid());

        // Replace with a new program
        printf("Child executing 'ls'...\\n");
        execlp("ls", "ls", "-la", NULL);

        // Only reached if exec fails
        perror("exec failed");
        exit(1);
    } else {
        // Parent process
        int status;
        pid_t child = waitpid(pid, &status, 0);

        if (WIFEXITED(status))
            printf("Child %d exited with code: %d\\n",
                   child, WEXITSTATUS(status));
        else if (WIFSIGNALED(status))
            printf("Child killed by signal: %d\\n",
                   WTERMSIG(status));
    }

    return 0;
}`,
                        python: `import os
import subprocess
import signal
import sys

print(f"Parent PID: {os.getpid()}")

pid = os.fork()

if pid == 0:
    # Child process
    print(f"Child PID: {os.getpid()}, Parent: {os.getppid()}")
    print("Child executing 'ls'...")
    os.execlp("ls", "ls", "-la")
    # Never reaches here if exec succeeds
else:
    # Parent waits for child
    child_pid, status = os.waitpid(pid, 0)
    exit_code = os.WEXITSTATUS(status)
    print(f"Child {child_pid} exited with code: {exit_code}")

    # Alternative: using subprocess module
    result = subprocess.run(
        ["ps", "aux"],
        capture_output=True, text=True
    )
    print(f"Process list length: {len(result.stdout.splitlines())} lines")`,
                        java: `public class ProcessLifecycle {
    public static void main(String[] args) throws Exception {
        System.out.println("Current PID: " +
            ProcessHandle.current().pid());

        // Create a child process
        ProcessBuilder pb = new ProcessBuilder("ls", "-la");
        pb.inheritIO();

        Process child = pb.start();
        long childPid = child.pid();
        System.out.println("Started child PID: " + childPid);

        // Wait for completion
        int exitCode = child.waitFor();
        System.out.println("Child exited with: " + exitCode);

        // Check if alive
        System.out.println("Is alive: " + child.isAlive());

        // Process info via ProcessHandle
        ProcessHandle.current().info().command()
            .ifPresent(cmd  to  System.out.println("Command: " + cmd));
        ProcessHandle.current().info().totalCpuDuration()
            .ifPresent(d  to  System.out.println("CPU time: " + d));
    }
}`,
                    }}
                />
            </section>

            {/* 2.5 */}
            <section className="module-section">
                <h2>2.5  -  Context Switching</h2>
                <p>
                    A <strong>context switch</strong> is the mechanism of saving the state of the currently running process
                    and restoring the state of another process so the CPU can execute it.
                </p>
                <h3>What Gets Saved/Restored</h3>
                <ul>
                    <li>All CPU registers (general purpose, floating point, SIMD)</li>
                    <li>Program counter and instruction pointer</li>
                    <li>Stack pointer and base pointer</li>
                    <li>CPU status flags / condition codes</li>
                    <li>Memory management registers (page table base register, TLB flush)</li>
                    <li>FPU/SSE/AVX state (if applicable)</li>
                </ul>
                <h3>Cost of Context Switching</h3>
                <p>
                    Context switching is <strong>pure overhead</strong>  -  no useful work is done during the switch.
                    Typical cost: 1 - 10 microseconds on modern hardware. The <strong>indirect costs</strong> are even
                    larger: TLB flush (every entry becomes invalid), cache pollution (L1/L2/L3 caches now contain
                    data from the old process), pipeline flush. Threads within the same process have cheaper context
                    switches because they share the same address space (no TLB flush needed).
                </p>
                <h3>When Does Context Switching Occur?</h3>
                <ul>
                    <li>Timer interrupt  -  time quantum expired (preemptive scheduling)</li>
                    <li>I/O request  -  process blocks waiting for I/O</li>
                    <li>System call  -  process enters kernel mode</li>
                    <li>Higher priority process becomes ready</li>
                    <li>Process voluntarily yields the CPU</li>
                </ul>
            </section>

            {/* 2.6 */}
            <section className="module-section">
                <h2>2.6  -  Process Scheduling</h2>
                <p>
                    The <strong>CPU scheduler</strong> (short-term scheduler) selects which ready process gets the CPU next.
                    The goal is to maximize CPU utilization and throughput while minimizing waiting time and response time.
                </p>
                <h3>Scheduling Queues</h3>
                <ul>
                    <li><strong>Job Queue</strong>  -  All processes in the system (long-term scheduler selects from here)</li>
                    <li><strong>Ready Queue</strong>  -  Processes in memory, ready to execute (short-term scheduler picks from here)</li>
                    <li><strong>Device Queues</strong>  -  Processes waiting for a specific I/O device</li>
                </ul>
                <h3>Types of Schedulers</h3>
                <ul>
                    <li><strong>Long-term (Job) Scheduler</strong>  -  Selects which processes to bring into memory from disk. Controls the degree of multiprogramming. Balances I/O-bound and CPU-bound processes.</li>
                    <li><strong>Short-term (CPU) Scheduler</strong>  -  Picks the next process from ready queue to execute. Runs very frequently (every ~100ms). Must be extremely fast.</li>
                    <li><strong>Medium-term Scheduler</strong>  -  Handles <strong>swapping</strong>  -  temporarily removing processes from memory to reduce multiprogramming degree, then bringing them back later.</li>
                </ul>
                <h3>Scheduling Criteria</h3>
                <ul>
                    <li><strong>CPU Utilization</strong>  -  Keep the CPU busy. Goal: 40% - 90% in real systems.</li>
                    <li><strong>Throughput</strong>  -  Number of processes completed per time unit.</li>
                    <li><strong>Turnaround Time</strong>  -  Total time from submission to completion. Includes waiting, executing, I/O.</li>
                    <li><strong>Waiting Time</strong>  -  Total time spent in the ready queue. Scheduling affects only this.</li>
                    <li><strong>Response Time</strong>  -  Time from submission to first response. Critical for interactive systems.</li>
                </ul>
                <h3>Preemptive vs Non-Preemptive</h3>
                <p>
                    <strong>Non-preemptive (Cooperative):</strong> Once a process gets the CPU, it runs until it voluntarily
                    releases it (I/O, completion). Simpler but can lead to starvation. Examples: FCFS, non-preemptive SJF.
                    <strong> Preemptive:</strong> The OS can forcibly take the CPU from a process (timer interrupt, higher
                    priority arrival). Better for interactive/real-time systems. Examples: Round Robin, preemptive SJF (SRTF),
                    Priority Scheduling.
                </p>
            </section>

            {/* 2.7 */}
            <section className="module-section">
                <h2>2.7  -  Scheduling Algorithms</h2>

                <h3>First-Come, First-Served (FCFS)</h3>
                <p>
                    Simplest algorithm  -  processes are executed in arrival order. Uses a FIFO queue.
                    <strong> Pros:</strong> Simple, fair. <strong>Cons:</strong> Convoy effect  -  short processes stuck
                    behind long ones, high average waiting time. Non-preemptive.
                </p>

                <h3>Shortest Job First (SJF)</h3>
                <p>
                    Selects the process with the smallest CPU burst. Provably optimal for minimizing average waiting time.
                    <strong> Pros:</strong> Minimum average wait time. <strong>Cons:</strong> Requires knowing burst length
                    in advance (predicted using exponential averaging), risk of starvation for long processes.
                    Can be preemptive (<strong>SRTF</strong>  -  Shortest Remaining Time First) or non-preemptive.
                </p>

                <h3>Round Robin (RR)</h3>
                <p>
                    Each process gets a fixed <strong>time quantum</strong> (10 - 100ms). After the quantum expires, the
                    process is preempted and added to the back of the ready queue. Designed for time-sharing systems.
                    <strong> Pros:</strong> Fair, good response time. <strong>Cons:</strong> High context-switch overhead
                    if quantum is too small; degenerates to FCFS if quantum is too large. Rule of thumb: 80% of CPU bursts
                    should be shorter than the quantum.
                </p>

                <h3>Priority Scheduling</h3>
                <p>
                    Each process has a priority (lower number = higher priority in most systems). CPU goes to the highest
                    priority process. Can be preemptive or non-preemptive. <strong>Problem:</strong> starvation  -  low-priority
                    processes may never execute. <strong>Solution:</strong> aging  -  gradually increase the priority of
                    waiting processes over time.
                </p>

                <h3>Multilevel Queue Scheduling</h3>
                <p>
                    The ready queue is divided into separate queues, each with its own scheduling algorithm:
                    foreground (interactive) uses RR, background (batch) uses FCFS. Each queue also has a priority
                    relative to other queues. Processes are permanently assigned to a queue based on characteristics.
                </p>

                <h3>Multilevel Feedback Queue (MLFQ)</h3>
                <p>
                    Like multilevel queue but processes can <strong>move between queues</strong>. A CPU-bound process
                    uses its full quantum  to  dropped to lower priority queue. An I/O-bound process gives up CPU quickly  to 
                    stays in high priority queue. New processes start at highest priority. This automatically adapts without
                    requiring prior knowledge of burst times. Used in most modern OS (Windows, Linux pre-CFS).
                </p>

                <h3>Completely Fair Scheduler (CFS)  -  Linux</h3>
                <p>
                    Linux's default scheduler. Each process tracks its <strong>virtual runtime</strong> (vruntime)  -  how much
                    CPU time it has consumed. CFS always picks the process with the smallest vruntime using a <strong>red-black
                        tree</strong> for O(log n) selection. Weights based on nice values determine how fast vruntime accumulates.
                    Result: perfectly fair CPU distribution proportional to priorities.
                </p>
            </section>

            <SchedulingViz />

            {/* 2.8 */}
            <section className="module-section">
                <h2>2.8  -  Inter-Process Communication (IPC)</h2>
                <p>
                    Processes need to communicate and share data. Since processes have isolated address spaces, the OS
                    provides IPC mechanisms:
                </p>
                <h3>Pipes</h3>
                <p>
                    Unidirectional byte stream between two related processes. One end writes, the other reads.
                    <strong> Anonymous pipes</strong> exist only between parent-child processes. <strong>Named pipes (FIFOs)</strong>
                    exist in the filesystem and can connect unrelated processes. Limited to same-machine communication.
                </p>
                <h3>Message Queues</h3>
                <p>
                    Kernel-maintained FIFO queues that allow processes to send structured messages. Processes send/receive
                    messages by queue ID. Messages can have types for selective reading. <strong>Advantage:</strong>
                    asynchronous  -  sender doesn't need receiver to be ready.
                </p>
                <h3>Shared Memory</h3>
                <p>
                    The fastest IPC  -  a region of memory is mapped into the address space of multiple processes.
                    Once set up, processes read/write without kernel involvement. <strong>Requires synchronization</strong>
                    (semaphores/mutexes) to prevent race conditions. Created with <code>shmget()</code>/<code>shmat()</code>
                    (System V) or <code>mmap()</code> (POSIX).
                </p>
                <h3>Sockets</h3>
                <p>
                    Bidirectional communication endpoints. Can be <strong>Unix domain sockets</strong> (same machine,
                    faster, uses filesystem path) or <strong>network sockets</strong> (TCP/UDP, across machines).
                    The standard for client-server communication. Used by web servers, databases, etc.
                </p>
                <h3>Signals</h3>
                <p>
                    Software interrupts sent to a process. Limited information (just the signal number). Common signals:
                    <code>SIGTERM</code> (graceful termination), <code>SIGKILL</code> (force kill, uncatchable),
                    <code>SIGINT</code> (Ctrl+C), <code>SIGSEGV</code> (segmentation fault), <code>SIGCHLD</code> (child terminated).
                    Processes can handle, ignore, or block most signals (except SIGKILL and SIGSTOP).
                </p>

                <OsCodeBlock
                    title="ipc_pipe.c"
                    codes={{
                        c: `#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <sys/wait.h>

int main() {
    int fd[2];  // fd[0]=read, fd[1]=write
    pipe(fd);

    pid_t pid = fork();

    if (pid == 0) {
        // Child: read from pipe
        close(fd[1]);   // Close write end
        char buf[256];
        int n = read(fd[0], buf, sizeof(buf) - 1);
        buf[n] = '\\0';
        printf("Child received: %s\\n", buf);
        close(fd[0]);
    } else {
        // Parent: write to pipe
        close(fd[0]);   // Close read end
        const char *msg = "Hello from parent via pipe!";
        write(fd[1], msg, strlen(msg));
        close(fd[1]);
        wait(NULL);
    }

    return 0;
}

/* Shared Memory Example:
 *   int shmid = shmget(IPC_PRIVATE, 4096, IPC_CREAT | 0666);
 *   char *shmaddr = shmat(shmid, NULL, 0);
 *   strcpy(shmaddr, "shared data");
 *   shmdt(shmaddr);
 *   shmctl(shmid, IPC_RMID, NULL);
 */`,
                        python: `import multiprocessing
import os

# Pipe Example
def child_process(conn):
    msg = conn.recv()
    print(f"Child received: {msg}")
    conn.send("Reply from child!")
    conn.close()

parent_conn, child_conn = multiprocessing.Pipe()
p = multiprocessing.Process(target=child_process, args=(child_conn,))
p.start()

parent_conn.send("Hello from parent via pipe!")
reply = parent_conn.recv()
print(f"Parent received: {reply}")
p.join()

# Shared Memory Example
from multiprocessing import Value, Array

shared_counter = Value('i', 0)  # shared int
shared_array = Array('d', [0.0, 1.0, 2.0])  # shared doubles

def worker(counter, arr):
    counter.value += 1
    arr[0] = 42.0

p = multiprocessing.Process(target=worker, args=(shared_counter, shared_array))
p.start()
p.join()
print(f"Counter: {shared_counter.value}, Array[0]: {shared_array[0]}")`,
                        java: `import java.io.*;

public class IPCDemo {
    public static void main(String[] args) throws Exception {
        // PipedInputStream/PipedOutputStream for IPC
        PipedOutputStream pos = new PipedOutputStream();
        PipedInputStream pis = new PipedInputStream(pos);

        Thread writer = new Thread(()  to  {
            try {
                String msg = "Hello from writer thread!";
                pos.write(msg.getBytes());
                pos.close();
            } catch (IOException e) { e.printStackTrace(); }
        });

        Thread reader = new Thread(()  to  {
            try {
                byte[] buf = new byte[256];
                int n = pis.read(buf);
                System.out.println("Received: " + new String(buf, 0, n));
                pis.close();
            } catch (IOException e) { e.printStackTrace(); }
        });

        writer.start();
        reader.start();
        writer.join();
        reader.join();

        // ProcessBuilder for real IPC
        ProcessBuilder pb = new ProcessBuilder("echo", "Hello IPC");
        Process p = pb.start();
        BufferedReader br = new BufferedReader(
            new InputStreamReader(p.getInputStream()));
        System.out.println("Process output: " + br.readLine());
        p.waitFor();
    }
}`,
                    }}
                />
            </section>

            <OsQuiz
                title="Module 2  -  Comprehensive Check"
                questions={[
                    {
                        question: 'What system call creates a new process in Unix?',
                        options: ['exec()', 'spawn()', 'fork()', 'create()'],
                        answer: 2,
                    },
                    {
                        question: 'Which scheduling algorithm has the optimal average waiting time?',
                        options: ['FCFS', 'Round Robin', 'SJF', 'Priority'],
                        answer: 2,
                        explanation: 'SJF (Shortest Job First) provably minimizes average waiting time.',
                    },
                    {
                        question: 'What is a PCB?',
                        options: [
                            'Process Compilation Block',
                            'Data structure holding all info about a process',
                            'CPU cache block',
                            'Physical Computing Board',
                        ],
                        answer: 1,
                    },
                    {
                        question: 'What is a zombie process?',
                        options: [
                            'A process that consumes excessive CPU',
                            'A terminated process whose parent hasn\'t called wait()',
                            'A process blocked on I/O',
                            'A process with no memory allocation',
                        ],
                        answer: 1,
                    },
                    {
                        question: 'Which scheduling solves starvation in Priority Scheduling?',
                        options: ['FCFS', 'Aging', 'Swapping', 'Paging'],
                        answer: 1,
                        explanation: 'Aging gradually increases the priority of waiting processes to prevent starvation.',
                    },
                    {
                        question: 'Which IPC mechanism is fastest?',
                        options: ['Pipes', 'Message Queues', 'Shared Memory', 'Sockets'],
                        answer: 2,
                        explanation: 'Shared memory requires no kernel involvement after setup, making it the fastest.',
                    },
                ]}
            />

            <OsResources topicId="process-management" />

            <section className="module-section">
                <h2>Interview Corner</h2>
                <OsInterviewQuestion
                    question="What is the difference between a process and a program?"
                    answer="A program is a passive entity stored on disk (an executable file). A process is an active entity  -  a program in execution with its own memory space (text, data, heap, stack), registers, open files, and state. Multiple processes can be instances of the same program, each with independent address spaces."
                />
                <OsInterviewQuestion
                    question="What is a zombie process? How do you fix it?"
                    answer="A zombie (defunct) process has finished execution but still has an entry in the process table because the parent hasn't called wait()/waitpid() to read its exit status. It consumes no CPU or memory resources except the PID and PCB entry. Fix: have the parent call wait(); set a SIGCHLD handler; or kill the parent (causing init to adopt and reap the zombie). Use 'ps aux | grep Z' to find zombies."
                />
                <OsInterviewQuestion
                    question="Explain the convoy effect in FCFS scheduling."
                    answer="The convoy effect occurs in FCFS when a long CPU-bound process arrives first, forcing all shorter processes behind it to wait. This results in high average waiting time. Example: if P1 has a burst of 100ms and P2 - P10 each have 1ms bursts, P2 - P10 must wait ~100ms each. SJF eliminates this by running shortest jobs first."
                />
                <OsInterviewQuestion
                    question="Compare shared memory and message passing."
                    answer="Shared Memory: Fastest IPC  -  kernel involved only during setup (shmget/mmap). Processes read/write shared region directly. Requires explicit synchronization (mutexes/semaphores). Better for large data transfers. Message Passing: Kernel involved in every send/receive operation. No synchronization issues (kernel handles it). Better for small amounts of data. Easier to implement correctly. Works across machines (sockets). Distributed systems prefer message passing."
                />
                <OsInterviewQuestion
                    question="What is the Multilevel Feedback Queue and why is it important?"
                    answer="MLFQ uses multiple ready queues with different priorities. New processes start at the highest priority. If a process uses its full time quantum (CPU-bound), it's demoted to a lower queue. If it gives up the CPU before the quantum expires (I/O-bound), it stays at the same or higher priority. This automatically separates interactive (I/O-bound) from batch (CPU-bound) processes without requiring prior burst-time knowledge. Most real OS use variants of MLFQ."
                />
            </section>
        </div>
    );
}
