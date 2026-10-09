# FMS WORKWIL

หน้า Landing Page สำหรับรวมทางเข้าสู่ระบบสหกิจศึกษาและระบบฝึกงานของคณะวิทยาการจัดการ มหาวิทยาลัยสงขลานครินทร์ ผู้ใช้งานสามารถเลือกเข้าสู่ระบบที่ตรงกับหลักสูตร พร้อมดูข้อมูลติดต่อผู้ดูแลได้จากหน้าเดียว

## ระบบที่เชื่อมต่อ

| ระบบ | URL |
| --- | --- |
| ระบบสหกิจศึกษา | https://coop.fms.psu.ac.th |
| ระบบฝึกงาน | https://portal.fms.psu.ac.th/fmsinternship/index.php |
| ระบบฝึกงาน BBA | https://portal.fms.psu.ac.th/fmsinternshipBBA |

## คุณสมบัติ

- Responsive Design รองรับ Desktop, Tablet และ Mobile
- ภาพประกอบทั้งหมดสร้างด้วย Inline SVG โดยไม่ใช้ไฟล์รูปภาพภายนอก
- Loading Screen พร้อมแสดงสถานะการโหลด
- Typewriter Animation สำหรับข้อความหลักภาษาไทย
- Card Animation และ Interaction เมื่อ Hover หรือใช้ Keyboard
- ใช้ฟอนต์ Anuphan แบบ Variable Font น้ำหนัก 100–700
- เปิดใช้งานผ่าน `file://` ได้โดยไม่เกิดปัญหา CORS ของฟอนต์
- รองรับ Keyboard Navigation, Skip Link และข้อความสำหรับ Screen Reader
- มี fallback เมื่อ JavaScript ถูกปิด
- ไม่พึ่งพา Framework หรือ Library ภายนอก

## เทคโนโลยี

- HTML5
- CSS3
- Vanilla JavaScript
- Inline SVG
- Anuphan Variable Font

## โครงสร้างโปรเจกต์

```text
workwil/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── app.js
    └── fonts/
        └── anuphan/
            ├── Anuphan-Variable-Latin.woff2
            ├── Anuphan-Variable-Thai.woff2
            └── OFL.txt
```

## การเปิดใช้งาน

โปรเจกต์ไม่มีขั้นตอน Build และไม่ต้องติดตั้ง Dependency สามารถเปิด `index.html` ด้วย Browser ได้ทันที

หากต้องการใช้งานผ่าน Local Server สามารถใช้ PHP:

```bash
php -S localhost:8000
```

จากนั้นเปิด `http://localhost:8000`

สามารถใช้ส่วนขยาย Live Server ของ Visual Studio Code หรือ Web Server อื่นแทนได้เช่นกัน

## การแก้ไขเนื้อหา

### ข้อความ ลิงก์ และข้อมูลติดต่อ

แก้ไขใน `index.html` โดย Portal แต่ละระบบอยู่ภายใน element ที่มี class `portal-card`

```html
<a class="portal-card" href="https://example.com" target="_blank" rel="noopener noreferrer">
  <!-- เนื้อหาของระบบ -->
</a>
```

### สีและรูปแบบเว็บไซต์

แก้ไขใน `assets/css/style.css` ตัวแปรสีหลักอยู่ใน `:root`

```css
:root {
  --ink: #17132f;
  --violet: #6a4cff;
  --orange: #ff8059;
  --mint: #42c69c;
  --yellow: #ffc857;
  --page: #f8f7fc;
}
```

### Typewriter Animation

ระยะเวลาและจังหวะการพิมพ์กำหนดผ่านตัวแปรใน `.typewriter-line` และ `.typewriter-line--two`

```css
.typewriter-line {
  --type-duration: 1.25s;
  --type-delay: .18s;
  --type-steps: 12;
}
```

ค่า `clip-path` ของ Typewriter มีพื้นที่เผื่อด้านบนและล่างสำหรับสระและวรรณยุกต์ภาษาไทย ไม่ควรเปลี่ยนกลับเป็น `inset(0 ...)` เพราะอาจทำให้อักขระ เช่น `ู` ถูกตัด

### Loading Screen และพฤติกรรมหน้าเว็บ

แก้ไขใน `assets/js/app.js` ตัวแปร `minimumDuration` ใช้กำหนดระยะเวลาขั้นต่ำของ Loading Screen

```javascript
const minimumDuration = reduceMotion ? 0 : 850;
```

ไฟล์นี้ยังควบคุมการเริ่ม Typewriter, Smooth Scroll, ปีปัจจุบัน และ fallback ป้องกัน Loading Screen ค้าง

## ฟอนต์

โปรเจกต์ใช้ฟอนต์ **Anuphan** แยกชุดอักขระภาษาไทยและละติน ภายใน `style.css` มีการฝังไฟล์ WOFF2 เป็น Data URL เพื่อรองรับการเปิดเว็บไซต์โดยตรงผ่าน `file://` ส่วนไฟล์ต้นฉบับเก็บไว้ใน `assets/fonts/anuphan/`

Anuphan เผยแพร่ภายใต้ SIL Open Font License 1.1 ดูรายละเอียดได้จาก `assets/fonts/anuphan/OFL.txt`

## การนำขึ้น Server

อัปโหลด `index.html`, `README.md` และโฟลเดอร์ `assets` โดยรักษาโครงสร้างเดิมทั้งหมด หน้าเว็บไม่ต้องใช้ฐานข้อมูลหรือ Server-side Runtime

ควรทดสอบลิงก์ทั้งสามระบบและการแสดงผลบน Mobile ก่อนนำขึ้น Production

## Browser ที่รองรับ

แนะนำ Browser เวอร์ชันปัจจุบันที่รองรับ Variable Font, `clip-path`, `color-mix()` และ `backdrop-filter` เช่น:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

## License

โปรเจกต์นี้ยังไม่ได้ระบุ License สำหรับ Source Code ส่วนฟอนต์ Anuphan อยู่ภายใต้ SIL Open Font License 1.1
