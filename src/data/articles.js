export const articlesData = [
  {
    id: 'ubuntu-26-04-new-era',
    badge: 'LINUX & OPEN SOURCE',
    badgeColor: '#f97316',
    title: 'Ubuntu 26.04: A New Era of Security and Modern Desktop Experience',
    date: 'April 2026',
    readTime: '7 min read',
    tags: ['Ubuntu', 'Linux', 'Security', 'Rust', 'GNOME'],
    excerpt:
      'The release of Ubuntu 26.04 LTS, codenamed "Reliable Rhino," marks a significant turning point in the Linux landscape. By prioritizing memory safety, hardware modernization, and a refined user interface, Canonical has delivered a version that feels both cutting-edge and rock-solid.',
    sections: [
      {
        heading: 'Visual Evolution: A Refined Aesthetic',
        body: 'Ubuntu 26.04 introduces a more professional and polished look through several key UI updates.\n\nDistinctive Iconography: Icons have been completely redesigned with better definition and depth, making them more recognizable at a glance.\n\nSolid Top Bar: Breaking away from the tradition of translucency, the top bar is now opaque. This change offers better readability and a more structured feel to the workspace.\n\nEnhanced Contrast: Systematic adjustments to contrast throughout the GNOME Shell ensure that the interface is more accessible, particularly for users in high-glare environments or those with visual impairments.',
      },
      {
        heading: 'The Rust Revolution: Security at the Core',
        body: 'One of the most ambitious changes in this release happens under the hood with the transition to Rust.\n\nSudo to Sudo-rs: To mitigate long-standing vulnerabilities associated with C, Ubuntu has transitioned to sudo-rs. This implementation provides memory safety, significantly reducing the risk of buffer overflows and similar exploits.\n\nVisual Password Feedback: When typing passwords in the terminal, users will now see visual feedback in the form of stars (*), making the terminal experience more intuitive for newcomers.\n\nPinned Terminals: Users can now "pin" specific terminal sessions, allowing for better management of long-running tasks and complex workflows.',
      },
      {
        heading: 'Integrated Security and System Management',
        body: 'The new Security Center serves as a centralized hub for protecting your data.\n\nUbuntu Pro & Encryption: Deep integration with Ubuntu Pro is now standard. Managing Disk Encryption and Encryption Keys (KEY/DISK) has been simplified, putting advanced security tools into the hands of everyday users.\n\nUnified Updates: The App Center has absorbed the Update Center. Having a single destination for both application management and system updates streamlines the maintenance process.\n\nPrivacy Control: The "Help Improve Ubuntu" data-sharing feature can now be easily toggled off during or after installation, giving users total control over their telemetry data.',
      },
      {
        heading: 'Performance and Modern Hardware Support',
        body: 'Ubuntu 26.04 is built for the hardware of today and tomorrow.\n\nModern CPU Optimization: The kernel and system libraries have been tuned specifically for the latest CPU architectures, ensuring maximum performance and better power efficiency.\n\nUser-Friendly System Monitor: The System Monitor has received a complete UI overhaul. It now provides a modern, graphical representation of system resources that is easy to interpret.\n\nWayland Only: In a bold move towards modernization, Ubuntu has dropped X11 support in favor of a Wayland-only environment. This ensures a smoother, more secure, and tear-free display experience.',
      },
      {
        heading: 'Productivity and GNOME Enhancements',
        body: 'The desktop experience is further bolstered by updates to the GNOME ecosystem.\n\nEnhanced Accessibility: The Screen Reader has been significantly improved, offering more natural-sounding voices and faster response times.\n\nFile Management: Users can now select multiple different file types more intuitively, and the Document Viewer has been upgraded for better performance with large PDFs.\n\nRemote Login: Accessing your GNOME session remotely is now a native, seamless experience, allowing for secure "Remote Login" directly into your desktop.\n\nParental Controls: Using the Malcontent GUI, parents can easily manage application access and screen time for younger users through a dedicated section in the settings.',
      },
    ],
    externalUrl: 'https://medium.com/@isilkurt96',
  },
  {
    id: 'chip-binning-macbook-neo',
    badge: 'HARDWARE & SEMICONDUCTORS',
    badgeColor: '#60a5fa',
    title: 'A Second Chance for Silicon: Chip Binning Technology and the MacBook Neo Revolution',
    date: 'April 2026',
    readTime: '6 min read',
    tags: ['Apple', 'Hardware', 'Semiconductors', 'Silicon'],
    excerpt:
      'The semiconductor industry manages one of the most complex manufacturing processes known to humanity. Not all chips that come off the same production line are identical — and this is exactly where one of the tech world\'s smartest efficiency strategies comes into play: "Binning."',
    sections: [
      {
        heading: 'What is "Binning" (Silicon Sorting)?',
        body: 'Chips are generally manufactured on massive silicon disks (wafers) that are typically 30 centimeters in diameter. Due to the nature of the manufacturing process, chips near the center of the disk usually perform flawlessly, while microscopic manufacturing defects tend to increase toward the edges.\n\nFlawless Chips (Top Tier): These are the chips that reach the highest targeted clock speeds with the lowest voltage and minimal heat output, with all cores fully active. They are placed in "Premium" or flagship devices.\n\nImperfect Chips (Lower Tier): These chips might run too hot when hitting target speeds, or they might have hardware defects in specific cores.\n\nIn the past, these imperfect chips were simply thrown away, resulting in massive financial losses. Today, manufacturers permanently disable the defective parts of these chips (for example, laser-cutting or microcoding 2 faulty cores out of an 8-core chip). The processor, now running on the remaining healthy cores, is released for lower-tier, budget-friendly devices.',
      },
      {
        heading: 'Turning Imperfection into Efficiency',
        body: 'This strategy is not just a salvage operation; it is a tactic to expand product lineups. Many products we know well in the computer world are actually marvels of "binning."\n\nFor instance, the highest quality silicon coming off a production line might earn an Intel Core i9 or AMD Ryzen 9 label. Meanwhile, slightly less lucky chips from the exact same line have their defective parts disabled and are packaged as Core i5 or Ryzen 5 processors. This minimizes manufacturing waste while ensuring there is a processor for every budget.',
      },
      {
        heading: 'The Recycling Story of the MacBook Neo and A18 Pro',
        body: 'One of the most recent and striking examples of the binning strategy is the MacBook Neo. Instead of designing a chip from scratch, Apple utilized the A18 Pro processors — the heart of the iPhone 16 Pro series — with a special sorting process.\n\nDuring the incredibly demanding 3-nanometer manufacturing process, some A18 Pro chips were found to have minor defects in just one of their 6-core GPUs. Instead of trashing thousands of chips over this tiny flaw, Apple cleverly sorted them:\n\n• The single defective GPU core was permanently deactivated.\n• The processor was configured as a new variant with a stable and powerful 5-core GPU.\n• These perfectly healthy processors were then placed into the budget-friendly MacBook Neo computers.',
      },
      {
        heading: 'A Win-Win for Consumer and Manufacturer',
        body: 'This strategy carried the inherent advantages of the A18 Pro — such as its massive System Level Cache (24MB SLC) and ultra-low power consumption — straight into a laptop form factor.\n\nThe Manufacturer (Apple): Reduced waste in its 3nm production process to near zero and maintained profit margins.\n\nThe Consumer: Gained the opportunity to own a Mac model with excellent battery life at a much more accessible price point.\n\nAt first glance, "binning" might sound like "selling defective goods," but it is actually engineering brilliance at the heart of modern hardware manufacturing. The MacBook Neo will go down in history as one of the most successful examples of sustainability and cost optimization in the hardware world.',
      },
    ],
    externalUrl: 'https://medium.com/@isilkurt96',
  },
  {
    id: 'xz-utils-scandal',
    badge: 'CYBERSECURITY',
    badgeColor: '#f87171',
    title: 'The Half-Second That Brought the Internet Back from the Brink: The XZ Utils Scandal',
    date: 'March 2026',
    readTime: '8 min read',
    tags: ['Security', 'Open Source', 'Supply Chain', 'Linux'],
    excerpt:
      'The XZ Utils incident (CVE-2024-3094) that emerged in 2024 proved just how fragile the open-source web of trust can be — with a Supply Chain Attack unprecedented in history. This was not just a technical vulnerability; it was a social engineering operation carefully woven over years.',
    sections: [
      {
        heading: 'Building the Trojan Horse: The "Jia Tan" Operation',
        body: 'At the center of everything was a harmless tool called xz, widely used as a standard for data compression in Linux systems. The project\'s main developer, Lasse Collin, was struggling with burnout — one of the biggest issues in the open-source ecosystem — creating a perfect opportunity for attackers.\n\nIn 2021, a mysterious developer (or state-sponsored hacker group) using the alias "Jia Tan" began helping with the project. For two and a half years, Jia Tan wrote highly useful, clean, and high-quality code, earning the complete trust of the community. As a result of this patient effort, they gained authority to manage and update the library. The Trojan horse was now inside the castle.',
      },
      {
        heading: "The Target Wasn't Compression, It Was Global Access",
        body: 'Once Jia Tan took over management privileges, they inserted an incredibly complex, encrypted, and nearly impossible-to-detect backdoor into the xz library.\n\nThe true genius of the plan lay in hiding the code\'s objective. This malware did not break xz\'s compression capabilities. Instead, the library was designed to hook into the SSH (Secure Shell) background service, which provides secure remote access to Linux servers. The ultimate goal: the attackers would be able to infiltrate servers all over the world — banks, government systems, and the infrastructures of tech giants — with a "universal master key," without needing any password.',
      },
      {
        heading: 'The 500-Millisecond Suspicion That Saved the World',
        body: 'The attack was working like clockwork. Packages containing the malicious code had successfully infiltrated the test versions of major Linux distributions like Fedora, Debian, and Kali Linux. It was only weeks away from reaching the stable releases used by millions of live servers.\n\nAt that moment, Andres Freund, a database engineer at Microsoft, noticed that logging in via SSH took just 500 milliseconds longer than usual, and the processor was inexplicably using extra cycles.\n\nThis microscopic delay — which most people would have ignored — gnawed at Freund. When he reverse-engineered the process, he realized that one of the greatest disasters in internet history was narrowly avoided, and alerted the whole world.',
      },
      {
        heading: 'The Day the Digital World Woke Up',
        body: 'The XZ Utils scandal goes far beyond a simple hack; it demonstrates the new and terrifying dimensions cyber warfare has reached. Today, it is still not definitively known which state or intelligence agency is behind the "Jia Tan" identity.\n\nHowever, this event took its place in history as a bitter warning of how carefully the open-source packages and supply chains the tech world depends on must be audited. If that half-second delay had not been noticed, the infrastructure of the digital world as we know it today could have already been irreversibly compromised.',
      },
    ],
    externalUrl: 'https://medium.com/@isilkurt96',
  },
  {
    id: 'apple-m5-mlx-unified-memory',
    badge: 'AI & HARDWARE',
    badgeColor: '#c084fc',
    title: 'The Architecture Rewriting the Rules of AI: Apple M5, MLX, and the Unified Memory Revolution',
    date: 'February 2026',
    readTime: '9 min read',
    tags: ['Apple', 'AI', 'MLX', 'Hardware', 'LLM'],
    excerpt:
      'While traditional computer architectures focus on increasing raw muscle power to run massive AI models, Apple has chosen a radical different path: sharing and unifying. The M5 series processors and the MLX framework represent a hardware revolution in how AI models are trained and executed.',
    sections: [
      {
        heading: 'The Bottleneck of Traditional Systems: The Burden of Data Transfer',
        body: 'In a standard computer architecture, the CPU and GPU have physically separate memories (RAM and VRAM). When running a massive AI model, data must constantly be taken from the CPU\'s memory and transferred to the graphics card\'s memory via PCIe lanes to be processed.\n\nIn a model with billions of parameters, this continuous copying process turns into a bottleneck that clogs bandwidth, creating terrible latency and wasting enormous amounts of energy.',
      },
      {
        heading: 'The Magic of Zero-Copy and the Developer Experience',
        body: "Apple's biggest move with the Apple Silicon (M-series) architecture was tearing down this wall. In M5 chips, the CPU, GPU, and Neural Engine physically use memory from the exact same pool.\n\nThe MLX framework, developed by Apple's machine learning researchers, is designed specifically to unleash the power of this architecture. Thanks to MLX, the AI model's data is not copied between the CPU and GPU. Both processing units can instantly interact with the same data right where it sits (zero-copy). For developers building AI-based applications, this means that machine learning tests and model execution processes — which previously could only be done on massive servers — can now be smoothly performed directly in a local development environment.",
      },
      {
        heading: 'UltraFusion: Turning Two Chips into a Single Brain',
        body: 'In the "Ultra" architecture, the pinnacle of the M5 series, Apple utilizes a technology called UltraFusion.\n\nTwo massive M5 Max chips are soldered together with a special bridge that allows terabytes of data to flow between them per second. The software (MLX and macOS) perceives these two physical chips and their combined memory (e.g., 192 GB or more) not as two separate systems, but as one gigantic brain. This massive shared memory pool allows enormous AI models — which no standard computer could fit into its memory alone — to be run in a single piece without being fragmented.',
      },
      {
        heading: 'A Network Beyond Borders: MLX Distributed',
        body: 'The freshest step of the revolution is stepping outside the boundaries of the local device. Thanks to the MLX Distributed Inference feature, multiple physically separate Mac computers can be connected to each other over a network.\n\nIf you have a model too large to fit even the highest configuration of a single Mac (for example, an open-source LLM with hundreds of billions of parameters), other devices on the network combine their memories into a common pool. Processors share different layers of the massive model over the network and run them collaboratively, as if they were a single supercomputer.',
      },
      {
        heading: 'Conclusion',
        body: 'The Apple M5 and MLX duo responds to the traditional AI hardware approach — which is based on "more power, more energy consumption" — with brilliant engineering. By uniting memory instead of dividing it, and sharing instead of copying, this architecture breaks the monopoly of cloud servers over massive AI models and brings them right to the desk of local hardware. The new golden rule is now very clear: whoever shares memory best will build the future.',
      },
    ],
    externalUrl: 'https://medium.com/@isilkurt96',
  },
];
