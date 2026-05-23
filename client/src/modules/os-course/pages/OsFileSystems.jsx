import OsCodeBlock from '../components/OsCodeBlock';
import OsResources from '../components/OsResources';
import OsQuiz from '../components/OsQuiz';
import OsInterviewQuestion from '../components/OsInterviewQuestion';

export default function OsFileSystems() {
    return (
        <div className="module-page animate-fade-in">
            <div className="module-header">
                <span className="module-badge">MODULE 05</span>
                <h1>File <span className="glow-text">Systems</span></h1>
                <p className="module-subtitle">File concepts, directory structures, allocation methods, implementation, and storage management.</p>
            </div>

            {/* 5.1 */}
            <section className="module-section">
                <h2>5.1  -  File Concept & Attributes</h2>
                <p>
                    A file is a named collection of related information stored on secondary storage. The OS provides
                    a uniform logical view of storage, abstracting the physical device properties.
                </p>
                <h3>File Attributes</h3>
                <ul>
                    <li><strong>Name</strong>  -  Human-readable identifier (e.g., "report.pdf")</li>
                    <li><strong>Identifier</strong>  -  OS-internal unique number (inode number in Unix)</li>
                    <li><strong>Type</strong>  -  Regular file, directory, symbolic link, device file, pipe, socket</li>
                    <li><strong>Location</strong>  -  Pointer to device and block location on storage</li>
                    <li><strong>Size</strong>  -  Current size in bytes/words/blocks</li>
                    <li><strong>Protection</strong>  -  Access control information (read, write, execute permissions)</li>
                    <li><strong>Timestamps</strong>  -  Creation time, last modification, last access</li>
                    <li><strong>Owner</strong>  -  User ID and Group ID of the file's owner</li>
                </ul>
                <h3>File Operations</h3>
                <p>
                    The OS provides system calls for file manipulation: <code>create</code>, <code>open</code>,
                    <code>read</code>, <code>write</code>, <code>seek</code> (reposition cursor), <code>delete</code>,
                    <code>truncate</code>, <code>close</code>. Most systems maintain an <strong>open file table</strong>
                    to avoid repeated directory searches. Each process has a per-process file table pointing to the
                    system-wide open file table.
                </p>
                <h3>File Types & Extensions</h3>
                <p>
                    Some OS recognize file types by extension (.txt, .exe, .jpg) or by examining the file header
                    (magic numbers). Unix treats everything as a byte stream  -  the application interprets the content.
                    Special file types include: device files (/dev/), named pipes (FIFOs), Unix domain sockets.
                </p>
            </section>

            {/* 5.2 */}
            <section className="module-section">
                <h2>5.2  -  File Access Methods</h2>
                <h3>Sequential Access</h3>
                <p>
                    Data is read/written in order from beginning to end. A file pointer tracks the current position.
                    Most common access method. Example: reading a log file line by line.
                </p>
                <h3>Direct (Random) Access</h3>
                <p>
                    Any block can be read/written independently using a block number. No need to read preceding blocks.
                    Essential for databases, swap spaces. Uses <code>lseek()</code> to position the file pointer.
                </p>
                <h3>Indexed Access</h3>
                <p>
                    An index points to blocks containing specific records. The index itself is searched (binary search
                    or hash) to find the desired data. Used in database systems (B-trees) for efficient lookups.
                </p>
            </section>

            {/* 5.3 */}
            <section className="module-section">
                <h2>5.3  -  Directory Structure</h2>
                <p>
                    A directory is a node in a tree that contains names and metadata of files and other directories.
                </p>
                <h3>Single-Level Directory</h3>
                <p>All files in one directory. Simple but naming conflicts between users. No organization.</p>
                <h3>Two-Level Directory</h3>
                <p>Separate directory per user. Each user has their own namespace. Can't group files by project.</p>
                <h3>Tree-Structured Directory</h3>
                <p>
                    Hierarchical tree of directories. Most common in modern OS (Unix, Windows). Supports paths:
                    absolute (/home/user/file.txt) and relative (../file.txt). Allows logical organization by projects,
                    file types, etc.
                </p>
                <h3>Acyclic-Graph Directory</h3>
                <p>
                    Extensions of tree that allows shared files/directories via <strong>links</strong>. Two types:
                    <strong>hard links</strong> (multiple directory entries pointing to the same inode) and
                    <strong>symbolic links</strong> (a file containing the path to another file). Must handle
                    dangling links and ensure no cycles are created.
                </p>
                <h3>General Graph Directory</h3>
                <p>
                    Allows arbitrary links including cycles. Requires cycle detection (e.g., during traversal or
                    garbage collection of unreferenced files). Not commonly used due to complexity.
                </p>
            </section>

            {/* 5.4 */}
            <section className="module-section">
                <h2>5.4  -  File Allocation Methods</h2>
                <h3>Contiguous Allocation</h3>
                <p>
                    Each file occupies consecutive blocks on disk. <strong>Pros:</strong> Excellent sequential and random
                    access performance (just one seek). <strong>Cons:</strong> External fragmentation, file growth is
                    difficult (may need to move the entire file). Used by: CD-ROMs, some embedded systems.
                </p>
                <h3>Linked Allocation</h3>
                <p>
                    Each file is a linked list of disk blocks. Each block contains a pointer to the next.
                    <strong> Pros:</strong> No external fragmentation, files can grow dynamically. <strong>Cons:</strong>
                    No efficient random access (must traverse links), space overhead for pointers, pointer corruption
                    loses the rest of the file. <strong>FAT (File Allocation Table)</strong> improves this by keeping
                    all pointers in a separate table in memory.
                </p>
                <h3>Indexed Allocation</h3>
                <p>
                    Each file has an <strong>index block</strong> containing pointers to all its data blocks. Supports
                    both sequential and direct access. No external fragmentation. <strong>Cons:</strong> Overhead of
                    index block. For large files, multi-level index (like Unix inode) or combined scheme is used.
                </p>
                <h3>Unix Inode Structure</h3>
                <p>
                    The Unix inode uses a combined addressing scheme for scalability:
                </p>
                <ul>
                    <li><strong>12 direct pointers</strong>  to  12 blocks (48 KB with 4 KB blocks)</li>
                    <li><strong>1 single indirect</strong>  to  pointer to block of pointers (1024 more blocks = 4 MB)</li>
                    <li><strong>1 double indirect</strong>  to  pointer to block of indirect blocks (1024² = ~4 GB)</li>
                    <li><strong>1 triple indirect</strong>  to  pointer to block of double indirect blocks (1024³ = ~4 TB)</li>
                </ul>
                <p>Small files (most files) use only direct pointers  -  no overhead for the common case.</p>
            </section>

            {/* 5.5 */}
            <section className="module-section">
                <h2>5.5  -  Free Space Management</h2>
                <ul>
                    <li><strong>Bit Vector (Bitmap)</strong>  -  One bit per block: 0 = free, 1 = allocated. Fast to find contiguous free blocks. For a 1 TB disk with 4 KB blocks, bitmap = 32 MB.</li>
                    <li><strong>Linked List</strong>  -  Free blocks linked together. No wasted space but slow traversal for large free spaces.</li>
                    <li><strong>Grouping</strong>  -  First free block stores addresses of n free blocks, last of which stores n more addresses. Faster than linked list for finding multiple blocks.</li>
                    <li><strong>Counting</strong>  -  Keep a list of (starting block, count) pairs for contiguous free regions. Compact for large contiguous free areas.</li>
                </ul>
            </section>

            {/* 5.6 */}
            <section className="module-section">
                <h2>5.6  -  File System Implementation</h2>
                <h3>On-Disk Structures</h3>
                <ul>
                    <li><strong>Boot Block</strong>  -  First block(s); contains bootstrap code</li>
                    <li><strong>Superblock</strong>  -  FS metadata: block size, total blocks, free blocks, inode count, FS type</li>
                    <li><strong>Inode Table</strong>  -  Array of inodes; each inode describes one file</li>
                    <li><strong>Data Blocks</strong>  -  Actual file content</li>
                </ul>
                <h3>In-Memory Structures</h3>
                <ul>
                    <li><strong>Mount Table</strong>  -  Information about each mounted filesystem</li>
                    <li><strong>Directory Cache</strong>  -  Recently accessed directory information</li>
                    <li><strong>System-Wide Open File Table</strong>  -  Copy of each open file's FCB/inode</li>
                    <li><strong>Per-Process Open File Table</strong>  -  Pointers to entries in the system table</li>
                    <li><strong>Buffer Cache</strong>  -  Recently read disk blocks cached in memory</li>
                </ul>
                <h3>Common File Systems</h3>
                <ul>
                    <li><strong>ext4</strong>  -  Default Linux FS. Journaling, extents, 16 TB file / 1 EB volume limits.</li>
                    <li><strong>NTFS</strong>  -  Windows default. Journaling, ACLs, encryption (EFS), compression, 256 TB volume.</li>
                    <li><strong>FAT32</strong>  -  Simple, universal. No journaling, 4 GB max file size. Used for USB drives.</li>
                    <li><strong>XFS</strong>  -  High-performance for large files. Used in enterprise/scientific computing.</li>
                    <li><strong>ZFS</strong>  -  Combined volume manager + FS. 128-bit addressing, snapshots, RAID-Z, data integrity checksums.</li>
                    <li><strong>Btrfs</strong>  -  Linux next-gen. Copy-on-write, snapshots, compression, RAID support.</li>
                </ul>

                <h3>Journaling</h3>
                <p>
                    A journal (transaction log) records intended changes before they're made to the main filesystem.
                    If the system crashes mid-write, the journal is replayed on recovery, ensuring consistency.
                    Types: <strong>metadata-only journaling</strong> (ext4 default, faster) vs <strong>full data journaling</strong>
                    (slower but safer). Without journaling, crash recovery requires a full filesystem check (fsck), which
                    is extremely slow on large disks.
                </p>
            </section>

            {/* 5.7 */}
            <section className="module-section">
                <h2>5.7  -  Virtual File System (VFS)</h2>
                <p>
                    The VFS provides a uniform interface to different filesystem types. Applications use the same
                    system calls (open, read, write) regardless of whether the underlying FS is ext4, NTFS, NFS, or
                    procfs. The VFS dispatches calls to the correct filesystem-specific implementation.
                </p>
                <ul>
                    <li><strong>Superblock Object</strong>  -  Represents a specific mounted filesystem</li>
                    <li><strong>Inode Object</strong>  -  Represents a specific file on disk</li>
                    <li><strong>File Object</strong>  -  Represents an open file (associated with a process)</li>
                    <li><strong>Dentry Object</strong>  -  Represents a directory entry (cached for fast path lookups)</li>
                </ul>
                <p>
                    Linux's VFS also enables special filesystems: <code>/proc</code> (process info), <code>/sys</code>
                    (hardware info), <code>/dev</code> (device files), <code>tmpfs</code> (in-memory filesystem).
                </p>
                <OsCodeBlock
                    title="file_operations"
                    codes={{
                        c: `#include <stdio.h>
#include <sys/stat.h>
#include <dirent.h>
#include <unistd.h>
#include <string.h>

int main() {
    // Create and write
    FILE *fp = fopen("test.txt", "w");
    fprintf(fp, "Hello from OS course!\\n");
    fprintf(fp, "Line 2: File systems are fascinating.\\n");
    fclose(fp);

    // File info via stat()
    struct stat st;
    stat("test.txt", &st);
    printf("Size   : %ld bytes\\n", st.st_size);
    printf("Inode  : %ld\\n", st.st_ino);
    printf("Links  : %ld\\n", st.st_nlink);
    printf("Blocks : %ld\\n", st.st_blocks);
    printf("Perms  : %o\\n", st.st_mode & 0777);

    // Create a hard link
    link("test.txt", "test_hardlink.txt");
    stat("test.txt", &st);
    printf("Links after hardlink: %ld\\n", st.st_nlink);

    // Create a symbolic link
    symlink("test.txt", "test_symlink.txt");

    // Read symlink target
    char target[256];
    readlink("test_symlink.txt", target, sizeof(target));
    printf("Symlink target: %s\\n", target);

    // List directory
    DIR *dir = opendir(".");
    struct dirent *entry;
    printf("\\nDirectory contents:\\n");
    while ((entry = readdir(dir)) != NULL) {
        printf("  [%s] %s\\n",
            entry to d_type == DT_DIR ? "DIR" : "FILE",
            entry to d_name);
    }
    closedir(dir);

    // Cleanup
    unlink("test_hardlink.txt");
    unlink("test_symlink.txt");
    unlink("test.txt");

    return 0;
}`,
                        python: `import os
import stat
import shutil

# Create and write
with open("test.txt", "w") as f:
    f.write("Hello from OS course!\\n")
    f.write("File systems are fascinating.\\n")

# File info
info = os.stat("test.txt")
print(f"Size   : {info.st_size} bytes")
print(f"Inode  : {info.st_ino}")
print(f"Links  : {info.st_nlink}")
print(f"Mode   : {oct(stat.S_IMODE(info.st_mode))}")
print(f"UID/GID: {info.st_uid}/{info.st_gid}")

# Hard link (same inode)
os.link("test.txt", "test_hardlink.txt")
print(f"Links after hardlink: {os.stat('test.txt').st_nlink}")

# Symbolic link
os.symlink("test.txt", "test_symlink.txt")
print(f"Symlink target: {os.readlink('test_symlink.txt')}")
print(f"Is symlink: {os.path.islink('test_symlink.txt')}")

# List directory with details
print("\\nDirectory contents:")
for entry in os.scandir("."):
    kind = "DIR" if entry.is_dir() else "FILE"
    size = entry.stat().st_size if entry.is_file() else 0
    print(f"  [{kind}] {entry.name} ({size} bytes)")

# Disk usage
total, used, free = shutil.disk_usage("/")
print(f"\\nDisk: {total//(1024**3)} GB total, "
      f"{used//(1024**3)} GB used, {free//(1024**3)} GB free")

# Cleanup
os.unlink("test_hardlink.txt")
os.unlink("test_symlink.txt")
os.unlink("test.txt")`,
                        java: `import java.io.*;
import java.nio.file.*;
import java.nio.file.attribute.*;

public class FileDemo {
    public static void main(String[] args) throws Exception {
        Path path = Paths.get("test.txt");

        // Write
        Files.writeString(path, "Hello from OS course!\\nFile systems!\\n");

        // File attributes
        BasicFileAttributes attrs = Files.readAttributes(
            path, BasicFileAttributes.class);
        System.out.println("Size   : " + attrs.size());
        System.out.println("Created: " + attrs.creationTime());
        System.out.println("Modified:" + attrs.lastModifiedTime());
        System.out.println("IsDir  : " + attrs.isDirectory());

        // POSIX permissions (Unix/Mac only)
        try {
            var perms = Files.getPosixFilePermissions(path);
            System.out.println("Perms  : " +
                PosixFilePermissions.toString(perms));
        } catch (UnsupportedOperationException e) {
            System.out.println("POSIX perms not supported");
        }

        // Hard link
        Path hardLink = Paths.get("test_hardlink.txt");
        Files.createLink(hardLink, path);

        // Symbolic link
        Path symLink = Paths.get("test_symlink.txt");
        Files.createSymbolicLink(symLink, path);
        System.out.println("Symlink target: " +
            Files.readSymbolicLink(symLink));

        // List directory
        System.out.println("\\nDirectory contents:");
        try (DirectoryStream<Path> dir =
                Files.newDirectoryStream(Paths.get("."))) {
            for (Path entry : dir) {
                String type = Files.isDirectory(entry) ? "DIR" : "FILE";
                System.out.println("  [" + type + "] " +
                    entry.getFileName());
            }
        }

        // File store info
        FileStore store = Files.getFileStore(Paths.get("/"));
        System.out.printf("\\nDisk: %d GB total, %d GB free%n",
            store.getTotalSpace() / (1024*1024*1024),
            store.getUsableSpace() / (1024*1024*1024));

        // Cleanup
        Files.deleteIfExists(hardLink);
        Files.deleteIfExists(symLink);
        Files.deleteIfExists(path);
    }
}`,
                    }}
                />
            </section>

            <OsQuiz
                title="Module 5  -  Comprehensive Check"
                questions={[
                    {
                        question: 'Which file allocation method uses an index block?',
                        options: ['Contiguous', 'Linked', 'Indexed', 'Hashed'],
                        answer: 2,
                    },
                    {
                        question: 'What does an inode store in Unix?',
                        options: ['File name', 'File metadata and block pointers', 'Directory name', 'User password'],
                        answer: 1,
                        explanation: 'Inodes store metadata (permissions, size, timestamps) and pointers to data blocks. The filename is stored in the directory entry, not the inode.',
                    },
                    {
                        question: 'What is the purpose of journaling?',
                        options: ['Compress files', 'Speed up reads', 'Ensure consistency after crashes', 'Encrypt data'],
                        answer: 2,
                        explanation: 'Journaling logs changes before applying them, enabling quick recovery after crashes.',
                    },
                    {
                        question: 'How many block pointers does a Unix inode have directly?',
                        options: ['10', '12', '15', '8'],
                        answer: 1,
                        explanation: '12 direct + 1 single indirect + 1 double indirect + 1 triple indirect = 15 total pointer fields, 12 of which are direct.',
                    },
                    {
                        question: 'What is the VFS layer?',
                        options: [
                            'Virtual File Storage on cloud',
                            'Uniform interface to different filesystem types',
                            'Virus detection system',
                            'Volume management software',
                        ],
                        answer: 1,
                    },
                ]}
            />

            <OsResources topicId="file-systems" />

            <section className="module-section">
                <h2>Interview Corner</h2>
                <OsInterviewQuestion
                    question="What is the difference between hard links and soft links?"
                    answer="A hard link is a directory entry pointing directly to the same inode as the original  -  both names are equally 'real.' Deleting the original file doesn't affect hard links (data persists until all links are removed). Hard links cannot cross filesystem boundaries or link to directories (to prevent cycles). A soft (symbolic) link is a special file containing the path to another file. It breaks (dangles) if the target is deleted. Soft links can cross filesystems and point to directories."
                />
                <OsInterviewQuestion
                    question="Explain the Unix inode structure and how it handles different file sizes."
                    answer="A Unix inode contains file metadata plus 15 block pointer fields: 12 direct pointers (addressing 48 KB with 4 KB blocks), 1 single indirect pointer (pointing to a block of 1024 pointers = 4 MB), 1 double indirect (1024 × 1024 pointers = 4 GB), and 1 triple indirect (1024³ pointers = 4 TB). This design is efficient: small files (the vast majority) use only direct pointers with zero overhead. Medium files use one level of indirection. Only very large files need triple indirection. It's a brilliant O(1) access time design for any file size."
                />
                <OsInterviewQuestion
                    question="Compare ext4, NTFS, and FAT32."
                    answer="FAT32: Simple, universally compatible, no journaling, no permissions, 4 GB max file size, 2 TB max volume. Best for USB drives and cross-platform sharing. NTFS: Windows default, supports journaling, ACLs (fine-grained permissions), encryption (EFS), compression, symbolic links, 256 TB max volume. ext4: Linux default, journaling, extents (contiguous block mapping), 16 TB max file, 1 EB max volume, backward compatible with ext2/ext3. Both ext4 and NTFS are journaling filesystems suitable for modern production use; FAT32 is legacy but still widely used for portability."
                />
            </section>
        </div>
    );
}
