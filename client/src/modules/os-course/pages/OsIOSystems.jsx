import OsCodeBlock from '../components/OsCodeBlock';
import OsResources from '../components/OsResources';
import OsQuiz from '../components/OsQuiz';
import OsInterviewQuestion from '../components/OsInterviewQuestion';

export default function OsIOSystems() {
    return (
        <div className="module-page animate-fade-in">
            <div className="module-header">
                <span className="module-badge">MODULE 06</span>
                <h1>I/O <span className="glow-text">Systems</span></h1>
                <p className="module-subtitle">Device management, drivers, buffering, disk scheduling, and storage technologies.</p>
            </div>

            {/* 6.1 */}
            <section className="module-section">
                <h2>6.1  -  I/O Hardware Fundamentals</h2>
                <p>
                    I/O devices communicate with the CPU through <strong>device controllers</strong> connected via
                    <strong> buses</strong>. Each controller has hardware registers for data, status, and control.
                </p>
                <h3>I/O Communication Methods</h3>
                <ul>
                    <li><strong>Programmed I/O (Polling)</strong>  -  CPU continuously checks device status register in a loop.
                        Simple but wastes CPU cycles. Suitable only for fast devices where data is immediately available.</li>
                    <li><strong>Interrupt-Driven I/O</strong>  -  Device sends an interrupt when ready. CPU executes other
                        tasks while waiting. Efficient for moderate-speed devices. Overhead from interrupt handling for every byte/word.</li>
                    <li><strong>Direct Memory Access (DMA)</strong>  -  A DMA controller transfers data directly between
                        device and memory without CPU involvement. CPU sets up the transfer (source, destination, count),
                        DMA controller does the work, then interrupts the CPU when done. Ideal for bulk data transfers
                        (disk reads, network packets). CPU is free during the transfer.</li>
                </ul>
                <h3>I/O Ports & Memory-Mapped I/O</h3>
                <ul>
                    <li><strong>Port-Mapped I/O</strong>  -  Separate I/O address space. Special CPU instructions (<code>in</code>, <code>out</code> on x86). Simpler but limited address space.</li>
                    <li><strong>Memory-Mapped I/O</strong>  -  Device registers mapped to regular memory addresses. Use normal load/store instructions. Most modern systems use this. GPU framebuffers are memory-mapped.</li>
                </ul>
            </section>

            {/* 6.2 */}
            <section className="module-section">
                <h2>6.2  -  I/O Software Architecture</h2>
                <p>I/O software is organized in layers, from hardware to user:</p>
                <h3>Layer 1: Interrupt Handlers</h3>
                <p>
                    Bottom half of device handling. Process hardware interrupts, save device status, wake up waiting
                    processes. Must be fast and minimal  -  defer complex processing to device drivers.
                </p>
                <h3>Layer 2: Device Drivers</h3>
                <p>
                    Device-specific code that translates generic I/O requests into hardware-specific commands.
                    Each device type has its own driver. Drivers know the details of the device controller:
                    registers, commands, timing. In Linux, drivers are loadable kernel modules. In Windows,
                    drivers follow the WDM (Windows Driver Model) or WDF framework.
                </p>
                <h3>Layer 3: Device-Independent OS Software</h3>
                <p>
                    Provides uniform interfaces regardless of device type. Responsibilities: naming (device files in
                    /dev/), protection (file permissions on device nodes), buffering, caching, error reporting, device
                    allocation, and storage capacity management.
                </p>
                <h3>Layer 4: User-Space I/O</h3>
                <p>
                    Library functions (<code>printf</code>, <code>scanf</code>, <code>fread</code>) that make system
                    calls internally. Spooling systems (print spooler) queue I/O requests in user space.
                </p>
            </section>

            {/* 6.3 */}
            <section className="module-section">
                <h2>6.3  -  Buffering, Caching & Spooling</h2>
                <h3>Buffering</h3>
                <p>
                    Temporary storage for data being transferred between two entities at different speeds or granularities.
                </p>
                <ul>
                    <li><strong>Single Buffer</strong>  -  OS assigns one buffer. While device fills buffer, process works on previous data.</li>
                    <li><strong>Double Buffer</strong>  -  Two buffers. Process uses one while device fills the other, then swap. Eliminates wait time.</li>
                    <li><strong>Circular Buffer</strong>  -  Multiple buffers in a ring. Used for streaming data (audio, video, network).</li>
                </ul>
                <h3>Caching</h3>
                <p>
                    Keeping copies of frequently accessed data in faster storage. The <strong>buffer cache</strong> keeps
                    recently read disk blocks in memory. The <strong>page cache</strong> (unified in Linux) caches file data
                    as pages. Cache hit = memory-speed access. Cache miss = disk access + caching for future use.
                </p>
                <h3>Spooling</h3>
                <p>
                    <strong>Simultaneous Peripheral Operations Online</strong>  -  A buffer that holds output for a device
                    that cannot accept interleaved data streams (like a printer). Each process's output is spooled to disk
                    files, then sent to the device one at a time. The print spooler is the classic example.
                </p>
            </section>

            {/* 6.4 */}
            <section className="module-section">
                <h2>6.4  -  Disk Structure & Performance</h2>
                <h3>HDD Structure</h3>
                <ul>
                    <li><strong>Platter</strong>  -  Circular disk coated with magnetic material</li>
                    <li><strong>Track</strong>  -  Concentric circle on a platter surface</li>
                    <li><strong>Sector</strong>  -  Arc of a track (typically 512 bytes or 4 KB)</li>
                    <li><strong>Cylinder</strong>  -  The set of tracks at the same position on all platters</li>
                    <li><strong>Read/Write Head</strong>  -  Reads/writes data by sensing/changing magnetic orientation</li>
                    <li><strong>Arm Assembly</strong>  -  Moves heads to the correct track</li>
                </ul>
                <h3>Disk Access Time Components</h3>
                <ul>
                    <li><strong>Seek Time</strong>  -  Time to move the head to the correct track (3 - 9 ms for modern drives, dominates access time)</li>
                    <li><strong>Rotational Latency</strong>  -  Time for the desired sector to rotate under the head (~4 ms at 7200 RPM)</li>
                    <li><strong>Transfer Time</strong>  -  Time to read/write the data (~0.01 ms for one sector)</li>
                </ul>
                <p>Total access time ≈ seek time + rotational latency + transfer time. Seek time dominates  to  minimizing head movement is key.</p>
                <h3>SSD vs HDD</h3>
                <p>
                    <strong>SSDs</strong> use flash memory  -  no moving parts. Random access ~0.1 ms (vs 10 ms for HDD).
                    Sequential reads are fast but random writes require erasing entire blocks. SSDs have limited write
                    endurance (wear leveling spreads writes across cells). No seek time means disk scheduling is less critical.
                    <strong>NVMe</strong> SSDs connect via PCIe for even faster access (~20 μs).
                </p>
            </section>

            {/* 6.5 */}
            <section className="module-section">
                <h2>6.5  -  Disk Scheduling Algorithms</h2>
                <p>For HDDs, minimizing total seek time is the primary goal:</p>
                <h3>FCFS (First-Come, First-Served)</h3>
                <p>Serves requests in arrival order. Fair but high total seek distance due to random head movement.</p>
                <h3>SSTF (Shortest Seek Time First)</h3>
                <p>Selects the request closest to the current head position. Better throughput than FCFS. Can cause starvation for distant requests.</p>
                <h3>SCAN (Elevator Algorithm)</h3>
                <p>Head moves in one direction, servicing all requests, then reverses direction. Like an elevator. No starvation. More uniform wait times than SSTF.</p>
                <h3>C-SCAN (Circular SCAN)</h3>
                <p>Head moves in one direction, servicing requests, then returns to the beginning without servicing. Treats the disk as circular. More uniform wait times than SCAN  -  all requests wait approximately the same time.</p>
                <h3>LOOK / C-LOOK</h3>
                <p>Variants of SCAN/C-SCAN that reverse direction at the last request (not the end of the disk). More practical  -  avoids unnecessary head movement to disk edges.</p>
            </section>

            {/* 6.6 */}
            <section className="module-section">
                <h2>6.6  -  RAID (Redundant Array of Independent Disks)</h2>
                <p>RAID uses multiple disks to improve performance, reliability, or both:</p>
                <ul>
                    <li><strong>RAID 0 (Striping)</strong>  -  Data split across disks. 2× speed, 0 redundancy. Any disk failure loses all data.</li>
                    <li><strong>RAID 1 (Mirroring)</strong>  -  Data duplicated on two disks. Full redundancy, 2× read speed, 1× write speed. 50% capacity overhead.</li>
                    <li><strong>RAID 5 (Striping + Distributed Parity)</strong>  -  Data and parity distributed across 3+ disks. Survives 1 disk failure. Good read performance, slower writes (parity calculation). Most popular RAID level.</li>
                    <li><strong>RAID 6 (Double Parity)</strong>  -  Like RAID 5 but with two parity blocks. Survives 2 simultaneous disk failures. Recommended for large arrays.</li>
                    <li><strong>RAID 10 (1+0)</strong>  -  Striping across mirrored pairs. Best performance + redundancy. Requires 4+ disks, 50% capacity overhead.</li>
                </ul>
                <OsCodeBlock
                    title="io_example"
                    codes={{
                        c: `#include <stdio.h>
#include <fcntl.h>
#include <unistd.h>
#include <sys/stat.h>

int main() {
    // Low-level I/O using system calls
    int fd = open("data.bin", O_WRONLY | O_CREAT | O_TRUNC, 0644);
    if (fd < 0) { perror("open"); return 1; }

    int data[] = {10, 20, 30, 40, 50};
    ssize_t written = write(fd, data, sizeof(data));
    printf("Written %zd bytes\\n", written);
    fsync(fd);  // Force flush to disk
    close(fd);

    // Read back
    fd = open("data.bin", O_RDONLY);
    int buf[5];
    ssize_t nread = read(fd, buf, sizeof(buf));
    printf("Read %zd bytes\\n", nread);

    for (int i = 0; i < 5; i++)
        printf("data[%d] = %d\\n", i, buf[i]);

    // File info
    struct stat st;
    fstat(fd, &st);
    printf("Block size: %ld\\n", st.st_blksize);
    printf("Blocks    : %ld\\n", st.st_blocks);

    close(fd);
    unlink("data.bin");
    return 0;
}`,
                        python: `import io
import os
import time

# Buffered I/O (Python default)
with open("data.bin", "wb") as f:
    for i in range(5):
        f.write(i.to_bytes(4, 'little'))
    f.flush()  # Flush user-space buffer
    os.fsync(f.fileno())  # Force to disk

# Read with buffered reader
with open("data.bin", "rb") as f:
    while chunk := f.read(4):
        val = int.from_bytes(chunk, 'little')
        print(f"  Value: {val}")

# I/O performance timing
data = b'x' * (1024 * 1024)  # 1 MB

# Buffered write
start = time.perf_counter()
with open("perf_test.bin", "wb", buffering=8192) as f:
    for _ in range(100):
        f.write(data)
elapsed = time.perf_counter() - start
print(f"Buffered write: {100/(elapsed):.0f} MB/s")

# Get I/O stats
stat = os.stat("data.bin")
print(f"Block size: {stat.st_blksize}")

os.unlink("data.bin")
os.unlink("perf_test.bin")`,
                        java: `import java.io.*;
import java.nio.*;
import java.nio.channels.*;
import java.nio.file.*;

public class IODemo {
    public static void main(String[] args) throws Exception {
        // NIO for efficient I/O
        Path path = Path.of("data.bin");

        // Write using FileChannel
        try (FileChannel ch = FileChannel.open(path,
                StandardOpenOption.CREATE,
                StandardOpenOption.WRITE,
                StandardOpenOption.TRUNCATE_EXISTING)) {

            ByteBuffer buf = ByteBuffer.allocate(20);
            for (int i = 0; i < 5; i++) buf.putInt(i * 10);
            buf.flip();
            ch.write(buf);
            ch.force(true);  // Force to disk (like fsync)
        }

        // Read using FileChannel
        try (FileChannel ch = FileChannel.open(path)) {
            ByteBuffer buf = ByteBuffer.allocate(20);
            ch.read(buf);
            buf.flip();
            while (buf.hasRemaining())
                System.out.println("Value: " + buf.getInt());
        }

        // Performance test with Direct ByteBuffer
        ByteBuffer direct = ByteBuffer.allocateDirect(1024 * 1024);
        long start = System.nanoTime();
        try (FileChannel ch = FileChannel.open(Path.of("perf.bin"),
                StandardOpenOption.CREATE, StandardOpenOption.WRITE)) {
            for (int i = 0; i < 100; i++) {
                direct.clear();
                ch.write(direct);
            }
        }
        long elapsed = System.nanoTime() - start;
        System.out.printf("Direct buffer write: %.0f MB/s%n",
            100.0 / (elapsed / 1e9));

        Files.deleteIfExists(path);
        Files.deleteIfExists(Path.of("perf.bin"));
    }
}`,
                    }}
                />
            </section>

            {/* 6.7 */}
            <section className="module-section">
                <h2>6.7  -  I/O Models</h2>
                <ul>
                    <li><strong>Blocking I/O</strong>  -  process suspended until I/O completes. Simple but process can't do other work.</li>
                    <li><strong>Non-blocking I/O</strong>  -  returns immediately with whatever data is available (or error). Process must poll repeatedly.</li>
                    <li><strong>I/O Multiplexing</strong>  -  Monitor multiple I/O sources simultaneously with <code>select()</code>, <code>poll()</code>, <code>epoll()</code>. One thread handles many connections.</li>
                    <li><strong>Signal-Driven I/O</strong>  -  SIGIO signal when data ready. Process handles data in signal handler. Less commonly used.</li>
                    <li><strong>Asynchronous I/O (AIO)</strong>  -  request I/O and continue working. Kernel notifies when complete. True overlap of I/O and computation. Linux: <code>io_uring</code> (modern), <code>libaio</code> (legacy). Windows: IOCP (I/O Completion Ports).</li>
                </ul>
                <p>
                    <strong>epoll</strong> (Linux) and <strong>kqueue</strong> (BSD/macOS) are the high-performance
                    I/O multiplexing mechanisms  -  they scale to millions of connections. Used by: Nginx, Node.js,
                    Redis, all high-performance servers.
                </p>
            </section>

            <OsQuiz
                title="Module 6  -  Comprehensive Check"
                questions={[
                    {
                        question: 'What does DMA stand for?',
                        options: ['Dynamic Memory Allocation', 'Direct Memory Access', 'Data Management API', 'Device Monitor Agent'],
                        answer: 1,
                    },
                    {
                        question: 'Which disk scheduling algorithm works like an elevator?',
                        options: ['FCFS', 'SSTF', 'SCAN', 'Round Robin'],
                        answer: 2,
                    },
                    {
                        question: 'Which RAID level provide striping with no redundancy?',
                        options: ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 10'],
                        answer: 0,
                        explanation: 'RAID 0 splits data across disks for speed but any disk failure loses all data.',
                    },
                    {
                        question: 'What I/O multiplexing system call scales to millions of connections on Linux?',
                        options: ['select()', 'poll()', 'epoll()', 'read()'],
                        answer: 2,
                    },
                ]}
            />

            <OsResources topicId="io-systems" />

            <section className="module-section">
                <h2>Interview Corner</h2>
                <OsInterviewQuestion
                    question="What is the difference between blocking and non-blocking I/O?"
                    answer="Blocking I/O: the calling process is suspended until the I/O operation completes  -  the process literally sleeps until data is available. Simple programming model but poor for servers handling many clients. Non-blocking I/O: returns immediately with available data or an error (EAGAIN/EWOULDBLOCK). Process must handle partial reads/writes and retry. Asynchronous I/O goes further: the kernel handles the entire operation and notifies the process on completion. High-performance servers use epoll/kqueue (multiplexing) or io_uring (async) to handle thousands of concurrent connections with few threads."
                />
                <OsInterviewQuestion
                    question="Explain the three I/O communication methods: programmed I/O, interrupt-driven, and DMA."
                    answer="Programmed I/O (Polling): CPU continuously checks device status in a tight loop. Wastes CPU cycles but has lowest latency for very fast devices. Interrupt-Driven: device sends interrupt when ready; CPU handles other work meanwhile. Good balance but each byte/word transfer causes an interrupt. DMA: CPU programs the DMA controller with source, destination, and count. DMA controller transfers data directly to/from memory without CPU involvement. CPU gets one interrupt when the entire transfer is done. Best for bulk transfers (disk, network, GPU). Modern systems use DMA for virtually all block device I/O."
                />
                <OsInterviewQuestion
                    question="What is RAID 5 and why is it popular?"
                    answer="RAID 5 stripes data and parity across 3+ disks. The parity block for each stripe is distributed across different disks (avoiding a single parity disk bottleneck). If one disk fails, data is reconstructed from the remaining data + parity blocks. Popular because it offers good read performance (parallel reads across disks), reasonable write performance, fault tolerance (survives 1 disk failure), and only 1/N capacity overhead for parity (e.g., 33% for 3 disks, 20% for 5 disks). Downside: degraded performance during rebuild, vulnerable during rebuild (RAID 6 fixes this with double parity)."
                />
            </section>
        </div>
    );
}
