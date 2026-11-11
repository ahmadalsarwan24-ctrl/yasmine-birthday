
// =================================
// سجل الصفحات والتنقل
// =================================

let pageHistory = ["home"];

function goToPage(pageId) {
  const currentPage = document.querySelector(".page.active");
  const nextPage = document.getElementById(pageId);

  if (!nextPage || !currentPage || currentPage.id === pageId) {
    return;
  }

  pageHistory.push(pageId);

  currentPage.classList.remove("active");
  nextPage.classList.add("active");

  window.scrollTo(0, 0);
}

function goBack() {
  if (pageHistory.length <= 1) return;

  const currentId = pageHistory.pop();
  const previousId = pageHistory[pageHistory.length - 1];

  const currentPage = document.getElementById(currentId);
  const previousPage = document.getElementById(previousId);

  if (!currentPage || !previousPage) return;

  currentPage.classList.remove("active");
  previousPage.classList.add("active");

  window.scrollTo(0, 0);
}

function goHome() {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const homePage = document.getElementById("home");

  if (homePage) {
    homePage.classList.add("active");
  }

  pageHistory = ["home"];

  window.scrollTo(0, 0);
}


// =================================
// ذكريات حديقة الزهور
// =================================

function showMemory(memoryId) {
  const memory = document.getElementById(memoryId);
  const memoryText = document.getElementById("memoryText");

  if (!memory || !memoryText) return;

  memoryText.textContent = memory.textContent.trim();
}


// =================================
// صندوق الأسرار
// =================================

function showSecret() {
  const message = document.getElementById("secretMessage");
  const button = document.querySelector(".secret-btn");

  if (!message || !button) return;

  message.classList.toggle("open");

  button.textContent = message.classList.contains("open")
    ? "❤️ أغلقي الرسالة"
    : "✨ افتحي رسالتكِ";
}


// =================================
// الأمنيات
// =================================

const wishes = [
  "أتمنى أن تبقى ضحكتكِ حاضرة في كل أيامكِ، وأن لا يعرف الحزن طريقاً إلى قلبكِ. ❤️",

  "أتمنى أن تتحقق كل أحلامكِ، وأن تجدي في كل يوم سبباً جديداً للسعادة. 🌸",

  "وأتمنى أن أبقى بجانبكِ، نكبر معاً ونصنع ذكريات نحكي عنها بعد سنين. 💜"
];

function showWish(index) {
  const wishBox = document.getElementById("wishBox");

  if (wishBox && wishes[index]) {
    wishBox.textContent = wishes[index];
  }
}


// =================================
// صور كتاب ذكريات أميرتي
// =================================

let memoryPhotos = [
  "https://i.ibb.co/9myKgsmK/image-941.webp",
  "https://i.ibb.co/144NMMW/file-000000005b447243a6d85c569cb2833c.png",
  "https://i.ibb.co/nqm2CzhV/file-0000000072587246a43f07d3e4d02ebd.png",
  "https://i.ibb.co/0VqJR9sm/IMG-20260718-170026-012.jpg",
  "https://i.ibb.co/wFhvrZYW/file-000000008e708243aec0522f28ef40c3.png",
  "https://i.ibb.co/h1ZD4SKQ/file-00000000918c820e8838c4326863f6c5.png",
  "https://i.ibb.co/VYFddNdX/file-00000000b3cc821084ad03716de4bc48.png",
  "https://i.ibb.co/2305r08Z/image-20261031175151-418.webp",
  "https://i.ibb.co/SX6zFX9k/IMG-20261110-141838-388.jpg",
  "https://i.ibb.co/WpjZSWxW/file-000000007a58821298ad8bedd4bf1a9d.png",
  "https://i.ibb.co/DD3Jd4md/IMG-20261110-185631-145.jpg",
  "https://i.ibb.co/qLnY2jQM/IMG-20261110-185646-380.jpg",
  "https://i.ibb.co/6c8q3hKQ/IMG-20261110-185650-560.jpg",
  "https://i.ibb.co/9Hc2Qb8T/IMG-20261110-190042-793.jpg"
];

let currentMemorySpread = 0;

function openMemoryBook() {
  const cover = document.getElementById("bookCover");
  const inside = document.getElementById("bookInside");

  if (!cover || !inside) return;

  cover.style.display = "none";
  inside.classList.add("open");

  currentMemorySpread = 0;

  renderMemorySpread();
}

function closeMemoryBook() {
  const cover = document.getElementById("bookCover");
  const inside = document.getElementById("bookInside");

  if (!cover || !inside) return;

  inside.classList.remove("open");
  cover.style.display = "flex";

  currentMemorySpread = 0;
}

function renderMemorySpread() {
  const image = document.getElementById("memoryImage");
  const pageNumber = document.getElementById("memoryPageNumber");
  const pageCount = document.getElementById("bookPageCount");

  if (!image || !pageNumber || !pageCount) return;

  image.src = memoryPhotos[currentMemorySpread];

  pageNumber.textContent = currentMemorySpread + 1;

  pageCount.textContent =
    (currentMemorySpread + 1) + " / " + memoryPhotos.length;

  const prevButton = document.getElementById("prevMemoryBtn");
  const nextButton = document.getElementById("nextMemoryBtn");

  if (prevButton) {
    prevButton.disabled = currentMemorySpread === 0;
  }

  if (nextButton) {
    nextButton.disabled =
      currentMemorySpread === memoryPhotos.length - 1;
  }
}

function changeMemoryPage(direction) {
  const newSpread = currentMemorySpread + direction;

  if (newSpread < 0 || newSpread >= memoryPhotos.length) return;

  currentMemorySpread = newSpread;

  const spread = document.getElementById("bookSpread");

  if (spread) {
    spread.classList.remove("turn-next", "turn-prev");

    void spread.offsetWidth;

    spread.classList.add(
      direction === 1 ? "turn-next" : "turn-prev"
    );
  }

  renderMemorySpread();
}


// =================================
// إنشاء نجوم الخلفية
// =================================

function createSparkles() {
  const stars = document.getElementById("stars");

  if (!stars) return;

  for (let i = 0; i < 65; i++) {
    const star = document.createElement("span");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 3 + "s";

    star.style.animationDuration =
      2 + Math.random() * 4 + "s";

    stars.appendChild(star);
  }
}

createSparkles();


// =================================
// التفاعل السحري للفراشات والهلال
// =================================

const magicDecor = document.querySelector(".magic-decor");

// إعادة تشغيل الحركة
function replayAnimation(element, className) {
  if (!element) return;

  element.classList.remove(className);

  void element.offsetWidth;

  element.classList.add(className);
}

// إنشاء أثر مضيء
function createTrail(x, y) {
  if (!magicDecor) return;

  const particle = document.createElement("span");

  particle.className = "butterfly-trail";
  particle.style.left = x + "px";
  particle.style.top = y + "px";

  magicDecor.appendChild(particle);

  setTimeout(() => particle.remove(), 800);
}

// فراشات صغيرة إضافية
function createMiniButterflies(butterfly) {
  if (!magicDecor) return;

  const rect = butterfly.getBoundingClientRect();
  const parentRect = magicDecor.getBoundingClientRect();

  const centerX =
    rect.left - parentRect.left + rect.width / 2;

  const centerY =
    rect.top - parentRect.top + rect.height / 2;

  for (let i = 0; i < 5; i++) {
    const mini = document.createElement("span");

    mini.className = "mini-butterfly";
    mini.textContent = "🦋";

    const angle = (Math.PI * 2 * i) / 5;
    const distance = 45 + Math.random() * 35;

    mini.style.left = centerX + "px";
    mini.style.top = centerY + "px";

    mini.style.setProperty(
      "--fly-x",
      Math.cos(angle) * distance + "px"
    );

    mini.style.setProperty(
      "--fly-y",
      Math.sin(angle) * distance + "px"
    );

    magicDecor.appendChild(mini);

    setTimeout(() => mini.remove(), 1400);
  }
}


// =================================
// سحب الفراشات بالإصبع أو الماوس
// =================================

if (magicDecor) {
  document.querySelectorAll(".magic-decor .butterfly").forEach(butterfly => {

    let isDragging = false;
    let moved = false;

    let startX = 0;
    let startY = 0;

    let originalLeft = 0;
    let originalTop = 0;

    let trailCounter = 0;

    butterfly.addEventListener("pointerdown", event => {

      if (event.button !== 0) return;

      event.preventDefault();

      isDragging = true;
      moved = false;
      trailCounter = 0;

      const rect = butterfly.getBoundingClientRect();
      const parentRect = magicDecor.getBoundingClientRect();

      startX = event.clientX;
      startY = event.clientY;

      originalLeft = rect.left - parentRect.left;
      originalTop = rect.top - parentRect.top;

      butterfly.style.left = originalLeft + "px";
      butterfly.style.top = originalTop + "px";

      butterfly.style.right = "auto";
      butterfly.style.bottom = "auto";

      butterfly.classList.remove("touched");
      butterfly.classList.add("dragging");

      if (typeof butterfly.setPointerCapture === "function") {
        butterfly.setPointerCapture(event.pointerId);
      }
    });

    butterfly.addEventListener("pointermove", event => {

      if (!isDragging) return;

      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;

      if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
        moved = true;
      }

      if (!moved) return;

      const parentRect = magicDecor.getBoundingClientRect();

      const maxX = Math.max(
        0,
        parentRect.width - butterfly.offsetWidth
      );

      const maxY = Math.max(
        0,
        parentRect.height - butterfly.offsetHeight
      );

      const newX = Math.max(
        0,
        Math.min(maxX, originalLeft + deltaX)
      );

      const newY = Math.max(
        0,
        Math.min(maxY, originalTop + deltaY)
      );

      butterfly.style.left = newX + "px";
      butterfly.style.top = newY + "px";

      trailCounter++;

      if (trailCounter % 2 === 0) {
        createTrail(
          newX + butterfly.offsetWidth / 2,
          newY + butterfly.offsetHeight / 2
        );
      }
    });

    function finishDragging() {
      if (!isDragging) return;

      isDragging = false;

      butterfly.classList.remove("dragging");

      if (moved) {
        butterfly.dataset.moved = "true";
      } else {
        replayAnimation(butterfly, "touched");
        createMiniButterflies(butterfly);
      }
    }

    butterfly.addEventListener("pointerup", finishDragging);
    butterfly.addEventListener("pointercancel", finishDragging);

    butterfly.addEventListener("lostpointercapture", finishDragging);

    butterfly.addEventListener("animationend", event => {
      if (event.animationName === "butterflyTouch") {
        butterfly.classList.remove("touched");
      }
    });

  });
}


// =================================
// نجيمات الهلال
// =================================

function createMoonSparkles(moon) {
  if (!magicDecor) return;

  const rect = moon.getBoundingClientRect();
  const parentRect = magicDecor.getBoundingClientRect();

  const centerX =
    rect.left - parentRect.left + rect.width / 2;

  const centerY =
    rect.top - parentRect.top + rect.height / 2;

  for (let i = 0; i < 10; i++) {
    const sparkle = document.createElement("span");

    sparkle.className = "moon-sparkle";

    const angle = (Math.PI * 2 * i) / 10;
    const distance = 35 + Math.random() * 25;

    sparkle.style.left = centerX + "px";
    sparkle.style.top = centerY + "px";

    sparkle.style.setProperty(
      "--sparkle-x",
      Math.cos(angle) * distance + "px"
    );

    sparkle.style.setProperty(
      "--sparkle-y",
      Math.sin(angle) * distance + "px"
    );

    magicDecor.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
  }
}

// موجات الهلال الذهبية
function createMoonWaves(moon) {
  if (!magicDecor) return;

  const rect = moon.getBoundingClientRect();
  const parentRect = magicDecor.getBoundingClientRect();

  for (let i = 0; i < 3; i++) {
    const wave = document.createElement("span");

    wave.className = "moon-wave";

    wave.style.left =
      rect.left - parentRect.left + rect.width / 2 - 22 + "px";

    wave.style.top =
      rect.top - parentRect.top + rect.height / 2 - 22 + "px";

    wave.style.animationDelay = i * 0.18 + "s";

    magicDecor.appendChild(wave);

    setTimeout(() => wave.remove(), 1700);
  }
}

// تفاعل الهلال
const magicMoon = document.querySelector(
  ".magic-decor .decor.moon"
);

if (magicMoon && magicDecor) {

  magicMoon.addEventListener("click", () => {
    replayAnimation(magicMoon, "touched");

    createMoonSparkles(magicMoon);
    createMoonWaves(magicMoon);
  });

  magicMoon.addEventListener("animationend", event => {
    if (event.animationName === "moonTouch") {
      magicMoon.classList.remove("touched");
    }
  });
}


// =================================
// اليراعات السحرية
// =================================

function createFireflies() {
  for (let i = 0; i < 12; i++) {
    const firefly = document.createElement("span");

    firefly.className = "firefly";

    firefly.style.left = Math.random() * 90 + 5 + "vw";
    firefly.style.top = Math.random() * 85 + 5 + "vh";

    firefly.style.animationDelay = Math.random() * 5 + "s";

    firefly.style.animationDuration =
      5 + Math.random() * 5 + "s";

    document.body.appendChild(firefly);

    // متغيرات السحب
    let isDragging = false;
    let moved = false;

    let startX = 0;
    let startY = 0;

    let originalLeft = 0;
    let originalTop = 0;

    // بدء اللمس أو السحب
    firefly.addEventListener("pointerdown", event => {
      if (event.button !== 0) return;

      event.preventDefault();

      isDragging = true;
      moved = false;

      const rect = firefly.getBoundingClientRect();

      startX = event.clientX;
      startY = event.clientY;

      originalLeft = rect.left;
      originalTop = rect.top;

      firefly.style.left = originalLeft + "px";
      firefly.style.top = originalTop + "px";

      firefly.style.right = "auto";
      firefly.style.bottom = "auto";

      firefly.classList.add("dragging");

      if (typeof firefly.setPointerCapture === "function") {
        firefly.setPointerCapture(event.pointerId);
      }
    });

    // تحريك اليراعة بالإصبع أو الماوس
    firefly.addEventListener("pointermove", event => {
      if (!isDragging) return;

      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;

      if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
        moved = true;
      }

      if (!moved) return;

      const maxX = Math.max(
        0,
        window.innerWidth - firefly.offsetWidth
      );

      const maxY = Math.max(
        0,
        window.innerHeight - firefly.offsetHeight
      );

      const newX = Math.max(
        0,
        Math.min(maxX, originalLeft + deltaX)
      );

      const newY = Math.max(
        0,
        Math.min(maxY, originalTop + deltaY)
      );

      firefly.style.left = newX + "px";
      firefly.style.top = newY + "px";
    });

    // إنهاء السحب أو تنفيذ تأثير اللمس
    function finishFirefly(event) {
      if (!isDragging) return;

      isDragging = false;

      firefly.classList.remove("dragging");

      if (!moved) {
        createFireflyHearts(firefly);
      }

      if (
        event &&
        typeof firefly.hasPointerCapture === "function" &&
        firefly.hasPointerCapture(event.pointerId)
      ) {
        firefly.releasePointerCapture(event.pointerId);
      }
    }

    firefly.addEventListener("pointerup", finishFirefly);

    firefly.addEventListener("pointercancel", finishFirefly);

    firefly.addEventListener("lostpointercapture", () => {
      if (isDragging) {
        isDragging = false;
        firefly.classList.remove("dragging");
      }
    });
  }
}


// =================================
// قلوب صغيرة عند لمس اليراعة
// =================================

function createFireflyHearts(firefly) {
  const rect = firefly.getBoundingClientRect();

  for (let i = 0; i < 7; i++) {
    const heart = document.createElement("span");

    heart.className = "firefly-heart";
    heart.textContent = "❤️";

    heart.style.left = rect.left + "px";
    heart.style.top = rect.top + "px";

    heart.style.setProperty(
      "--heart-x",
      (Math.random() * 100 - 50) + "px"
    );

    heart.style.setProperty(
      "--heart-y",
      (Math.random() * -100 - 20) + "px"
    );

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1300);
  }
}


// =================================
// تشغيل اليراعات
// =================================

createFireflies();



// =================================
// مشغل موسيقى ياسمين القابل للسحب
// =================================

const yasmineAudio = document.getElementById("yasmineAudio");
const musicToggle = document.getElementById("musicToggle");
const musicVolume = document.getElementById("musicVolume");
const musicPlayer = document.querySelector(".music-player");

// تشغيل وإيقاف الأغنية
function toggleYasmineMusic() {
  if (!yasmineAudio || !musicToggle) return;

  if (yasmineAudio.paused) {
    yasmineAudio.play().catch(error => {
      console.error("تعذر تشغيل الأغنية:", error);
    });
  } else {
    yasmineAudio.pause();
  }
}

// التحكم بمستوى الصوت
if (yasmineAudio && musicVolume) {
  yasmineAudio.volume = Number(musicVolume.value);

  musicVolume.addEventListener("input", () => {
    yasmineAudio.volume = Number(musicVolume.value);
  });
}

// تحديث زر التشغيل
if (yasmineAudio && musicToggle) {
  yasmineAudio.addEventListener("play", () => {
    musicToggle.textContent = "Ⅱ";
  });

  yasmineAudio.addEventListener("pause", () => {
    musicToggle.textContent = "▶";
  });
}

// تحريك المشغل بالإصبع أو الماوس
if (musicPlayer) {
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let originalLeft = 0;
  let originalTop = 0;
  let moved = false;

  musicPlayer.addEventListener("pointerdown", event => {
    if (event.target.closest("button, input, audio")) return;
    if (event.button !== 0) return;

    const rect = musicPlayer.getBoundingClientRect();

    isDragging = true;
    moved = false;

    startX = event.clientX;
    startY = event.clientY;

    originalLeft = rect.left;
    originalTop = rect.top;

    musicPlayer.style.left = originalLeft + "px";
    musicPlayer.style.top = originalTop + "px";
    musicPlayer.style.right = "auto";
    musicPlayer.style.bottom = "auto";

    musicPlayer.classList.add("dragging");

    musicPlayer.setPointerCapture(event.pointerId);
  });

  musicPlayer.addEventListener("pointermove", event => {
    if (!isDragging) return;

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;

    if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
      moved = true;
    }

    if (!moved) return;

    const maxX = window.innerWidth - musicPlayer.offsetWidth;
    const maxY = window.innerHeight - musicPlayer.offsetHeight;

    const newX = Math.max(0, Math.min(maxX, originalLeft + deltaX));
    const newY = Math.max(0, Math.min(maxY, originalTop + deltaY));

    musicPlayer.style.left = newX + "px";
    musicPlayer.style.top = newY + "px";
  });

  function stopDragging() {
    if (!isDragging) return;

    isDragging = false;
    musicPlayer.classList.remove("dragging");
  }

  musicPlayer.addEventListener("pointerup", stopDragging);
  musicPlayer.addEventListener("pointercancel", stopDragging);
  musicPlayer.addEventListener("lostpointercapture", stopDragging);
}

// =================================
// 🎂 احتفال عيد ميلاد ياسمين
// =================================

let birthdayCelebrationStarted = false;

function extinguishCandle(candle) {
  if (!candle || candle.classList.contains("extinguished")) {
    return;
  }

  // إطفاء الشمعة
  candle.classList.add("extinguished");
  candle.disabled = true;

  const remainingCandles = document.querySelectorAll(
    "#final .candle:not(.extinguished)"
  ).length;

  const hint = document.getElementById("candleHint");

  if (remainingCandles > 0) {
    if (hint) {
      hint.textContent =
        "بقي " + remainingCandles +
        (remainingCandles === 1
          ? " شمعة... اقتربت المفاجأة! ✨"
          : " شمعتان... تابعي يا أميرتي! ✨");
    }

    return;
  }

  // تشغيل الاحتفال مرة واحدة
  if (birthdayCelebrationStarted) return;

  birthdayCelebrationStarted = true;

  if (hint) {
    hint.textContent = "أمنيتكِ أصبحت بين النجوم يا أميرتي 💜";
  }

  const celebration = document.getElementById(
    "birthdayCelebration"
  );

  if (celebration) {
    celebration.classList.add("show");
  }

  createBirthdayConfetti();
  createBirthdayHearts();
}


// =================================
// قصاصات عيد الميلاد
// =================================

function createBirthdayConfetti() {
  const container = document.getElementById(
    "confettiContainer"
  );

  if (!container) return;

  const colors = [
    "#ffd76a",
    "#d9a5ff",
    "#ff8fd8",
    "#ffffff",
    "#a77bff",
    "#f5c77e"
  ];

  for (let i = 0; i < 65; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti-piece";

    piece.style.setProperty(
      "--confetti-x",
      Math.random() * 100 + "%"
    );

    piece.style.setProperty(
      "--confetti-color",
      colors[Math.floor(Math.random() * colors.length)]
    );

    piece.style.setProperty(
      "--confetti-duration",
      2.5 + Math.random() * 2.5 + "s"
    );

    piece.style.setProperty(
      "--confetti-delay",
      Math.random() * 1.5 + "s"
    );

    container.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 6500);
  }
}


// =================================
// قلوب عائمة في الاحتفال
// =================================

function createBirthdayHearts() {
  const container = document.getElementById(
    "confettiContainer"
  );

  if (!container) return;

  const hearts = ["💜", "💗", "💛", "❤️", "✨"];

  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("span");

    heart.textContent =
      hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.position = "absolute";
    heart.style.left = Math.random() * 90 + 5 + "%";
    heart.style.bottom = "-20px";
    heart.style.fontSize = 16 + Math.random() * 15 + "px";
    heart.style.pointerEvents = "none";
    heart.style.animation =
      "birthdayHeartFloat " +
      (3 + Math.random() * 3) +
      "s ease-out forwards";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6500);
  }
}
