import OsInterviewQuestion from '../components/OsInterviewQuestion';
import OsResources from '../components/OsResources';

export default function OsInterviewPrep() {
    return (
        <div className="module-page animate-fade-in">
            <div className="module-header">
                <span className="module-badge">MODULE 09</span>
                <h1>Interview <span className="glow-text">Preparation</span></h1>
                <p className="module-subtitle">25 essential OS interview questions with detailed answers covering all major topics.</p>
            </div>

            <section className="module-section">
                <h2>Process & CPU Scheduling</h2>
                <OsInterviewQuestion
                    question="What happens when you type a URL in the browser?"
                    answer="1) DNS resolution: browser checks cache  to  OS resolver  to  recursive DNS  to  returns IP address. 2) TCP connection: 3-way handshake (SYN, SYN-ACK, ACK) establishing a socket. 3) TLS handshake: negotiate cipher, exchange certificates, generate session keys. 4) HTTP request: browser sends GET request with headers. 5) Server processing: web server (process/thread from pool) handles request, may query databases. 6) HTTP response: server sends HTML with status code. 7) Rendering: browser parses HTML, fetches CSS/JS/images (more connections), builds DOM, paints pixels. OS involvement: DNS caching, socket system calls, TCP/IP stack, process scheduling for browser, memory allocation for page rendering."
                />
                <OsInterviewQuestion
                    question="Explain the boot process of an operating system."
                    answer="1) Power on  to  CPU executes from fixed ROM address (BIOS/UEFI firmware). 2) POST tests hardware (CPU, RAM, peripherals). 3) Firmware identifies boot device, reads MBR (512 bytes) or GPT/EFI boot partition. 4) Bootloader loads (GRUB/Windows Boot Manager)  -  displays menu, loads kernel and initrd/initramfs into memory. 5) Kernel initializes: sets up interrupt handlers, memory management (page tables), device drivers, mounts root filesystem. 6) Kernel starts init/systemd (PID 1)  -  the first user-space process. 7) Init reads configuration, starts system services (networking, logging, cron) in dependency order. 8) Display manager starts  to  login prompt. Key concepts: real mode  to  protected mode transition, initramfs for early root filesystem, systemd targets/unit files."
                />
                <OsInterviewQuestion
                    question="What is a system call and how is it different from a library call?"
                    answer="A system call is a direct request to the kernel for privileged operations (file I/O, process creation, memory management). It involves a mode switch from user to kernel mode via a trap instruction (int 0x80 or syscall), saving CPU state, looking up the handler in the syscall table, executing the kernel function, and returning to user mode. A library call is a regular user-space function (printf, strlen)  -  no mode switch. However, library calls often wrap system calls (printf eventually calls write()). System calls are expensive (~1-10 μs) due to the mode switch and cache disruption; library calls are cheap (~ns). Example: write() is a system call; printf() is a library call that buffers output and calls write()."
                />
                <OsInterviewQuestion
                    question="Explain the difference between preemptive and non-preemptive scheduling."
                    answer="Non-preemptive (cooperative): Once a process gets the CPU, it runs until it voluntarily releases it (I/O request, completion, yield). Simpler to implement, no race conditions from preemption. But a CPU-bound process can monopolize the CPU, starving other processes. Examples: FCFS, non-preemptive SJF. Preemptive: The OS can forcibly take the CPU from a running process (via timer interrupt). Better response time, fairer CPU distribution, essential for interactive and real-time systems. But requires synchronization (race conditions possible if a process is preempted while modifying shared data). Examples: Round Robin, SRTF, Priority Scheduling. All modern general-purpose OS are preemptive."
                />
                <OsInterviewQuestion
                    question="Compare Round Robin and Shortest Job First scheduling."
                    answer="SJF selects the process with the shortest CPU burst  -  provably minimizes average waiting time. Problem: requires knowing burst lengths in advance (predicted using exponential averaging). Can cause starvation for long processes. Non-preemptive SJF might delay interactive processes. Round Robin gives each process a fixed time quantum (typically 10-100 ms). After the quantum, the process is preempted and placed at the back of the queue. Fair  -  all processes get equal CPU share. Good response time for interactive systems. Performance depends on quantum size: too small  to  excessive context switching; too large  to  degrades to FCFS. In practice, most OS use MLFQ which adapts  -  interactive processes get priority (like SJF) while ensuring fairness (like RR)."
                />
            </section>

            <section className="module-section">
                <h2>Threads & Synchronization</h2>
                <OsInterviewQuestion
                    question="What is a spinlock? When should you use it vs a mutex?"
                    answer="A spinlock is a lock that busy-waits (spins) in a tight loop checking if the lock is available, rather than putting the thread to sleep. A mutex puts the thread to sleep and wakes it when the lock is released. Use spinlocks when: 1) The critical section is very short (<< context switch time), 2) You're on a multicore system (spinning on one core while the lock holder runs on another), 3) In interrupt handlers (can't sleep in interrupt context). Use mutexes when: 1) The critical section is long or involves I/O, 2) On single-core systems (spinning wastes the only CPU), 3) Other threads might need CPU time. In the Linux kernel, spinlocks disable preemption to prevent deadlock (holder can't be preempted on the same CPU). Adaptive mutexes spin briefly, then sleep (used in Solaris, modern Linux)"
                />
                <OsInterviewQuestion
                    question="How does copy-on-write (COW) work in fork()?"
                    answer="When fork() is called, the child process gets a copy of the parent's page table, but both parent and child point to the SAME physical frames. All shared pages are marked read-only in both processes' page tables. When either process tries to write to a shared page: 1) A page fault occurs (write to read-only page). 2) The kernel allocates a new frame, copies the page content, updates the writing process's page table to point to the new frame with read-write permissions. 3) The original frame retains the read-only mapping for the other process (or becomes read-write if there are no more sharers). Benefits: fork() is nearly instantaneous (just copy page table, not memory). If the child calls exec() immediately (the common pattern), no pages are ever copied  -  the old page table is discarded when exec loads the new program."
                />
                <OsInterviewQuestion
                    question="What is the difference between logical and physical addresses?"
                    answer="Logical (virtual) address: Generated by the CPU during program execution  -  what the program uses. Each process has its own logical address space starting from 0. Example: when code accesses variable at address 0x1000, that's a logical address. Physical address: The actual location in physical RAM hardware. The same logical address in different processes maps to different physical addresses. The MMU (Memory Management Unit) translates logical  to  physical at runtime using page tables. With paging: logical address is split into page number + offset; page number indexes into the page table to get the frame number; physical address = frame number × page size + offset. The separation allows: memory protection (each process sees only its own space), virtual memory (logical space can exceed physical memory), position-independent code."
                />
                <OsInterviewQuestion
                    question="Explain the dining philosophers problem."
                    answer="Five philosophers sit around a round table with five forks (one between each pair). Each philosopher alternates between thinking and eating. To eat, a philosopher needs BOTH the left and right forks. Problem: if all five simultaneously pick up their left fork, each waits for the right fork (held by the neighbor)  to  deadlock. Solutions: 1) Allow at most 4 philosophers at the table (breaks possibility of circular wait). 2) Odd philosophers pick left first, even pick right first (breaks circular wait by ordering). 3) Use a monitor: philosopher checks if both forks are available before picking up either. 4) Use a semaphore: pick up both forks atomically. This illustrates: deadlock arising from circular wait on shared resources, and various strategies (resource ordering, limiting concurrency, atomic acquisition) for prevention."
                />
            </section>

            <section className="module-section">
                <h2>Memory Management</h2>
                <OsInterviewQuestion
                    question="What is the difference between internal and external fragmentation?"
                    answer="Internal fragmentation: Wasted space INSIDE an allocated block. Occurs with fixed-size allocation (paging, fixed partition). Example: process needs 3.5 KB, page size is 4 KB  to  0.5 KB wasted within the last page. External fragmentation: Wasted space BETWEEN allocated blocks. Occurs with variable-size allocation (contiguous, segmentation). Example: 100 MB free total, but scattered in 10 non-contiguous 10 MB chunks  -  can't allocate 50 MB despite having enough total space. Solutions: compaction (expensive, requires relocation), or switch to paging (eliminates external fragmentation by using fixed-size units). In practice, paging has minimal internal fragmentation (average half a page per process) but no external fragmentation  -  an excellent trade-off."
                />
                <OsInterviewQuestion
                    question="What is a page fault and how is it handled?"
                    answer="A page fault is a hardware exception (trap) raised by the MMU when a program accesses a page that is valid in its virtual address space but not currently in physical memory (the 'present' bit is 0 in the page table entry). Handling steps: 1) CPU generates trap, switches to kernel mode. 2) OS checks if the access is legal (within process's address space). If illegal  to  segmentation fault (kill process). 3) If legal, find a free frame. If none available, select a victim page using a replacement algorithm (LRU/Clock/etc.). If victim is dirty, write it to swap space. 4) Schedule disk I/O to read the requested page from swap/file into the free frame. 5) Update page table: set frame number, set present bit = 1. 6) Restart the instruction that caused the fault. Page faults are extremely expensive (~8 ms for disk I/O vs ~100 ns for memory access)  -  even a 0.1% rate causes ~80× slowdown."
                />
                <OsInterviewQuestion
                    question="What is thrashing? How can it be prevented?"
                    answer="Thrashing occurs when a system spends more time handling page faults (swapping pages in and out) than executing useful instructions. It happens when the total working sets of all processes exceed available physical memory. The vicious cycle: page fault rate rises  to  CPU utilization drops  to  OS scheduler admits MORE processes (thinking CPU is idle)  to  even less memory per process  to  more page faults  to  complete performance collapse. Prevention: 1) Working Set Model: track each process's working set (pages recently used). Ensure Σ(working sets) ≤ available frames. If exceeded, suspend/swap out processes. 2) Page Fault Frequency (PFF): monitor fault rate per process. If too high, give more frames. If too low, reclaim frames. If no frames available to give, suspend a process. 3) Sufficient physical RAM. 4) Set appropriate swap space and swappiness parameters."
                />
            </section>

            <section className="module-section">
                <h2>File Systems & I/O</h2>
                <OsInterviewQuestion
                    question="What is the difference between hard links and symbolic links?"
                    answer="Hard link: A directory entry pointing directly to the same inode. Both the original and hard link are equivalent  -  neither is 'primary'. All hard links share the same inode number, file data, and metadata. Deleting one link just decrements the link count; data is freed only when the count reaches 0. Restrictions: cannot cross filesystem boundaries (different filesystems have different inode tables), typically cannot link to directories (to prevent cycles). Symbolic link: A special file containing the pathname of another file. Has its own inode with type 'symlink'. If the target is deleted, the symlink becomes 'dangling' (broken). Can cross filesystems and point to directories. Has a small performance overhead (extra path resolution). Use 'ls -li' to see inode numbers and identify hard links."
                />
                <OsInterviewQuestion
                    question="Explain RAID 5 and when you would use it."
                    answer="RAID 5 distributes data and parity across 3+ disks. For each stripe of data blocks, one parity block is computed (XOR of the data blocks in the stripe) and stored on a different disk (distributed parity). If one disk fails, the missing data is reconstructed from the remaining data + parity. Use when: you want a balance of performance, capacity, and fault tolerance. Read performance is excellent (parallel reads). Write performance is reduced (write penalty: each write requires reading old data + parity, computing new parity, writing both). Minimum 3 disks, capacity = (N-1)/N. Vulnerable during rebuild (single-disk failure tolerance). For arrays where double-failure protection is needed (large arrays, slow rebuilds), use RAID 6 or RAID 10."
                />
            </section>

            <section className="module-section">
                <h2>Security & Protection</h2>
                <OsInterviewQuestion
                    question="What is a buffer overflow and how do modern OS defend against it?"
                    answer="A buffer overflow writes data beyond a buffer's boundary, corrupting adjacent memory. Stack-based overflow: overwrites function return address with address of injected shellcode, redirecting execution. Heap overflow: corrupts heap metadata to gain arbitrary write. Defenses: 1) Stack canaries: random value between buffer and return address; checked before return  -  if modified, process terminated. 2) ASLR: randomizes memory layout (stack, heap, libraries)  -  attacker can't predict addresses. 3) DEP/NX: marks stack/heap as non-executable  -  injected code can't run even if control flow is hijacked. 4) Position-Independent Executables (PIE): randomizes code section. 5) Control Flow Integrity (CFI): validates that indirect jumps/calls target legitimate code. 6) Safe coding: fgets over gets, strncpy over strcpy, stack-allocated arrays with bounds checking."
                />
                <OsInterviewQuestion
                    question="Explain the principle of least privilege with examples."
                    answer="Every process, user, or module should have only the minimum permissions required. Examples: 1) Web servers (nginx/Apache) start as root to bind port 80, then drop privileges to a low-privilege user (www-data). 2) Android apps request only needed permissions (camera, location)  -  not all. 3) Linux capabilities: instead of giving a program full root access, grant only specific capabilities (CAP_NET_BIND for low ports, CAP_SYS_CHROOT). 4) Database users get SELECT-only access if they only need to read. 5) Containers run as non-root users. 6) sudo allows temporary privilege escalation for specific commands. Benefits: limits blast radius of security breaches, reduces accidental damage, makes systems easier to audit."
                />
            </section>

            <section className="module-section">
                <h2>Virtualization & Cloud</h2>
                <OsInterviewQuestion
                    question="What is the difference between a VM and a container?"
                    answer="Virtual Machine: runs a complete guest OS (kernel + userland) on a hypervisor. Strong isolation (separate kernel, memory spaces). Heavy (GB of RAM, minutes to boot). Can run different OS types on the same host. Examples: VMware, VirtualBox, KVM. Container: shares host OS kernel; uses namespaces for isolation and cgroups for resource limits. Lightweight (MB of overhead, millisecond startup). Can only run the same kernel type as the host. Examples: Docker, Podman, LXC. When to use VMs: running different OS types, strong security isolation needed (multi-tenant cloud), legacy application compatibility. When to use containers: microservices, CI/CD, scaling identical app instances, development environments. Modern trend: containers running inside lightweight VMs (Kata Containers, Firecracker) for both performance and security."
                />
                <OsInterviewQuestion
                    question="Explain the difference between IaaS, PaaS, and SaaS."
                    answer="IaaS (Infrastructure as a Service): Provider manages hardware (servers, networking, storage). Customer manages: OS, middleware, runtime, applications, data. Examples: AWS EC2, Azure VMs. Most control, most responsibility. PaaS (Platform as a Service): Provider manages hardware + OS + middleware + runtime. Customer only manages: application code and data. Provider handles scaling, patching, load balancing. Examples: Heroku, AWS Elastic Beanstalk, Google App Engine. SaaS (Software as a Service): Provider manages everything. Customer just uses the application. Examples: Gmail, Salesforce, Office 365. Least control, least responsibility. Serverless/FaaS is between PaaS and SaaS: you deploy individual functions, provider handles everything including scaling to zero. Payment per invocation rather than per hour."
                />
            </section>

            <section className="module-section">
                <h2>Advanced Topics</h2>
                <OsInterviewQuestion
                    question="What are the differences between process-level and thread-level parallelism?"
                    answer="Process-level parallelism: Multiple independent processes run on different CPU cores. Each has its own address space. Communication via IPC (pipes, sockets, shared memory). Stronger isolation  -  one crash doesn't affect others. Higher overhead for creation and communication. Good for: independent services (web server + database), fault tolerance. Thread-level parallelism: Multiple threads within a single process share the same address space. Communication is trivially fast (shared variables). Less overhead for creation and synchronization. One crash can bring down the entire process. Requires careful synchronization (mutexes, etc). Good for: compute-intensive tasks that share data (parallel matrix operations, web request handling). Python note: the GIL limits thread parallelism to I/O-bound tasks  -  use multiprocessing for CPU parallelism."
                />
                <OsInterviewQuestion
                    question="What is the difference between deadlock and starvation?"
                    answer="Deadlock: A permanent condition where a set of processes are each waiting for a resource held by another process in the set. No process can proceed  -  ever. All four Coffman conditions must hold. Example: P1 holds R1, wants R2; P2 holds R2, wants R1. Starvation: A condition where a process is repeatedly denied resources it needs because other processes keep getting priority. The starving process could eventually get the resource  -  it's not permanently blocked but effectively waiting indefinitely. Example: in Priority Scheduling without aging, low-priority processes may never get CPU time because high-priority processes keep arriving. Deadlock implies mutual blocking and is a structural issue. Starvation is a scheduling/fairness issue. Aging (gradually increasing priority) prevents starvation."
                />
                <OsInterviewQuestion
                    question="How does the OS handle interrupts?"
                    answer="1) Device raises interrupt on the Interrupt Request (IRQ) line. 2) CPU finishes the current instruction. 3) CPU saves the current state (PC, flags, registers) to the kernel stack. 4) CPU checks the Interrupt Descriptor Table (IDT) to find the handler address for this interrupt number. 5) CPU switches to kernel mode and jumps to the Interrupt Service Routine (ISR). 6) ISR performs the minimal required work (acknowledge interrupt, read device data, queue a work item). 7) For complex processing, ISR schedules a 'bottom half' (softirq, tasklet, or workqueue in Linux) to defer work. 8) ISR restores saved state and returns (iret instruction). Key concepts: maskable vs non-maskable interrupts, interrupt priority levels, top-half (fast, interrupts disabled) vs bottom-half (slower, interrupts enabled) processing. The Programmable Interrupt Controller (PIC/APIC) routes hardware interrupts to the correct CPU core."
                />
            </section>

            <section className="module-section" style={{ marginTop: '2rem' }}>
                <h2>Tips for OS Interviews</h2>
                <div className="card">
                    <ul>
                        <li>💡 <strong>Draw diagrams</strong>  -  Process state diagrams, memory layout, scheduling Gantt charts</li>
                        <li>💡 <strong>Use real examples</strong>  -  Reference Linux, Windows, Android implementations</li>
                        <li>💡 <strong>Mention trade-offs</strong>  -  No solution is universally best; explain pros/cons</li>
                        <li>💡 <strong>Know the numbers</strong>  -  Memory access ~100 ns, disk seek ~10 ms, SSD ~100 μs, context switch ~1-10 μs</li>
                        <li>💡 <strong>Connect concepts</strong>  -  Show how virtual memory enables process isolation, how scheduling affects responsiveness</li>
                        <li>💡 <strong>Practice Banker's Algorithm</strong>  -  Work through examples by hand until it's second nature</li>
                        <li>💡 <strong>Understand system calls deeply</strong>  -  fork/exec/wait, open/read/write/close, mmap, socket</li>
                        <li>💡 <strong>Know Linux commands</strong>  -  ps, top, free, vmstat, iostat, lsof, strace, /proc filesystem</li>
                    </ul>
                </div>
            </section>
        <OsResources topicId="interview-prep" />
        </div>
    );
}
