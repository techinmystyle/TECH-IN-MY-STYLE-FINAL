import OsCodeBlock from '../components/OsCodeBlock';
import OsResources from '../components/OsResources';
import OsQuiz from '../components/OsQuiz';
import OsInterviewQuestion from '../components/OsInterviewQuestion';

export default function OsIntroduction() {
    return (
        <div className="module-page animate-fade-in">
            <div className="module-header">
                <span className="module-badge">MODULE 01</span>
                <h1>Introduction to <span className="glow-text">Operating Systems</span></h1>
                <p className="module-subtitle">Understanding the foundation of all computing  -  the OS layer that makes hardware useful.</p>
            </div>

            {/* 1.1 */}
            <section className="module-section">
                <h2>1.1  -  What is an Operating System?</h2>
                <p>
                    An Operating System (OS) is system software that manages computer hardware and software resources
                    and provides common services for computer programs. It acts as an intermediary between users and
                    computer hardware. Without an OS, every application would need to handle its own hardware interfaces  - 
                    an impractical approach for modern computing.
                </p>
                <p>
                    From a <strong>user's perspective</strong>, the OS provides convenience and ease of use. From a
                    <strong> system's perspective</strong>, the OS is a <strong>resource allocator</strong>  -  it manages
                    CPU time, memory space, I/O devices, and file storage, deciding how to allocate them among competing
                    programs efficiently and fairly.
                </p>
                <h3>Core Responsibilities</h3>
                <ul>
                    <li><strong>Process Management</strong>  -  Creating, scheduling, and terminating processes</li>
                    <li><strong>Memory Management</strong>  -  Allocating and deallocating memory, virtual memory</li>
                    <li><strong>File System Management</strong>  -  Organizing, storing, retrieving, and protecting data on storage</li>
                    <li><strong>Device Management</strong>  -  Managing device drivers and I/O operations</li>
                    <li><strong>Security & Protection</strong>  -  Authentication, authorization, access control</li>
                    <li><strong>User Interface</strong>  -  GUI (Windows, macOS) or CLI (Linux terminal, DOS)</li>
                    <li><strong>Networking</strong>  -  Managing network connections, protocols, and distributed resources</li>
                </ul>
            </section>

            {/* 1.2 */}
            <section className="module-section">
                <h2>1.2  -  Evolution & History of Operating Systems</h2>
                <p>
                    Operating systems have evolved through several generations, each solving the limitations of the previous:
                </p>
                <h3>Generation 1 (1940s - 50s): No OS</h3>
                <p>
                    Programs were written in machine language and loaded manually using switches or punched cards.
                    The programmer was the operator. Only one program could run at a time (serial processing). Significant
                    CPU idle time  -  humans are slow compared to computers.
                </p>
                <h3>Generation 2 (1950s - 60s): Batch Systems</h3>
                <p>
                    Jobs were batched together with similar requirements. A <strong>resident monitor</strong> (early OS)
                    automatically loaded and ran the next job. The operator grouped similar jobs to reduce setup time.
                    Problem: CPU still idle during I/O operations.
                </p>
                <h3>Generation 3 (1960s - 70s): Multiprogramming & Time-Sharing</h3>
                <p>
                    <strong>Multiprogramming</strong> keeps several jobs in memory simultaneously. When one job waits for I/O,
                    the CPU switches to another  -  maximizing CPU utilization. <strong>Time-sharing (multitasking)</strong>
                    extends this concept: the CPU switches between jobs so frequently that users can interact with each
                    program while it is running (e.g., UNIX, Multics). This era introduced concepts like job scheduling, memory
                    management, and protection mechanisms.
                </p>
                <h3>Generation 4 (1970s - present): Personal Computers & GUIs</h3>
                <p>
                    Affordable microprocessors led to personal computers. OS design shifted toward ease of use over
                    hardware efficiency: Apple Macintosh (1984) popularized the GUI, Microsoft Windows dominated the PC market,
                    Linux (1991) brought open-source Unix to PCs. Modern OS features: multitasking, networking, plug-and-play.
                </p>
                <h3>Generation 5 (2000s - present): Mobile, Cloud, IoT</h3>
                <p>
                    Smartphones introduced mobile OS (Android, iOS) with touch UIs, sensors, and power management. Cloud
                    computing uses hypervisors and containers for virtualized OS instances. IoT devices run embedded RTOS
                    with minimal resources. Edge computing and serverless models further abstract the OS.
                </p>
            </section>

            {/* 1.3 */}
            <section className="module-section">
                <h2>1.3  -  Types of Operating Systems</h2>
                <h3>Batch Operating System</h3>
                <p>
                    Processes jobs in batches without direct user interaction. Jobs are submitted, grouped by type, and
                    executed sequentially. Advantages: efficient for large repetitive tasks (payroll, billing).
                    Disadvantage: no interactivity, long turnaround time.
                </p>
                <h3>Multiprogramming Operating System</h3>
                <p>
                    Keeps multiple programs in memory. When the active program blocks (I/O wait), the CPU switches to another.
                    Maximizes CPU utilization but does not provide user interaction.
                </p>
                <h3>Time-Sharing (Multitasking) OS</h3>
                <p>
                    An extension of multiprogramming where the CPU rapidly switches between programs, giving each user a
                    small time slice. Each user feels they have the system to themselves. Example: UNIX, modern
                    Linux/Windows/macOS. Requires memory protection and scheduling algorithms.
                </p>
                <h3>Real-Time Operating System (RTOS)</h3>
                <p>
                    Guarantees processing within strict time constraints. Two types: <strong>Hard real-time</strong>  - 
                    missing a deadline is a system failure (pacemakers, anti-lock brakes, flight control systems).
                    <strong> Soft real-time</strong>  -  deadlines are important but not critical (audio/video streaming,
                    online transactions). Examples: VxWorks, FreeRTOS, QNX.
                </p>
                <h3>Distributed Operating System</h3>
                <p>
                    Manages a group of networked, independent computers and makes them appear as a single system.
                    Provides resource sharing, computation speedup, and fault tolerance. Examples: Google's internal
                    systems, Apache Hadoop YARN. Challenges: consistency, network latency, partial failures.
                </p>
                <h3>Embedded Operating System</h3>
                <p>
                    Designed for specific devices with limited resources  -  no disk, limited RAM, low power.
                    Examples: smart watches, routers, industrial controllers, automotive ECUs. Often real-time.
                </p>
                <h3>Network Operating System (NOS)</h3>
                <p>
                    Provides networking capabilities: file sharing, printer sharing, user management across a network.
                    Each machine runs its own OS but has networking functions built in. Examples: Novell NetWare,
                    Windows Server.
                </p>
                <h3>Mobile Operating System</h3>
                <p>
                    Optimized for smartphones and tablets with touch interfaces, sensors (GPS, accelerometer),
                    power management, and sandboxed apps. Examples: Android (Linux-based), iOS (XNU kernel).
                </p>
            </section>

            {/* 1.4 */}
            <section className="module-section">
                <h2>1.4  -  OS Architecture & Structure</h2>
                <p>
                    How the OS itself is organized internally varies significantly across different designs:
                </p>
                <h3>Simple / Monolithic Structure</h3>
                <p>
                    No clear separation  -  all OS services compiled into a single large binary running in kernel space.
                    Early systems like MS-DOS had minimal structure. Modern monolithic kernels like <strong>Linux</strong>
                    are well-modularized internally, but all code still runs in a shared address space.
                    <strong> Advantage:</strong> high performance (no IPC overhead). <strong>Disadvantage:</strong> a bug
                    in any component can crash the entire system.
                </p>
                <h3>Layered Approach</h3>
                <p>
                    The OS is divided into layers, each built on the one below. Layer 0 = hardware, Layer N = user
                    interface. Each layer only uses functions of lower layers. <strong>Advantage:</strong> simplifies
                    debugging and verification. <strong>Disadvantage:</strong> defining layers is challenging, performance
                    overhead from layer crossing. Example: THE operating system (Dijkstra).
                </p>
                <h3>Microkernel</h3>
                <p>
                    Moves as much functionality as possible out of the kernel into user space  -  only the bare minimum
                    remains in the kernel (IPC, basic scheduling, memory management). File systems, device drivers,
                    and networking run as user-space services communicating via message passing.
                    <strong> Advantage:</strong> reliability (crash in a service doesn't crash the kernel), portability.
                    <strong> Disadvantage:</strong> performance overhead from frequent IPC. Examples: MINIX, QNX, L4,
                    GNU Hurd.
                </p>
                <h3>Hybrid Kernel</h3>
                <p>
                    Combines monolithic and microkernel approaches. Performance-critical services (like window management)
                    run in kernel space, while others run in user space. <strong>Windows NT</strong> and <strong>macOS XNU</strong>
                    use hybrid architectures. Pragmatic approach to balance performance and modularity.
                </p>
                <h3>Modular Kernel (Loadable Kernel Modules)</h3>
                <p>
                    The kernel has a set of core components, with additional modules that can be loaded and unloaded
                    dynamically at runtime. <strong>Linux</strong> uses this extensively  -  device drivers, file systems,
                    and network protocols are loadable modules (<code>insmod</code>, <code>rmmod</code>, <code>lsmod</code>).
                    Combines monolithic performance with microkernel flexibility.
                </p>
                <h3>Exokernel</h3>
                <p>
                    Provides minimal abstractions  -  applications directly manage hardware resources through library
                    operating systems (libOS). The kernel only ensures protection and multiplexing. Gives applications
                    maximum control for specialized optimizations. Research concept from MIT.
                </p>
            </section>

            {/* 1.5 */}
            <section className="module-section">
                <h2>1.5  -  Dual-Mode Operation</h2>
                <p>
                    To protect the OS from errant user programs, CPUs provide at least two modes of operation:
                </p>
                <h3>User Mode</h3>
                <p>
                    When executing user application code. Restricted access  -  cannot directly access hardware, cannot
                    execute privileged instructions (like modifying page tables, disabling interrupts, accessing I/O ports).
                    Attempting a privileged instruction in user mode causes a <strong>trap</strong> (hardware exception).
                </p>
                <h3>Kernel Mode (Supervisor / Privileged Mode)</h3>
                <p>
                    When executing OS kernel code. Full access to all hardware and instructions. The OS runs in this mode  - 
                    it can access any memory address, execute any CPU instruction, and interact with any device.
                </p>
                <h3>Mode Switching</h3>
                <p>
                    The transition from user  to  kernel mode happens via: <strong>system calls</strong> (software interrupt/trap),
                    <strong> hardware interrupts</strong> (I/O device, timer), or <strong>exceptions</strong> (division by zero,
                    page fault). The CPU's <strong>mode bit</strong> (in the status register) indicates the current mode.
                    Modern CPUs (x86) actually have 4 privilege rings (Ring 0 - 3), but most OS use only Ring 0 (kernel) and
                    Ring 3 (user).
                </p>
            </section>

            {/* 1.6 */}
            <section className="module-section">
                <h2>1.6  -  System Calls</h2>
                <p>
                    System calls are the <strong>programmatic interface</strong> between user programs and the OS kernel.
                    They are the only controlled way for user-space code to request kernel services.
                </p>
                <h3>System Call Mechanism</h3>
                <p>
                    1) User program calls a C library wrapper (e.g., <code>write()</code>). 2) Library places the system
                    call number in a register (e.g., <code>eax</code> on x86). 3) Library executes a trap instruction
                    (<code>int 0x80</code> or <code>syscall</code>). 4) CPU switches to kernel mode. 5) Kernel looks up the
                    system call handler in the <strong>system call table</strong>. 6) Handler executes the requested service.
                    7) Result is placed in a register. 8) CPU returns to user mode.
                </p>
                <h3>Categories of System Calls</h3>
                <ul>
                    <li><strong>Process Control</strong>  -  <code>fork()</code>, <code>exec()</code>, <code>wait()</code>, <code>exit()</code>, <code>kill()</code></li>
                    <li><strong>File Management</strong>  -  <code>open()</code>, <code>read()</code>, <code>write()</code>, <code>close()</code>, <code>lseek()</code></li>
                    <li><strong>Device Management</strong>  -  <code>ioctl()</code>, <code>read()</code>, <code>write()</code> on devices</li>
                    <li><strong>Information Maintenance</strong>  -  <code>getpid()</code>, <code>time()</code>, <code>uname()</code></li>
                    <li><strong>Communication</strong>  -  <code>pipe()</code>, <code>shmget()</code>, <code>socket()</code>, <code>mmap()</code></li>
                    <li><strong>Protection</strong>  -  <code>chmod()</code>, <code>chown()</code>, <code>umask()</code></li>
                </ul>
                <OsCodeBlock
                    title="system_calls_demo"
                    codes={{
                        c: `#include <stdio.h>
#include <unistd.h>
#include <sys/utsname.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

int main() {
    // Process info system calls
    printf("PID   : %d\\n", getpid());
    printf("PPID  : %d\\n", getppid());
    printf("UID   : %d\\n", getuid());

    // System info
    struct utsname info;
    uname(&info);
    printf("System: %s %s\\n", info.sysname, info.release);
    printf("Machine: %s\\n", info.machine);

    // File system calls
    int fd = open("test.txt", O_WRONLY | O_CREAT | O_TRUNC, 0644);
    if (fd >= 0) {
        const char *msg = "Written via system call!\\n";
        write(fd, msg, 24);
        close(fd);
    }

    // Read it back
    char buf[128];
    fd = open("test.txt", O_RDONLY);
    ssize_t n = read(fd, buf, sizeof(buf) - 1);
    buf[n] = '\\0';
    printf("Read: %s", buf);
    close(fd);
    unlink("test.txt");

    return 0;
}`,
                        python: `import os
import platform
import sys

# Process info
print(f"PID    : {os.getpid()}")
print(f"PPID   : {os.getppid()}")
print(f"UID    : {os.getuid()}")

# System info
print(f"System : {platform.system()} {platform.release()}")
print(f"Machine: {platform.machine()}")
print(f"Python : {sys.version}")
print(f"CPUs   : {os.cpu_count()}")

# File operations (which use system calls internally)
with open("test.txt", "w") as f:
    f.write("Written via Python!\\n")

with open("test.txt", "r") as f:
    print(f"Read: {f.read()}", end="")

os.unlink("test.txt")

# Direct low-level system calls (Linux)
# import ctypes
# libc = ctypes.CDLL(None)
# libc.syscall(39)  # SYS_getpid`,
                        java: `public class SystemCallsDemo {
    public static void main(String[] args) {
        // Process info
        long pid = ProcessHandle.current().pid();
        System.out.println("PID   : " + pid);

        // System info
        System.out.println("OS    : " + System.getProperty("os.name")
            + " " + System.getProperty("os.version"));
        System.out.println("Arch  : " + System.getProperty("os.arch"));
        System.out.println("User  : " + System.getProperty("user.name"));
        System.out.println("Cores : "
            + Runtime.getRuntime().availableProcessors());

        // Memory info (JVM manages syscalls internally)
        Runtime rt = Runtime.getRuntime();
        System.out.println("Max Mem: "
            + rt.maxMemory() / (1024*1024) + " MB");
        System.out.println("Free   : "
            + rt.freeMemory() / (1024*1024) + " MB");

        // File operations
        try {
            java.nio.file.Files.writeString(
                java.nio.file.Path.of("test.txt"),
                "Written via Java!\\n");
            String content = java.nio.file.Files.readString(
                java.nio.file.Path.of("test.txt"));
            System.out.println("Read: " + content);
            java.nio.file.Files.delete(
                java.nio.file.Path.of("test.txt"));
        } catch (Exception e) { e.printStackTrace(); }
    }
}`,
                    }}
                />
            </section>

            {/* 1.7 */}
            <section className="module-section">
                <h2>1.7  -  Operating System Services</h2>
                <p>The OS provides several categories of services to make programming tasks easier:</p>
                <ul>
                    <li><strong>Program Execution</strong>  -  Load programs into memory, run them, and handle termination (normal or abnormal)</li>
                    <li><strong>I/O Operations</strong>  -  Provide uniform interface to diverse I/O devices (disk, network, display, keyboard)</li>
                    <li><strong>File System Manipulation</strong>  -  Create, delete, read, write files and directories; manage permissions</li>
                    <li><strong>Communications</strong>  -  IPC between processes on same machine (pipes, shared memory) or across network (sockets)</li>
                    <li><strong>Error Detection</strong>  -  Detect errors in CPU, memory, I/O devices, and user programs; take corrective action</li>
                    <li><strong>Resource Allocation</strong>  -  Allocate CPU cycles, memory, file storage, I/O devices among concurrent users/processes</li>
                    <li><strong>Accounting</strong>  -  Track which users consume how many resources (useful for billing, performance analysis)</li>
                    <li><strong>Protection & Security</strong>  -  Ensure processes don't interfere with each other or the OS; authenticate users</li>
                </ul>
            </section>

            {/* 1.8 */}
            <section className="module-section">
                <h2>1.8  -  System Programs & Utilities</h2>
                <p>
                    System programs (system utilities) provide a convenient environment for program development and execution.
                    They sit between the OS kernel and application programs:
                </p>
                <ul>
                    <li><strong>File management</strong>  -  <code>cp</code>, <code>mv</code>, <code>rm</code>, <code>ls</code>, <code>mkdir</code>, <code>chmod</code></li>
                    <li><strong>Status information</strong>  -  <code>top</code>, <code>ps</code>, <code>df</code>, <code>free</code>, <code>uptime</code>, <code>who</code></li>
                    <li><strong>File modification</strong>  -  <code>vim</code>, <code>nano</code>, <code>sed</code>, <code>awk</code>, <code>grep</code></li>
                    <li><strong>Programming support</strong>  -  compilers (<code>gcc</code>), debuggers (<code>gdb</code>), interpreters (<code>python</code>)</li>
                    <li><strong>Communication</strong>  -  <code>ssh</code>, <code>ftp</code>, <code>curl</code>, <code>mail</code></li>
                    <li><strong>Background services</strong>  -  daemons/services running continuously (web server, cron, syslog)</li>
                </ul>
            </section>

            {/* 1.9 */}
            <section className="module-section">
                <h2>1.9  -  Booting Process</h2>
                <p>
                    The bootstrap procedure loads the OS into memory when the computer is powered on:
                </p>
                <ol>
                    <li><strong>Power On</strong>  to  CPU executes code from a fixed address in ROM/flash (BIOS/UEFI firmware)</li>
                    <li><strong>POST</strong> (Power-On Self-Test)  to  Tests hardware: CPU, RAM, peripherals</li>
                    <li><strong>Boot Device</strong>  to  BIOS/UEFI identifies the boot device (HDD, SSD, USB, network)</li>
                    <li><strong>Bootloader</strong>  to  Firmware loads the bootloader from MBR (512 bytes) or GPT/EFI partition. Examples: GRUB, Windows Boot Manager, systemd-boot</li>
                    <li><strong>Kernel Loading</strong>  to  Bootloader loads the OS kernel into memory and passes control to it</li>
                    <li><strong>Kernel Init</strong>  to  Kernel initializes hardware drivers, memory management, interrupt handlers</li>
                    <li><strong>Root Filesystem</strong>  to  Kernel mounts the root filesystem</li>
                    <li><strong>Init Process</strong>  to  Kernel starts the first user-space process: <code>init</code> (SysV) or <code>systemd</code> (PID 1)</li>
                    <li><strong>Services</strong>  to  Init process starts system daemons and services in the configured order</li>
                    <li><strong>Login</strong>  to  Display manager or login prompt appears for user authentication</li>
                </ol>
            </section>

            {/* 1.10 */}
            <section className="module-section">
                <h2>1.10  -  Interrupts & Interrupt Handling</h2>
                <p>
                    Interrupts are the fundamental mechanism for the OS to respond to events. They signal the CPU
                    to stop current execution and handle an event.
                </p>
                <h3>Types of Interrupts</h3>
                <ul>
                    <li><strong>Hardware Interrupts</strong>  -  Generated by devices (keyboard press, timer tick, disk I/O complete, network packet arrival)</li>
                    <li><strong>Software Interrupts (Traps)</strong>  -  Generated by programs via special instructions (system calls, breakpoints)</li>
                    <li><strong>Exceptions</strong>  -  Generated by the CPU on errors (divide-by-zero, page fault, segmentation fault, invalid opcode)</li>
                </ul>
                <h3>Interrupt Handling Process</h3>
                <ol>
                    <li>Device raises an interrupt signal on the interrupt request line</li>
                    <li>CPU finishes the current instruction</li>
                    <li>CPU saves the current state (PC, registers, flags) onto the stack or into a save area</li>
                    <li>CPU disables further interrupts (on some architectures) to prevent re-entrance</li>
                    <li>CPU looks up the <strong>Interrupt Vector Table (IVT)</strong> or <strong>Interrupt Descriptor Table (IDT)</strong> using the interrupt number</li>
                    <li>Jumps to the <strong>Interrupt Service Routine (ISR)</strong> handler address</li>
                    <li>ISR processes the event (reads data from device, updates buffers, signals processes)</li>
                    <li>ISR restores the saved CPU state</li>
                    <li>CPU resumes the interrupted process with <code>iret</code> instruction</li>
                </ol>
                <h3>Interrupt Priority & Masking</h3>
                <p>
                    Interrupts have priorities  -  a higher-priority interrupt can preempt a lower-priority ISR. <strong>Maskable
                        interrupts</strong> can be temporarily disabled (e.g., during critical kernel sections). <strong>Non-maskable
                            interrupts (NMI)</strong> cannot be disabled and indicate critical events (hardware failure, watchdog timer).
                    The <strong>Programmable Interrupt Controller (PIC/APIC)</strong> manages interrupt routing on x86 systems.
                </p>
            </section>

            <OsQuiz
                title="Module 1  -  Comprehensive Check"
                questions={[
                    {
                        question: 'What is the primary role of an Operating System?',
                        options: [
                            'Compile source code',
                            'Manage hardware and software resources',
                            'Browse the internet',
                            'Design user interfaces',
                        ],
                        answer: 1,
                        explanation: 'The OS manages hardware resources and provides services for applications.',
                    },
                    {
                        question: 'Which OS type guarantees response within strict time limits?',
                        options: ['Batch OS', 'Time-Sharing OS', 'Real-Time OS', 'Distributed OS'],
                        answer: 2,
                    },
                    {
                        question: 'In a monolithic kernel, where do OS services run?',
                        options: ['User space only', 'Kernel space', 'Both equally', 'Cloud'],
                        answer: 1,
                        explanation: 'In a monolithic kernel, all services run in privileged kernel space for performance.',
                    },
                    {
                        question: 'What CPU mechanism transitions from user mode to kernel mode?',
                        options: ['Context switch', 'Bootstrap', 'Trap / Software interrupt', 'Paging'],
                        answer: 2,
                        explanation: 'A trap (software interrupt) is used to request OS services from user mode.',
                    },
                    {
                        question: 'Which architecture moves most OS services to user-space?',
                        options: ['Monolithic', 'Layered', 'Microkernel', 'Exokernel'],
                        answer: 2,
                        explanation: 'Microkernels keep only minimal services (IPC, scheduling) in kernel space.',
                    },
                ]}
            />

            <OsResources topicId="introduction" />

            <section className="module-section">
                <h2>Interview Corner</h2>
                <OsInterviewQuestion
                    question="What is the difference between a kernel and an OS?"
                    answer="The kernel is the core component that has direct access to hardware  -  it manages CPU, memory, and devices. The OS includes the kernel plus system libraries, utilities, shell, and user interfaces. Think of the kernel as the engine of a car, and the OS as the entire vehicle including body, dashboard, and controls."
                />
                <OsInterviewQuestion
                    question="Explain the difference between user mode and kernel mode."
                    answer="In user mode, executing code has restricted access to hardware and memory  -  it cannot execute privileged instructions or access kernel memory. In kernel mode, the code has unrestricted access to all hardware resources and instructions. System calls transition from user to kernel mode through a controlled mechanism called a trap. The CPU's mode bit (in the status register) tracks the current mode."
                />
                <OsInterviewQuestion
                    question="What is the difference between a microkernel and a monolithic kernel?"
                    answer="A monolithic kernel runs all OS services (file system, device drivers, networking) in kernel space as one large binary. It's fast (no IPC overhead) but less reliable (one bug crashes everything). A microkernel keeps only essential services (IPC, basic scheduling, memory) in the kernel, running everything else as user-space processes communicating via message passing. It's more reliable and portable but slower due to IPC overhead. Linux is monolithic (with loadable modules), QNX/MINIX are microkernels, and Windows/macOS are hybrids."
                />
                <OsInterviewQuestion
                    question="Explain the boot process of a computer."
                    answer="1) Power on triggers BIOS/UEFI firmware stored in ROM. 2) POST tests hardware integrity. 3) Firmware finds the boot device and loads the bootloader (GRUB/Windows Boot Manager) from MBR/GPT. 4) Bootloader loads the kernel into memory. 5) Kernel initializes drivers, memory subsystem, and interrupt handlers. 6) Kernel mounts root filesystem and starts init/systemd (PID 1). 7) Init launches system services and daemons. 8) Login manager presents user authentication."
                />
                <OsInterviewQuestion
                    question="What are the different types of system calls? Give examples."
                    answer="System calls fall into 6 categories: 1) Process Control  -  fork(), exec(), wait(), exit() for creating and managing processes. 2) File Management  -  open(), read(), write(), close() for file operations. 3) Device Management  -  ioctl(), read(), write() on device files. 4) Information Maintenance  -  getpid(), time(), uname() for system/process info. 5) Communication  -  pipe(), socket(), shmget(), mmap() for IPC. 6) Protection  -  chmod(), chown() for access control."
                />
            </section>
        </div>
    );
}
