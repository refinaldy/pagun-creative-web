# Pagun Creative - Migration & Rebranding Plan

## 1. Brand Identity Transfer
Kita akan menggabungkan struktur "High-End" Ahency dengan identitas Pagun Creative.

*   **Nama Agency:** Ahency $\rightarrow$ **PAGUN CREATIVE**
*   **Tagline:** "Visual Alchemy" $\rightarrow$ **"Optimize Your Social Media & Brand"**
*   **Warna Utama:**
    *   Base: Tetap Dark (Obsidian) agar terlihat premium.
    *   Accent: Ubah warna biru elektrik/silver Ahency menjadi **Pagun Teal (`#28d8d0`)**. Ini akan memberikan efek "Neon/Cyber" yang sangat modern di atas background hitam.
*   **Lokasi:** Update footer ke **Tarakan, Kalimantan Utara**.

## 2. Content Mapping (Source Code to New Components)

### A. Hero Section (`src/components/Hero.tsx`)
*   **Old:** "Optimize Your Social Media & Brand" / "Creative Agency Looking for Creative Client".
*   **New:** Gunakan tipografi raksasa Ahency untuk menampilkan **"OPTIMIZE YOUR BRAND"** dengan animasi slide-up. Subtext: "Creative Agency based in Tarakan".

### B. Services (`src/components/Services.tsx`)
Mapping layanan lama ke Bento Grid baru:
1.  **Old:** Package / Social Media $\rightarrow$ **Box 1 (Large): Social Media Management**
2.  **Old:** Logo & Visual Branding $\rightarrow$ **Box 2: Visual Branding**
3.  **Old:** Video Content / Media Production $\rightarrow$ **Box 3: Media Production**
4.  **Old:** Photoshoot $\rightarrow$ **Box 4: Creative Photoshoot**

### C. Portfolio (`src/data/projects.ts`)
Kita akan update dummy data dengan kategori nyata Pagun:
1.  **Project 1:** Social Media Management (untuk klien seperti Telkomsel/Pertamina).
2.  **Project 2:** Video Production (Short Reels/YouTube).
3.  **Project 3:** Visual Identity (Logo Design).
4.  **Project 4:** Event Documentation (berdasarkan klien "Komansa Event").

### D. Clients Section (New Component Needed!)
Website lama memiliki carousel logo klien (Pertamina, Telkomsel, UT, dll).
*   **Plan:** Ubah komponen `Marquee.tsx` menjadi **Logo Slider** atau buat section baru `Clients.tsx` dengan Grid Logo monokrom yang menjadi berwarna saat di-hover.

### E. Contact & Footer (`src/components/Footer.tsx`)
*   **Email:** `paguncreativeagency@outlook.com`
*   **Phone:** `+62-813 4950 5575`
*   **Socials:** Instagram, WhatsApp, YouTube.
*   **Address:** Tarakan, North Kalimantan.

---

## 3. Execution Steps

1.  **Update Global Colors:** Set variable warna teal `#28d8d0` di Tailwind config.
2.  **Update Metadata:** Judul website dan deskripsi di `layout.tsx`.
3.  **Update Content:** Edit `Hero.tsx`, `Services.tsx`, `About.tsx` dengan copywiting asli Pagun.
4.  **Refactor Work:** Update `projects.ts` dengan studi kasus yang relevan dengan Pagun.
5.  **New Feature:** Tambahkan section `Clients.tsx` untuk memamerkan daftar klien (Pertamina, Telkomsel, dll) agar kredibilitas terjaga.
