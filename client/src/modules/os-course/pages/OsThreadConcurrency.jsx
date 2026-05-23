import OsCodeBlock from '../components/OsCodeBlock';
import OsResources from '../components/OsResources';
import OsQuiz from '../components/OsQuiz';
import OsInterviewQuestion from '../components/OsInterviewQuestion';

export default function OsThreadConcurrency() {
    return (
        <div className="module-page animate-fade-in">
            <div className="module-header">
                <span className="module-badge">MODULE 03</span>
                <h1>Threads & <span className="glow-text">Concurrency</span></h1>
                <p className="module-subtitle">Multithreading models, synchronization primitives, classic problems, and deadlock handling.</p>
            </div>

            {/* 3.1 */}
            <section className="module-section">
                <h2>3.1  -  Threads vs Processes</h2>
                <p>
                    A thread is the smallest unit of CPU utilization  -  a <strong>lightweight process</strong>. Threads within
                    the same process share code, data, open files, and OS resources, but each has its own:
                </p>
                <ul>
                    <li><strong>Thread ID</strong>  -  Unique identifier within the process</li>
                    <li><strong>Program Counter</strong>  -  Which instruction to execute next</li>
                    <li><strong>Register Set</strong>  -  Current register values</li>
                    <li><strong>Stack</strong>  -  Local variables and function call frames</li>
                </ul>
                <h3>Advantages of Threads over Processes</h3>
                <ul>
                    <li><strong>Faster creation</strong>  -  Thread creation is 10 - 100× faster than process creation (no address space copy)</li>
                    <li><strong>Faster context switch</strong>  -  No need to flush TLB or switch page tables</li>
                    <li><strong>Shared memory</strong>  -  Threads naturally share address space; processes need explicit IPC</li>
                    <li><strong>Resource sharing</strong>  -  Code, data, and file descriptors are shared automatically</li>
                    <li><strong>Responsiveness</strong>  -  A blocked thread doesn't block the entire application</li>
                </ul>
                <h3>Disadvantages</h3>
                <ul>
                    <li><strong>Less isolation</strong>  -  A bug in one thread can crash the entire process</li>
                    <li><strong>Synchronization complexity</strong>  -  Shared data requires careful locking</li>
                    <li><strong>Debugging difficulty</strong>  -  Race conditions are timing-dependent and hard to reproduce</li>
                </ul>
            </section>

            {/* 3.2 */}
            <section className="module-section">
                <h2>3.2  -  Multithreading Models</h2>
                <p>
                    User-level threads (managed by user-space libraries) must be mapped to kernel-level threads
                    (managed by the OS) for actual execution:
                </p>
                <h3>Many-to-One Model</h3>
                <p>
                    Many user threads  to  one kernel thread. Thread management in user space (fast creation/switching).
                    <strong> Disadvantage:</strong> One blocking system call blocks all threads. No true parallelism on
                    multicore CPUs. Example: Green threads (early Java, GNU Portable Threads).
                </p>
                <h3>One-to-One Model</h3>
                <p>
                    Each user thread  to  one kernel thread. More parallelism  -  each thread can run on a different core.
                    <strong> Disadvantage:</strong> Creating a thread requires kernel call (overhead). Max threads limited by OS.
                    Examples: <strong>Linux</strong> (NPTL), <strong>Windows</strong> threads.
                </p>
                <h3>Many-to-Many Model</h3>
                <p>
                    M user threads  to  N kernel threads (M ≥ N). Flexible  -  OS only creates as many kernel threads as
                    needed. No blocking issues, true parallelism. <strong>Most complex</strong> to implement.
                    Example: Solaris prior to version 9.
                </p>
                <h3>Two-Level Model</h3>
                <p>
                    Variation of Many-to-Many where specific user threads can be bound to a dedicated kernel thread.
                    Provides both multiplexing flexibility and guaranteed CPU access for critical threads.
                </p>
                <OsCodeBlock
                    title="thread_creation"
                    codes={{
                        c: `#include <stdio.h>
#include <pthread.h>
#include <unistd.h>

#define NUM_THREADS 4

typedef struct {
    int id;
    const char *message;
} ThreadData;

void* worker(void* arg) {
    ThreadData *data = (ThreadData*)arg;
    printf("Thread %d (TID=%lu): %s\\n",
           data to id, pthread_self(), data to message);

    // Simulate work
    for (long i = 0; i < 50000000L; i++);

    printf("Thread %d: done!\\n", data to id);
    pthread_exit((void*)(long)data to id);
}

int main() {
    pthread_t threads[NUM_THREADS];
    ThreadData data[NUM_THREADS];
    pthread_attr_t attr;

    // Set thread attributes (joinable)
    pthread_attr_init(&attr);
    pthread_attr_setdetachstate(&attr, PTHREAD_CREATE_JOINABLE);

    const char *msgs[] = {"Alpha", "Beta", "Gamma", "Delta"};

    for (int i = 0; i < NUM_THREADS; i++) {
        data[i] = (ThreadData){i, msgs[i]};
        int rc = pthread_create(&threads[i], &attr, worker, &data[i]);
        if (rc) {
            fprintf(stderr, "Error creating thread %d\\n", i);
            return 1;
        }
    }

    pthread_attr_destroy(&attr);

    // Wait for all threads
    for (int i = 0; i < NUM_THREADS; i++) {
        void *status;
        pthread_join(threads[i], &status);
        printf("Thread %d joined, returned: %ld\\n",
               i, (long)status);
    }

    printf("All threads completed.\\n");
    return 0;
}`,
                        python: `import threading
import time
import concurrent.futures

def worker(id, message):
    print(f"Thread {id} ({threading.current_thread().name}): {message}")
    time.sleep(0.5)  # Simulate work
    print(f"Thread {id}: done!")
    return id

# Method 1: Manual threads
threads = []
for i, msg in enumerate(["Alpha", "Beta", "Gamma", "Delta"]):
    t = threading.Thread(target=worker, args=(i, msg), name=f"Worker-{i}")
    threads.append(t)
    t.start()

for t in threads:
    t.join()
print("All threads completed.\\n")

# Method 2: ThreadPoolExecutor (modern approach)
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    futures = [pool.submit(worker, i, f"Task-{i}") for i in range(4)]
    for f in concurrent.futures.as_completed(futures):
        print(f"Result: {f.result()}")

# Note: Python GIL limits true parallelism for CPU-bound work.
# Use multiprocessing or C extensions for CPU parallelism.`,
                        java: `import java.util.concurrent.*;

public class ThreadDemo {
    record ThreadData(int id, String message) {}

    public static void main(String[] args) throws Exception {
        // Method 1: Thread class
        Thread[] threads = new Thread[4];
        String[] msgs = {"Alpha", "Beta", "Gamma", "Delta"};

        for (int i = 0; i < 4; i++) {
            final ThreadData data = new ThreadData(i, msgs[i]);
            threads[i] = new Thread(()  to  {
                System.out.printf("Thread %d (%s): %s%n",
                    data.id(), Thread.currentThread().getName(), data.message());
                try { Thread.sleep(500); } catch (Exception e) {}
                System.out.printf("Thread %d: done!%n", data.id());
            }, "Worker-" + i);
            threads[i].start();
        }

        for (Thread t : threads) t.join();
        System.out.println("All threads completed.\\n");

        // Method 2: ExecutorService (modern approach)
        ExecutorService pool = Executors.newFixedThreadPool(4);
        var futures = new java.util.ArrayList<Future<Integer>>();

        for (int i = 0; i < 4; i++) {
            final int id = i;
            futures.add(pool.submit(()  to  {
                System.out.println("Pool task " + id);
                Thread.sleep(500);
                return id;
            }));
        }

        for (Future<Integer> f : futures)
            System.out.println("Result: " + f.get());

        pool.shutdown();
    }
}`,
                    }}
                />
            </section>

            {/* 3.3 */}
            <section className="module-section">
                <h2>3.3  -  The Critical Section Problem</h2>
                <p>
                    When multiple threads access shared data concurrently and at least one modifies it, a <strong>race
                        condition</strong> can occur  -  the outcome depends on the unpredictable order of execution. The
                    <strong> critical section</strong> is the code segment where shared variables are accessed.
                </p>
                <h3>Requirements for a Solution</h3>
                <ul>
                    <li><strong>Mutual Exclusion</strong>  -  At most one thread can be in its critical section at any time</li>
                    <li><strong>Progress</strong>  -  If no thread is in the critical section, the selection of which thread enters next cannot be postponed indefinitely</li>
                    <li><strong>Bounded Waiting</strong>  -  There's a limit on how many times other threads can enter their critical section before a waiting thread gets its turn (no starvation)</li>
                </ul>
                <h3>Peterson's Solution (Software-based)</h3>
                <p>
                    A classic two-process solution using two shared variables: <code>flag[2]</code> (intent to enter) and
                    <code>turn</code> (whose turn). Process sets its flag, yields turn to the other, then waits until the
                    other's flag is false or it's this process's turn. Satisfies all three properties but only works for
                    two processes and may not work on modern CPUs without memory barriers (due to instruction reordering).
                </p>
            </section>

            {/* 3.4 */}
            <section className="module-section">
                <h2>3.4  -  Synchronization Primitives</h2>

                <h3>Mutex Locks</h3>
                <p>
                    A binary lock providing mutual exclusion. A thread must <code>acquire()</code> the lock before entering
                    the critical section and <code>release()</code> it after. Only the owner can release.
                    <strong> Advantages:</strong> Simple, ownership semantics prevent accidental release.
                    <strong> Spinlock variant:</strong> busy-waits (spins) instead of sleeping  -  efficient for very short
                    critical sections on multicore systems.
                </p>

                <h3>Semaphores</h3>
                <p>
                    An integer variable accessed via two atomic operations: <code>wait()</code> (P/down  -  decrement, block
                    if zero) and <code>signal()</code> (V/up  -  increment, wake one blocked thread). Two types:
                </p>
                <ul>
                    <li><strong>Binary Semaphore</strong>  -  Value 0 or 1: functions like a mutex</li>
                    <li><strong>Counting Semaphore</strong>  -  Value 0 to N: controls access to N identical resources (e.g., 5 database connections)</li>
                </ul>

                <h3>Monitors</h3>
                <p>
                    High-level synchronization construct encapsulating shared data with procedures that access it. Only one
                    thread can be active inside a monitor at a time (mutual exclusion built in). Uses <strong>condition
                        variables</strong> with <code>wait()</code> and <code>signal()</code>/<code>notify()</code> for blocking/waking.
                    Java's <code>synchronized</code> keyword implements monitor semantics.
                </p>

                <h3>Condition Variables</h3>
                <p>
                    Allow threads to wait for specific conditions to become true. Always used with a mutex/lock.
                    <code>wait(cond, mutex)</code>  -  atomically releases mutex and blocks. <code>signal(cond)</code>  -  wakes
                    one waiting thread. <code>broadcast(cond)</code>  -  wakes all waiting threads.
                </p>

                <h3>Read-Write Locks</h3>
                <p>
                    Allows concurrent reads but exclusive writes. Multiple readers can hold the lock simultaneously.
                    A writer must wait for all readers to finish, then gains exclusive access. Useful for data structures
                    with frequent reads and infrequent writes (e.g., caches, config data).
                </p>

                <h3>Barriers</h3>
                <p>
                    Synchronization point where all threads must arrive before any can proceed. Used in parallel algorithms
                    where phases must be synchronized (e.g., parallel matrix computation).
                </p>

                <OsCodeBlock
                    title="synchronization"
                    codes={{
                        c: `#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>

// ---- Mutex Example ----
int counter = 0;
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

void* increment(void* arg) {
    for (int i = 0; i < 100000; i++) {
        pthread_mutex_lock(&mutex);
        counter++;
        pthread_mutex_unlock(&mutex);
    }
    return NULL;
}

// ---- Semaphore Example ----
#define BUFFER_SIZE 5
int buffer[BUFFER_SIZE];
int in = 0, out = 0;
sem_t full, empty;
pthread_mutex_t buf_mutex;

void* producer(void* arg) {
    for (int i = 0; i < 10; i++) {
        sem_wait(&empty);
        pthread_mutex_lock(&buf_mutex);
        buffer[in] = i;
        printf("Produced: %d\\n", i);
        in = (in + 1) % BUFFER_SIZE;
        pthread_mutex_unlock(&buf_mutex);
        sem_post(&full);
    }
    return NULL;
}

void* consumer(void* arg) {
    for (int i = 0; i < 10; i++) {
        sem_wait(&full);
        pthread_mutex_lock(&buf_mutex);
        int item = buffer[out];
        printf("Consumed: %d\\n", item);
        out = (out + 1) % BUFFER_SIZE;
        pthread_mutex_unlock(&buf_mutex);
        sem_post(&empty);
    }
    return NULL;
}

int main() {
    // Mutex demo
    pthread_t t1, t2;
    pthread_create(&t1, NULL, increment, NULL);
    pthread_create(&t2, NULL, increment, NULL);
    pthread_join(t1, NULL);
    pthread_join(t2, NULL);
    printf("Counter: %d\\n\\n", counter);

    // Producer-Consumer demo
    sem_init(&full, 0, 0);
    sem_init(&empty, 0, BUFFER_SIZE);
    pthread_mutex_init(&buf_mutex, NULL);

    pthread_t prod, cons;
    pthread_create(&prod, NULL, producer, NULL);
    pthread_create(&cons, NULL, consumer, NULL);
    pthread_join(prod, NULL);
    pthread_join(cons, NULL);

    return 0;
}`,
                        python: `import threading
import time
from queue import Queue

# ---- Mutex / Lock Example ----
counter = 0
lock = threading.Lock()

def increment():
    global counter
    for _ in range(100000):
        with lock:   # context manager auto acquire/release
            counter += 1

threads = [threading.Thread(target=increment) for _ in range(2)]
for t in threads: t.start()
for t in threads: t.join()
print(f"Counter: {counter}\\n")

# ---- Semaphore Example ----
sem = threading.Semaphore(3)  # Allow 3 concurrent accesses

def limited_resource(id):
    with sem:
        print(f"Thread {id} acquired resource")
        time.sleep(0.5)
        print(f"Thread {id} released resource")

threads = [threading.Thread(target=limited_resource, args=(i,)) for i in range(6)]
for t in threads: t.start()
for t in threads: t.join()

# ---- Producer-Consumer with Queue ----
buffer = Queue(maxsize=5)

def producer():
    for i in range(10):
        buffer.put(i)
        print(f"Produced: {i}")

def consumer():
    for _ in range(10):
        item = buffer.get()
        print(f"Consumed: {item}")

threading.Thread(target=producer).start()
threading.Thread(target=consumer).start()`,
                        java: `import java.util.concurrent.*;
import java.util.concurrent.locks.*;

public class SyncDemo {
    // ---- Lock Example ----
    static int counter = 0;
    static final ReentrantLock lock = new ReentrantLock();

    // ---- ReadWriteLock Example ----
    static final ReadWriteLock rwLock = new ReentrantReadWriteLock();
    static String sharedData = "initial";

    // ---- Semaphore Example ----
    static final Semaphore sem = new Semaphore(3);

    public static void main(String[] args) throws Exception {
        // Mutex with ReentrantLock
        Thread t1 = new Thread(()  to  {
            for (int i = 0; i < 100000; i++) {
                lock.lock();
                try { counter++; }
                finally { lock.unlock(); }
            }
        });
        Thread t2 = new Thread(()  to  {
            for (int i = 0; i < 100000; i++) {
                lock.lock();
                try { counter++; }
                finally { lock.unlock(); }
            }
        });
        t1.start(); t2.start();
        t1.join(); t2.join();
        System.out.println("Counter: " + counter);

        // Producer-Consumer with BlockingQueue
        BlockingQueue<Integer> queue = new ArrayBlockingQueue<>(5);
        Thread producer = new Thread(()  to  {
            try {
                for (int i = 0; i < 10; i++) {
                    queue.put(i);
                    System.out.println("Produced: " + i);
                }
            } catch (InterruptedException e) {}
        });
        Thread consumer = new Thread(()  to  {
            try {
                for (int i = 0; i < 10; i++)
                    System.out.println("Consumed: " + queue.take());
            } catch (InterruptedException e) {}
        });
        producer.start(); consumer.start();
        producer.join(); consumer.join();
    }
}`,
                    }}
                />
            </section>

            {/* 3.5 */}
            <section className="module-section">
                <h2>3.5  -  Classic Synchronization Problems</h2>

                <h3>Producer-Consumer (Bounded Buffer)</h3>
                <p>
                    Producers generate data into a fixed-size buffer; consumers remove it. Requires: producers wait when
                    buffer is full, consumers wait when buffer is empty, and mutual exclusion on the buffer itself.
                    Solved with three semaphores: <code>mutex</code> (binary, buffer access), <code>empty</code> (counting,
                    initially N), <code>full</code> (counting, initially 0).
                </p>

                <h3>Readers-Writers Problem</h3>
                <p>
                    Multiple readers can read simultaneously, but writers need exclusive access. Two variations:
                    <strong> First readers-writers</strong>  -  readers have priority (writers may starve).
                    <strong> Second readers-writers</strong>  -  writers have priority (readers may starve).
                    Solution uses a read count variable protected by a mutex, plus a semaphore for writer access.
                </p>

                <h3>Dining Philosophers</h3>
                <p>
                    Five philosophers sit around a table with five forks. Each needs two forks to eat. If all
                    simultaneously pick up their left fork  to  deadlock. Solutions: 1) Allow at most 4 philosophers at a
                    time. 2) Odd-numbered pick left first, even-numbered pick right first (break symmetry). 3) Use a
                    monitor with state tracking. 4) Pick up both forks atomically (via a semaphore).
                </p>

                <h3>Sleeping Barber</h3>
                <p>
                    A barber sleeps when no customers are in the shop (N waiting chairs). A customer wakes the barber
                    or sits in a waiting chair (or leaves if all chairs are full). Uses semaphores: <code>customers</code>
                    (customers waiting), <code>barber</code> (barber availability), <code>mutex</code> (waiting count access).
                </p>
            </section>

            {/* 3.6 */}
            <section className="module-section">
                <h2>3.6  -  Deadlock</h2>
                <p>
                    A set of processes is deadlocked when every process is waiting for a resource held by another process
                    in the set. No process can make progress.
                </p>
                <h3>Four Necessary Conditions (Coffman Conditions)</h3>
                <ol>
                    <li><strong>Mutual Exclusion</strong>  -  At least one resource is non-sharable (only one process can use it)</li>
                    <li><strong>Hold and Wait</strong>  -  A process holds one resource while waiting for another</li>
                    <li><strong>No Preemption</strong>  -  Resources cannot be forcibly taken from a process</li>
                    <li><strong>Circular Wait</strong>  -  A cycle exists in the wait-for graph: P1 to P2 to P3 to P1</li>
                </ol>
                <p><strong>All four</strong> must hold simultaneously for deadlock. Breaking any one prevents it.</p>

                <h3>Deadlock Prevention</h3>
                <p>Ensure at least one Coffman condition cannot hold:</p>
                <ul>
                    <li><strong>Break Mutual Exclusion</strong>  -  Make resources sharable (usually impractical)</li>
                    <li><strong>Break Hold and Wait</strong>  -  Require processes to request all resources at once (low utilization), or release all held resources before requesting new ones</li>
                    <li><strong>Break No Preemption</strong>  -  If a process can't get all resources, release what it holds and retry</li>
                    <li><strong>Break Circular Wait</strong>  -  Impose a total ordering on resources; processes must request in order</li>
                </ul>

                <h3>Deadlock Avoidance  -  Banker's Algorithm</h3>
                <p>
                    Requires advance knowledge of maximum resource needs. Before granting a request, the OS checks if
                    the resulting state is <strong>safe</strong>  -  meaning a sequence exists where all processes can
                    finish. If the state would be unsafe, the request is denied and the process waits.
                    Uses matrices: <strong>Available</strong>, <strong>Max</strong>, <strong>Allocation</strong>, and
                    <strong> Need</strong> (Need = Max - Allocation).
                </p>

                <h3>Deadlock Detection</h3>
                <p>
                    Allow deadlocks to occur, then detect and recover. Use a <strong>wait-for graph</strong>  -  deadlock
                    exists iff the graph contains a cycle. For single-instance resources, use cycle detection algorithm.
                    For multi-instance, use a variant of Banker's algorithm.
                </p>

                <h3>Deadlock Recovery</h3>
                <ul>
                    <li><strong>Process Termination</strong>  -  Abort all deadlocked processes (expensive) or abort one at a time until cycle breaks (which one? lowest priority, least work done, etc.)</li>
                    <li><strong>Resource Preemption</strong>  -  Take resources from deadlocked processes and give them to others. Issues: selecting a victim, rollback, starvation prevention.</li>
                </ul>
            </section>

            {/* 3.7 */}
            <section className="module-section">
                <h2>3.7  -  Thread Safety & Common Pitfalls</h2>
                <h3>Race Conditions</h3>
                <p>
                    When the result depends on the interleaving of thread execution. Example: two threads doing
                    <code>counter++</code> (read-modify-write) without a lock  -  both might read the same value, increment
                    it, and write back, losing one increment.
                </p>
                <h3>Priority Inversion</h3>
                <p>
                    A high-priority thread is blocked because a low-priority thread holds a needed lock, and a
                    medium-priority thread preempts the low-priority one (preventing it from releasing the lock).
                    <strong>Solution:</strong> Priority Inheritance Protocol  -  temporarily raise the low-priority
                    thread's priority to the high-priority thread's level. This happened in the Mars Pathfinder mission (1997).
                </p>
                <h3>Livelock</h3>
                <p>
                    Like deadlock, but processes continuously change state in response to each other without making
                    progress. Example: two people in a hallway, both stepping aside in the same direction repeatedly.
                    Solution: introduce randomized delays or back-off strategies.
                </p>
                <h3>Thread-Safe Data Structures</h3>
                <p>
                    Concurrent queues, hash maps, and lists that use internal locking or lock-free algorithms
                    (CAS  -  Compare-And-Swap). Java provides <code>ConcurrentHashMap</code>, <code>BlockingQueue</code>,
                    <code>AtomicInteger</code>. C++ has <code>std::atomic</code>, <code>std::mutex</code>.
                </p>
            </section>

            <OsQuiz
                title="Module 3  -  Comprehensive Check"
                questions={[
                    {
                        question: 'What do threads in the same process share?',
                        options: ['Stack', 'Registers', 'Code and data sections', 'Program counter'],
                        answer: 2,
                        explanation: 'Threads share code, data, and open files but have separate stacks, registers, and PCs.',
                    },
                    {
                        question: 'Which is NOT a condition for deadlock?',
                        options: ['Mutual Exclusion', 'Preemption', 'Hold and Wait', 'Circular Wait'],
                        answer: 1,
                        explanation: 'The condition is "No Preemption", not "Preemption". Preemption prevents deadlock.',
                    },
                    {
                        question: 'What does a mutex guarantee?',
                        options: ['Deadlock freedom', 'Mutual exclusion', 'Starvation freedom', 'Maximum throughput'],
                        answer: 1,
                    },
                    {
                        question: 'In the dining philosophers problem, what causes deadlock?',
                        options: [
                            'All philosophers pick up their left fork simultaneously',
                            'Philosophers eat too fast',
                            'The table is round',
                            'Forks are too small',
                        ],
                        answer: 0,
                        explanation: 'If all pick up the left fork at the same time, each waits for the right fork held by the neighbor  to  circular wait.',
                    },
                    {
                        question: 'What is the Banker\'s Algorithm used for?',
                        options: ['Memory allocation', 'Deadlock avoidance', 'CPU scheduling', 'Page replacement'],
                        answer: 1,
                        explanation: 'It checks whether granting a resource request leaves the system in a safe state.',
                    },
                ]}
            />

            <OsResources topicId="threads" />

            <section className="module-section">
                <h2>Interview Corner</h2>
                <OsInterviewQuestion
                    question="What is a race condition and how do you prevent it?"
                    answer="A race condition occurs when multiple threads access shared data and at least one modifies it without proper synchronization, making the outcome depend on thread interleaving. Prevention: use mutual exclusion (mutexes, locks), atomic operations (CAS), immutable data, thread-local storage, or lock-free data structures. The key principle: if data is shared AND mutable, it must be synchronized."
                />
                <OsInterviewQuestion
                    question="Explain the Producer-Consumer problem and its solution."
                    answer="Producers generate data into a bounded buffer; consumers remove it. Problems: producers must wait when buffer is full, consumers must wait when empty, and concurrent access must be synchronized. Classic solution uses 3 synchronization primitives: mutex (for buffer access), empty semaphore (initially N, tracks free slots), full semaphore (initially 0, tracks filled slots). Producer: wait(empty), lock(mutex), produce, unlock(mutex), signal(full). Consumer: wait(full), lock(mutex), consume, unlock(mutex), signal(empty)."
                />
                <OsInterviewQuestion
                    question="What is priority inversion? Give a real-world example."
                    answer="Priority inversion occurs when a high-priority thread H is blocked by a low-priority thread L holding a lock, while a medium-priority thread M preempts L. H is effectively running at L's priority or lower. Real-world example: Mars Pathfinder (1997)  -  the high-priority bus management task was blocked by a low-priority meteorological task holding a shared mutex, while medium-priority tasks preempted the low-priority one, causing system resets. Fix: Priority Inheritance Protocol  -  temporarily boost L's priority to H's level so it can finish and release the lock."
                />
                <OsInterviewQuestion
                    question="How does the Banker's Algorithm work?"
                    answer="Banker's Algorithm is a deadlock avoidance algorithm. It maintains four data structures: Available (resources currently free), Max (max demand per process), Allocation (currently allocated per process), Need (remaining demand = Max - Allocation). Before granting a request, it simulates the allocation and checks if a 'safe sequence' exists  -  an ordering where each process can get its maximum needs and finish. If safe, the request is granted; if not, the process must wait. It requires knowing maximum resource needs in advance, which limits its practical use."
                />
                <OsInterviewQuestion
                    question="What is the difference between a deadlock and a livelock?"
                    answer="In a deadlock, processes are permanently blocked  -  each waiting for a resource held by another, with no state changes. In a livelock, processes continuously change state in response to each other but make no actual progress  -  they're not blocked but not productive. Example: two people in a narrow hallway who keep stepping aside in the same direction, continuously moving but never passing. Livelocks are often harder to detect than deadlocks because the processes appear active."
                />
            </section>
        </div>
    );
}
