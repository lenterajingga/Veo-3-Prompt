document.addEventListener('DOMContentLoaded', () => {
    const cameraMovements = {
        "Static": "Statis",
        "Zoom In": "Perbesar",
        "Zoom Out": "Perkecil",
        "Pan Left": "Geser Kiri",
        "Pan Right": "Geser Kanan",
        "Tilt Up": "Miring ke Atas",
        "Tilt Down": "Miring ke Bawah",
        "Dolly In (Truck In)": "Maju (Dolly In)",
        "Dolly Out (Truck Out)": "Mundur (Dolly Out)",
        "Orbit (3D Rotation)": "Mengorbit (Rotasi 3D)",
        "Crane Up": "Naik (Crane Up)",
        "Crane Down": "Turun (Crane Down)",
        "Tracking Shot": "Tembakan Mengikuti",
        "Handheld/Shaky": "Genggam/Goyang",
        "Roll Left": "Putar Kiri",
        "Roll Right": "Putar Kanan"
    };

    const cameraSelect = document.getElementById('gerakan_kamera');
    for (const [english, indonesian] of Object.entries(cameraMovements)) {
        const option = document.createElement('option');
        option.value = english;
        option.textContent = `${english} (${indonesian})`;
        cameraSelect.appendChild(option);
    }

    document.getElementById('generateBtn').addEventListener('click', () => {
        // Mengambil semua nilai dari input
        const judul = document.getElementById('judul_scane').value.trim();
        const deskripsiKarakter = document.getElementById('deskripsi_karakter').value.trim();
        const suaraKarakter = document.getElementById('suara_karakter').value.trim();
        const aksiKarakter = document.getElementById('aksi_karakter').value.trim();
        const ekspresiKarakter = document.getElementById('ekspresi_karakter').value.trim();
        const latar = document.getElementById('latar_tempat_waktu').value.trim();
        const detailVisual = document.getElementById('detail_visual').value.trim();
        const gerakanKamera = document.getElementById('gerakan_kamera').value;
        const suasana = document.getElementById('suasana').value.trim();
        const suaraLingkungan = document.getElementById('suara_lingkungan').value.trim();
        const dialog = document.getElementById('dialog_karakter').value.trim();
        const negativePrompt = document.getElementById('negative_prompt').value.trim();

        // --- Kembangkan dan susun prompt dalam Bahasa Indonesia ---
        const promptIndonesia = `**Judul Scane:** ${judul}

**Deskripsi Karakter Inti:**
Seorang karakter yang konsisten: ${deskripsiKarakter}

**Detail Suara Karakter:**
Deskripsi audio untuk karakter: ${suaraKarakter}

**Aksi dan Ekspresi Karakter:**
Dalam adegan ini, karakter terlihat sedang ${aksiKarakter} dengan ekspresi wajah yang menunjukkan ${ekspresiKarakter}.

**Latar Tempat, Waktu, dan Suasana:**
Berlatar di ${latar}. Suasana keseluruhan yang ingin diciptakan adalah ${suasana}.

**Detail Visual Tambahan dan Sinematografi:**
Gaya visual untuk video ini adalah ${detailVisual}. 
Gerakan kamera yang digunakan adalah ${gerakanKamera} (${cameraMovements[gerakanKamera]}), diambil secara sinematik untuk menangkap setiap momen dengan indah.

**Desain Suara:**
Suara lingkungan yang dominan adalah ${suaraLingkungan} untuk membangun realisme.
${dialog ? `**Dialog Karakter (Bahasa Indonesia):**\nDIALOG: "${dialog}"` : "*(Tidak ada dialog dalam adegan ini)*"}

**Negative Prompt (Hal yang harus dihindari):**
${negativePrompt}`;

        document.getElementById('output_indonesia').value = promptIndonesia;

        // --- Terjemahkan ke Bahasa Inggris untuk prompt Final ---
        const promptInggris = `**Scene Title:** ${judul}

**Core Character Description:**
A consistent character: ${deskripsiKarakter}

**Character Voice Details:**
Audio description for the character: ${suaraKarakter}

**Character Action and Expression:**
In this scene, the character is seen ${aksiKarakter} with a facial expression of ${ekspresiKarakter}.

**Setting, Time, and Atmosphere:**
Set in ${latar}. The overall atmosphere to be created is ${suasana}.

**Additional Visual Details and Cinematography:**
The visual style for this video is ${detailVisual}. 
The camera movement used is a cinematic ${gerakanKamera}, beautifully capturing every moment.

**Sound Design:**
The dominant ambient sound is ${suaraLingkungan} to build realism.
${dialog ? `**Character Dialogue (in Indonesian):**\nDIALOGUE: "${dialog}"` : "*(No dialogue in this scene)*"}

**Negative Prompt (Things to avoid):**
${negativePrompt}`;

        document.getElementById('output_inggris').value = promptInggris;
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        const fieldsToClear = [
            'judul_scane', 'deskripsi_karakter', 'suara_karakter', 'aksi_karakter',
            'ekspresi_karakter', 'latar_tempat_waktu', 'detail_visual', 'suasana',
            'suara_lingkungan', 'dialog_karakter', 'output_indonesia', 'output_inggris'
        ];

        fieldsToClear.forEach(id => {
            document.getElementById(id).value = '';
        });

        document.getElementById('gerakan_kamera').selectedIndex = 0;
        
        document.getElementById('negative_prompt').value = "Hindari: teks di layar, subtitle, tulisan di video, font, logo, distorsi, artefak, anomali, wajah ganda, anggota badan cacat, tangan tidak normal, orang tambahan, objek mengganggu, kualitas rendah, buram, glitch, suara robotik, suara pecah.";
    });
}); 
