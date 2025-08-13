---
title: "Giscus, Tools yang Bikin Webmu Bisa Dikomentari oleh Pembacamu"
description: "Giscus adalah tools open-source yang memungkinkan pengunjung web memberikan komentar menggunakan GitHub Discussions. Gratis, aman, dan mudah diintegrasikan."
date: "Aug 11 2025"
---

![Giscus Comments Integration](https://images.unsplash.com/photo-1461468611824-46457c0e11fd?q=80&w=2940&auto=format&fit=crop)
## Website Sepi? Coba Kasih Fitur Komentar 💬

Pernah bikin website keren, tapi nggak ada yang berinteraksi?
Pengunjung cuma baca, terus pergi.
Padahal, komentar dari pembaca itu penting buat:

- Dapat feedback langsung.
- Meningkatkan engagement.
- Bangun komunitas di sekitar konten kamu.

Nah, ketemu lah saya sama **Giscus** — tools ringan, open-source, dan gratis, yang bikin website bisa punya kolom komentar kece.

## Apa Itu Giscus? 🤔

**Giscus** adalah platform komentar yang menggunakan **GitHub Discussions** sebagai database-nya.
Artinya:
- Nggak perlu bikin backend komentar sendiri.
- Komentar otomatis tersimpan di GitHub.
- Aman karena integrasi langsung dengan akun GitHub user.

📌 Cocok banget buat blog statis seperti **Next.js, Astro, Hugo, atau Jekyll**.

## Kenapa Saya Suka Giscus ❤️

1. **Gratis & Open Source** → Nggak ada biaya bulanan.
2. **Login via GitHub** → Nggak ada spam anonim.
3. **Integrasi Cepat** → Tinggal embed script, selesai.
4. **Bisa Dark Mode** → Nyaman buat pembaca malam-malam.

## Cara Pasang Giscus di Website 🛠️

1. **Buat repository di GitHub** untuk menampung diskusi.
2. Aktifkan fitur **Discussions** di repo tersebut.
3. Kunjungi [Giscus App](https://giscus.app/) untuk generate script embed.
4. Pilih opsi seperti:
   - Tema (light/dark/auto)
   - Bahasa
   - Mapping komentar (per halaman/post)
5. Copy script yang dihasilkan ke file HTML/Markdown website kamu.

💡 *Tips:* Kalau pakai framework seperti Next.js, taruh script ini di komponen `Comments.js`.

## Contoh Kode Integrasi
```html
<script src="https://giscus.app/client.js"
        data-repo="username/nama-repo"
        data-repo-id="REPO_ID"
        data-category="General"
        data-category-id="CATEGORY_ID"
        data-mapping="pathname"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-theme="light"
        crossorigin="anonymous"
        async>
</script>
```

## Kesimpulan

Giscus adalah solusi sempurna untuk website yang membutuhkan fitur komentar tanpa kerumitan backend:

- ✨ Gratis untuk digunakan
- 🔒 Aman dengan autentikasi GitHub
- 🚀 Mudah diintegrasikan ke berbagai platform

Dengan Giscus, website Anda tidak hanya menjadi platform konten, tetapi juga ruang interaktif untuk diskusi yang bermakna. 💬

## Catatan Penting

- **Pembatasan Akun GitHub**: Giscus memerlukan akun GitHub untuk mengomentari.
- **Pembatasan Diskusi**: Setiap pengguna hanya dapat membuat satu diskusi per halaman.
- **Pembatasan Komentar**: Setiap pengguna hanya dapat membuat satu komentar per diskusi.