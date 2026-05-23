import OsQuiz from '../components/OsQuiz';
import OsResources from '../components/OsResources';
import OsInterviewQuestion from '../components/OsInterviewQuestion';

export default function OsRealWorldApps() {
    return (
        <div className="module-page animate-fade-in">
            <div className="module-header">
                <span className="module-badge">MODULE 08</span>
                <h1>Real-World <span className="glow-text">Applications</span></h1>
                <p className="module-subtitle">How OS concepts manifest in Linux, Windows, Android, virtualization, containers, and cloud computing.</p>
            </div>

            {/* 8.1 */}
            <section className="module-section">
                <h2>8.1  -  Linux Kernel Architecture</h2>
                <p>
                    Linux is a <strong>monolithic kernel with loadable modules</strong>. All core services (scheduling,
                    memory management, filesystems, networking, device drivers) run in kernel space for maximum performance.
                </p>
                <h3>Key Subsystems</h3>
                <ul>
                    <li><strong>Process Scheduler</strong>  -  CFS (Completely Fair Scheduler) for normal tasks, RT scheduler for real-time. Uses red-black trees and virtual runtime. Since kernel 6.6, EEVDF scheduler replaces CFS.</li>
                    <li><strong>Memory Management</strong>  -  Demand paging, buddy allocator for physical frames, slab allocator for kernel objects, OOM killer for out-of-memory situations.</li>
                    <li><strong>Virtual File System (VFS)</strong>  -  Unified interface for ext4, XFS, Btrfs, NFS, procfs, sysfs.</li>
                    <li><strong>Network Stack</strong>  -  Full TCP/IP implementation, Netfilter/iptables for firewall, socket abstraction.</li>
                    <li><strong>Device Drivers</strong>  -  Loadable kernel modules (LKMs). <code>insmod</code>/<code>rmmod</code>/<code>modprobe</code>. Comprise ~70% of kernel source code.</li>
                </ul>
                <h3>Linux Process Model</h3>
                <p>
                    Everything is a process or a kernel thread. <code>fork()</code>, <code>exec()</code>,
                    <code>wait()</code> model. Threads created via <code>clone()</code>  -  share address space,
                    file descriptors, etc. KThreads (kernel threads) handle background work: kswapd (swapper),
                    ksoftirqd (deferred interrupts), kworker (work queues).
                </p>
                <h3>Cgroups & Namespaces</h3>
                <p>
                    <strong>Control Groups (cgroups)</strong>  -  Limit, account, and isolate resource usage (CPU, memory,
                    I/O, network) per process group. <strong>Namespaces</strong>  -  Isolate system resources so processes
                    have independent views of them: PID namespace, network namespace, mount namespace, user namespace.
                    Together, these are the <strong>foundation of containers (Docker)</strong>.
                </p>
            </section>

            {/* 8.2 */}
            <section className="module-section">
                <h2>8.2  -  Windows NT Architecture</h2>
                <p>Windows NT uses a <strong>hybrid kernel</strong> architecture with these layers:</p>
                <ul>
                    <li><strong>HAL (Hardware Abstraction Layer)</strong>  -  Isolates the kernel from hardware differences. Makes Windows portable across architectures (x86, ARM).</li>
                    <li><strong>Kernel</strong>  -  Thread scheduling, interrupt handling, synchronization primitives. Not the same as "kernel mode" (which includes exec).</li>
                    <li><strong>Executive</strong>  -  Core OS services: Object Manager (handles), Memory Manager, I/O Manager, Process Manager, Security Reference Monitor. All run in kernel mode.</li>
                    <li><strong>Subsystems</strong>  -  Provide API compatibility: Win32 (main API), POSIX (WSL), Native NT API.</li>
                </ul>
                <h3>Windows Process Model</h3>
                <p>
                    <code>CreateProcess()</code> creates a new process with its own address space (no fork equivalent).
                    Jobs = groups of processes with shared resource limits (similar to cgroups). <strong>Windows
                        Subsystem for Linux (WSL)</strong>: WSL1 translated Linux syscalls to NT syscalls; WSL2 uses a
                    real Linux kernel in a lightweight Hyper-V VM for full compatibility.
                </p>
                <h3>NTFS File System</h3>
                <p>
                    <strong>Master File Table (MFT)</strong>  -  Central metadata structure; one entry per file.
                    Supports: journaling (transaction log), ACLs, file compression, encryption (EFS), alternate
                    data streams, hard/symbolic links, and sparse files.
                </p>
            </section>

            {/* 8.3 */}
            <section className="module-section">
                <h2>8.3  -  Android OS Architecture</h2>
                <p>Built on the <strong>Linux kernel</strong> with additional layers:</p>
                <ul>
                    <li><strong>Linux Kernel</strong>  -  Modified with Android-specific drivers: Binder IPC, low-memory killer, wakelocks.</li>
                    <li><strong>HAL</strong>  -  Hardware Abstraction Layer for camera, audio, sensors.</li>
                    <li><strong>ART (Android Runtime)</strong>  -  Ahead-of-Time (AOT) compilation replaces the older Dalvik JIT VM. Apps compiled to native code at install time.</li>
                    <li><strong>Framework</strong>  -  Java/Kotlin APIs: Activity Manager, Window Manager, Content Providers, Notification Manager.</li>
                    <li><strong>Applications</strong>  -  Each app runs in its own Linux process with its own UID (sandbox model).</li>
                </ul>
                <h3>Android Security Model</h3>
                <p>
                    Apps are sandboxed by Linux user IDs  -  each app is a different user. Permissions must be
                    declared in the manifest and approved by the user. SELinux enforces MAC policies. File-based
                    encryption protects data at rest. Verified Boot ensures integrity of the boot chain.
                </p>
            </section>

            {/* 8.4 */}
            <section className="module-section">
                <h2>8.4  -  Virtualization</h2>
                <p>
                    Virtualization creates virtual instances of hardware, allowing multiple OS to run on the same physical machine.
                </p>
                <h3>Types of Hypervisors</h3>
                <ul>
                    <li><strong>Type 1 (Bare-metal)</strong>  -  Runs directly on hardware. Higher performance. Examples: VMware ESXi, Microsoft Hyper-V, Xen, KVM (Linux).</li>
                    <li><strong>Type 2 (Hosted)</strong>  -  Runs on a host OS. Easier setup, lower performance. Examples: VirtualBox, VMware Workstation, Parallels.</li>
                </ul>
                <h3>Hardware Virtualization Support</h3>
                <p>
                    Modern CPUs provide hardware extensions for efficient virtualization: <strong>Intel VT-x</strong>,
                    <strong>AMD-V</strong>. These add a new privilege level (VMX root/non-root) so guest OS runs
                    natively without binary translation. <strong>Intel EPT / AMD NPT</strong> provide nested page
                    tables for efficient memory virtualization. <strong>SR-IOV</strong> virtualizes I/O devices (network).
                </p>
                <h3>Key Virtualization Concepts</h3>
                <ul>
                    <li><strong>VM Live Migration</strong>  -  Move a running VM between physical hosts with near-zero downtime</li>
                    <li><strong>Snapshots</strong>  -  Capture VM state at a point in time for backup/rollback</li>
                    <li><strong>Thin Provisioning</strong>  -  Allocate disk space on demand, not upfront</li>
                    <li><strong>Paravirtualization</strong>  -  Guest OS is modified to make hypercalls instead of privileged instructions (Xen). Better performance than full virtualization.</li>
                </ul>
            </section>

            {/* 8.5 */}
            <section className="module-section">
                <h2>8.5  -  Containers & Docker</h2>
                <p>
                    Containers provide <strong>OS-level virtualization</strong>  -  they share the host kernel but have
                    isolated user spaces. Much lighter than VMs (no separate kernel per container).
                </p>
                <h3>Linux Container Technologies</h3>
                <ul>
                    <li><strong>Namespaces</strong>  -  Isolate: PID, network, mount points, users, IPC, hostname</li>
                    <li><strong>Cgroups</strong>  -  Limit: CPU, memory, disk I/O, network bandwidth</li>
                    <li><strong>Union Filesystems</strong>  -  Layered filesystem (OverlayFS). Base image + writable layer = efficient storage</li>
                </ul>
                <h3>Docker Architecture</h3>
                <p>
                    <strong>Docker Daemon</strong>  -  Manages containers, images, networks, and volumes.
                    <strong> Docker Image</strong>  -  Read-only template with layered filesystem. Each Dockerfile
                    instruction creates a layer. <strong>Docker Container</strong>  -  Runnable instance of an image
                    with a writable layer on top. <strong>Container Registry</strong>  -  Store and distribute images
                    (Docker Hub). Containers start in milliseconds (vs minutes for VMs) and use MB of overhead (vs GB).
                </p>
                <h3>Container Orchestration</h3>
                <p>
                    <strong>Kubernetes</strong> manages large-scale container deployments: automatic scaling,
                    service discovery, load balancing, rolling updates, self-healing (restart failed containers).
                    Pods = groups of containers sharing network. Services = stable network endpoints.
                </p>
            </section>

            {/* 8.6 */}
            <section className="module-section">
                <h2>8.6  -  Cloud Computing & OS</h2>
                <ul>
                    <li><strong>IaaS (Infrastructure as a Service)</strong>  -  Virtual machines, storage, networking.
                        The cloud provider manages the hardware; you manage the OS and up. Examples: AWS EC2, Azure VM, GCP Compute.</li>
                    <li><strong>PaaS (Platform as a Service)</strong>  -  Managed runtime. You deploy code; provider manages OS, scaling, patching. Examples: Heroku, AWS Elastic Beanstalk, Google App Engine.</li>
                    <li><strong>SaaS (Software as a Service)</strong>  -  Fully managed applications. Examples: Gmail, Salesforce.</li>
                    <li><strong>Serverless / FaaS</strong>  -  Upload functions, cloud runs them on demand. No server management.
                        Each invocation runs in an isolated container/microVM. Examples: AWS Lambda, Azure Functions, GCP Cloud Functions.</li>
                </ul>
                <h3>OS Role in Cloud</h3>
                <p>
                    Cloud hypervisors use OS concepts extensively: process isolation (VMs/containers), virtual memory
                    (memory overcommitment), scheduling (fair resource allocation among tenants), I/O virtualization
                    (virtual NICs and disks), and security (isolation between tenants, encrypted storage).
                </p>
            </section>

            <OsQuiz
                title="Module 8  -  Comprehensive Check"
                questions={[
                    {
                        question: 'What type of kernel does Linux use?',
                        options: ['Microkernel', 'Hybrid', 'Monolithic with loadable modules', 'Exokernel'],
                        answer: 2,
                    },
                    {
                        question: 'Which Linux features are the foundation of Docker containers?',
                        options: ['fork and exec', 'Namespaces and cgroups', 'Signals and pipes', 'RAID and LVM'],
                        answer: 1,
                        explanation: 'Namespaces provide isolation; cgroups limit resource usage  -  together they enable lightweight containers.',
                    },
                    {
                        question: 'What is a Type 1 hypervisor?',
                        options: ['Runs on a host OS', 'Runs directly on bare-metal hardware', 'A container runtime', 'A driver'],
                        answer: 1,
                    },
                    {
                        question: 'What Android component replaced Dalvik?',
                        options: ['JVM', 'ART', 'V8', 'WebKit'],
                        answer: 1,
                        explanation: 'ART (Android Runtime) uses AOT compilation for better performance than Dalvik\'s JIT.',
                    },
                ]}
            />

            <OsResources topicId="real-world" />

            <section className="module-section">
                <h2>Interview Corner</h2>
                <OsInterviewQuestion
                    question="What is the difference between a VM and a container?"
                    answer="A VM includes a full guest OS kernel + userland, running on a hypervisor. Each VM has its own kernel, memory management, device drivers  -  completely isolated. Higher overhead (~GB RAM, minutes to start). A container shares the host OS kernel, using namespaces for isolation and cgroups for resource limits. Much lighter (~MB overhead, millisecond startup). VMs provide stronger isolation (hardware-level separation between different kernels); containers provide better density and performance. VMs are better for running different OS types; containers are better for deploying many instances of the same application."
                />
                <OsInterviewQuestion
                    question="Explain Linux cgroups and namespaces."
                    answer="Cgroups (Control Groups) limit and track resource usage per process group: CPU time (shares, quotas), memory (limits, OOM behavior), disk I/O (bandwidth, IOPS), and network bandwidth. The kernel enforces these limits. Namespaces isolate what processes can see: PID namespace (separate process IDs), network namespace (separate network stack, IPs, ports), mount namespace (separate filesystem tree), user namespace (separate user IDs), IPC namespace (separate shared memory, semaphores). Together, they make a process group think it's running on its own dedicated system  -  the basis of containers."
                />
                <OsInterviewQuestion
                    question="Explain the Windows NT kernel architecture."
                    answer="Windows NT uses a hybrid architecture: 1) HAL isolates the kernel from hardware specifics for portability. 2) The microkernel handles thread scheduling, interrupt dispatching, and synchronization. 3) The Executive provides higher-level services (Object Manager, Memory Manager, I/O Manager, Process Manager, Security Reference Monitor) in kernel mode. 4) Device drivers implement hardware-specific I/O. 5) Environment subsystems (Win32, WSL) provide API layers in user mode. The Registry acts as a centralized hierarchical configuration database. NTFS provides journaling, ACLs, and encryption."
                />
            </section>
        </div>
    );
}
