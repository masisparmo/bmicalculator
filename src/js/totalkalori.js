        const translations = {
            id: {
                title: "Total Kalori Harian",
                subtitle: "Tracking: Calorie In vs Calorie Out",
                nav_home: "🏠 Beranda",
                nav_know: "📚 Pengetahuan",
                nav_total: "🔥 Total Kalori",
                sect_profile: "📅 Tanggal & Profil",
                ph_name: "Nama Anda",
                ph_age: "Usia (th)",
                ph_weight: "Berat (kg)",
                ph_height: "Tinggi (cm)",
                val_male: "👨 Pria",
                val_female: "👩 Wanita",
                note_profile: "*Data diperlukan untuk menghitung BMR (Kalori dasar)",
                sect_out: "🔥 Calorie Out (Aktivitas)",
                lbl_act_type: "Pilih Jenis Aktivitas",
                opt_work_routine: "Pekerjaan / Rutinitas",
                opt_work_in: "🏢 Bekerja Indoor (Duduk/Sedentary)",
                opt_work_out: "🏗️ Bekerja Outdoor (Bergerak/Aktif)",
                opt_sport: "Olahraga",
                opt_pingpong_cas: "🏓 Ping Pong (Santai)",
                opt_pingpong_comp: "🏆 Ping Pong (Kompetitif)",
                opt_jogging: "🏃 Jogging",
                opt_walk_leisure: "🚶 Jalan Santai (4 km/jam)",
                opt_walk_brisk: "👟 Jalan Cepat (6.4 km/jam)",
                opt_gym: "🏋️ Gym / Angkat Beban",
                opt_aerobic: "🤸 Aerobik",
                opt_badminton: "🏸 Badminton",
                opt_cycling: "🚴 Bersepeda (Cycling)",
                opt_martial: "🥋 Bela Diri (Martial Arts)",
                opt_custom: "✨ Lainnya (Custom)",
                ph_act_name: "Nama Aktivitas",
                ph_act_met: "Est. MET (1-10)",
                btn_find_met: "✨ Cari Nilai MET (AI)",
                ph_duration: "Menit",
                btn_add_act: "➕ Tambah Aktivitas",
                sect_in: "🥗 Calorie In (Makanan)",
                tab_manual: "Manual Input",
                tab_scan: "AI Scanner",
                ph_food_name: "Nama Makanan (misal: Nasi Goreng)",
                ph_portion: "Porsi (1 piring)",
                ph_cal: "Kalori (kkal)",
                btn_est_nut: "✨ Hitung Estimasi Gizi (AI)",
                ph_carb: "Karbo (g)",
                ph_prot: "Protein (g)",
                ph_fat: "Lemak (g)",
                btn_add_food: "Tambah Makanan",
                btn_cam: "Ambil Foto",
                btn_upload: "Upload",
                txt_analyzing: "Menganalisa gambar...",
                sect_recap: "📊 Rekapitulasi Harian",
                lbl_in: "Masuk (Makanan)",
                lbl_out: "Keluar (Aktivitas + BMR)",
                empty_food: "Belum ada makanan dicatat.",
                empty_act: "Belum ada aktivitas dicatat.",
                lbl_bmr: "BMR",
                lbl_bmr_desc: "Metabolisme Dasar",
                lbl_net: "Net Calories",
                lbl_net_desc: "(In - Out)",
                status_bal: "Seimbang",
                btn_analyze: "🤖 Analisa AI Ahli",
                expert_btn: "Tanya Ahli Kesehatan",
                expert_name: "Dr. AI Expert",
                expert_role: "Ahli Gizi & Olahraga",
                chat_welcome: "Halo! Saya ahli kesehatan dengan pengalaman puluhan tahun. Ada yang bisa saya bantu terkait nutrisi, olahraga, atau kesehatan tubuh?",
                ph_chat: "Tulis pertanyaan Anda...",
                modal_api_title: "Pengaturan API Key",
                ph_api: "Masukkan Gemini API Key",
                btn_save: "Simpan",
                alert_db_fail: "Gagal memuat database (IndexedDB). Riwayat tidak akan tersimpan. Error: ",
                alert_profile_inc: "Mohon lengkapi data profil (Berat, Tinggi, Usia) untuk menghitung kalori terbakar.",
                alert_act_inc: "Data aktivitas tidak lengkap.",
                alert_api_missing: "API Key belum diset!",
                alert_act_name_missing: "Mohon isi nama aktivitas terlebih dahulu.",
                status_finding_met: "Mencari MET...",
                alert_met_fail: "Gagal mencari MET: ",
                alert_food_inc: "Nama makanan dan Kalori wajib diisi.",
                alert_food_name_missing: "Mohon isi nama makanan terlebih dahulu.",
                status_calc: "Sedang menghitung...",
                alert_nut_fail: "Gagal memprediksi gizi: ",
                status_identifying: "🤖 AI sedang mengidentifikasi makanan...",
                alert_scan_success: "Berhasil scan: ",
                alert_scan_fail: "Gagal scan: ",
                confirm_del: "Hapus item ini?",
                status_surplus: "SURPLUS (NAIK BERAT)",
                status_deficit: "DEFISIT (TURUN BERAT)",
                status_maint: "MAINTENANCE (SEIMBANG)",
                status_analyzing: "AI sedang menganalisa data harianmu...",
                err_analysis: "Gagal analisa: ",
                alert_api_saved: "API Key tersimpan!",
                alert_api_empty: "API Key tidak boleh kosong.",
                status_typing: "Sedang mengetik...",
                chat_sorry: "Maaf, saya tidak dapat menjawab saat ini.",
                chat_err: "Terjadi kesalahan: ",
                modal_edit_title: "Edit Item",
                btn_cancel: "Batal",
                btn_update: "Update",
                modal_settings_title: "Pengaturan",
                modal_settings_desc: "Pengaturan API Key dan Manajemen Data.",
                btn_guide: "📖 Cara Mendapatkan API Key Gratis",
                guide_step_0: "Anda bisa mendapatkan API Key Gemini secara gratis dari Google AI Studio untuk penggunaan pribadi.",
                guide_step_1: "Kunjungi situs <a href='https://aistudio.google.com/' target='_blank' class='text-primary font-bold hover:underline'>Google AI Studio</a>.",
                guide_step_2: "Login dengan akun Google Anda.",
                guide_step_3: "Klik tombol <strong>'Get API key'</strong> di pojok kiri atas.",
                guide_step_4: "Pilih <strong>'Create API key in new project'</strong>.",
                guide_step_5: "Salin (copy) API Key yang muncul dan tempel (paste) di kolom di atas.",
                sect_data: "Manajemen Data",
                btn_export: "Export Data (.bcal)",
                btn_import: "Import Data (.bcal)",
                alert_export_success: "Data berhasil diexport!",
                alert_import_success: "Data berhasil diimport! Halaman akan direfresh.",
                alert_import_fail: "Gagal import data: ",
                confirm_overwrite: "Import akan menimpa semua data yang ada saat ini. Lanjutkan?",
                btn_history: "Riwayat",
                modal_history_title: "Riwayat Data",
                th_date: "Tanggal",
                th_in: "Masuk",
                th_out: "Keluar",
                th_net: "Net",
                btn_open: "Buka",
                btn_delete_day: "Hapus",
                confirm_delete_day: "Hapus data tanggal ini permanen?"
            },
            en: {
                title: "Daily Calorie Tracker",
                subtitle: "Tracking: Calorie In vs Calorie Out",
                nav_home: "🏠 Home",
                nav_know: "📚 Knowledge Base",
                nav_total: "🔥 Total Calories",
                sect_profile: "📅 Date & Profile",
                ph_name: "Your Name",
                ph_age: "Age (yo)",
                ph_weight: "Weight (kg)",
                ph_height: "Height (cm)",
                val_male: "👨 Male",
                val_female: "👩 Female",
                note_profile: "*Data required to calculate BMR (Basal Metabolic Rate)",
                sect_out: "🔥 Calorie Out (Activity)",
                lbl_act_type: "Select Activity Type",
                opt_work_routine: "Work / Routine",
                opt_work_in: "🏢 Indoor Work (Sedentary)",
                opt_work_out: "🏗️ Outdoor Work (Active)",
                opt_sport: "Sports",
                opt_pingpong_cas: "🏓 Ping Pong (Casual)",
                opt_pingpong_comp: "🏆 Ping Pong (Competitive)",
                opt_jogging: "🏃 Jogging",
                opt_walk_leisure: "🚶 Leisure Walk (4 km/h)",
                opt_walk_brisk: "👟 Brisk Walk (6.4 km/h)",
                opt_gym: "🏋️ Gym / Weightlifting",
                opt_aerobic: "🤸 Aerobics",
                opt_badminton: "🏸 Badminton",
                opt_cycling: "🚴 Cycling",
                opt_martial: "🥋 Martial Arts",
                opt_custom: "✨ Others (Custom)",
                ph_act_name: "Activity Name",
                ph_act_met: "Est. MET (1-10)",
                btn_find_met: "✨ Find MET Value (AI)",
                ph_duration: "Minutes",
                btn_add_act: "➕ Add Activity",
                sect_in: "🥗 Calorie In (Food)",
                tab_manual: "Manual Input",
                tab_scan: "AI Scanner",
                ph_food_name: "Food Name (e.g. Fried Rice)",
                ph_portion: "Portion (1 plate)",
                ph_cal: "Calories (kcal)",
                btn_est_nut: "✨ Estimate Nutrition (AI)",
                ph_carb: "Carbs (g)",
                ph_prot: "Protein (g)",
                ph_fat: "Fat (g)",
                btn_add_food: "Add Food",
                btn_cam: "Take Photo",
                btn_upload: "Upload",
                txt_analyzing: "Analyzing image...",
                sect_recap: "📊 Daily Recap",
                lbl_in: "In (Food)",
                lbl_out: "Out (Activity + BMR)",
                empty_food: "No food recorded yet.",
                empty_act: "No activity recorded yet.",
                lbl_bmr: "BMR",
                lbl_bmr_desc: "Basal Metabolism",
                lbl_net: "Net Calories",
                lbl_net_desc: "(In - Out)",
                status_bal: "Balanced",
                btn_analyze: "🤖 Expert AI Analysis",
                expert_btn: "Ask Health Expert",
                expert_name: "Dr. AI Expert",
                expert_role: "Nutrition & Sports Expert",
                chat_welcome: "Hello! I am a health expert with decades of experience. How can I help you with nutrition, exercise, or body health?",
                ph_chat: "Type your question...",
                modal_api_title: "API Key Settings",
                ph_api: "Enter Gemini API Key",
                btn_save: "Save",
                alert_db_fail: "Failed to load database (IndexedDB). History will not be saved. Error: ",
                alert_profile_inc: "Please complete profile data (Weight, Height, Age) to calculate burned calories.",
                alert_act_inc: "Activity data incomplete.",
                alert_api_missing: "API Key not set!",
                alert_act_name_missing: "Please enter activity name first.",
                status_finding_met: "Finding MET...",
                alert_met_fail: "Failed to find MET: ",
                alert_food_inc: "Food name and Calories are required.",
                alert_food_name_missing: "Please enter food name first.",
                status_calc: "Calculating...",
                alert_nut_fail: "Failed to predict nutrition: ",
                status_identifying: "🤖 AI is identifying food...",
                alert_scan_success: "Scan successful: ",
                alert_scan_fail: "Scan failed: ",
                confirm_del: "Delete this item?",
                status_surplus: "SURPLUS (WEIGHT GAIN)",
                status_deficit: "DEFICIT (WEIGHT LOSS)",
                status_maint: "MAINTENANCE (BALANCED)",
                status_analyzing: "AI is analyzing your daily data...",
                err_analysis: "Analysis failed: ",
                alert_api_saved: "API Key saved!",
                alert_api_empty: "API Key cannot be empty.",
                status_typing: "Typing...",
                chat_sorry: "Sorry, I cannot answer right now.",
                chat_err: "An error occurred: ",
                modal_edit_title: "Edit Item",
                btn_cancel: "Cancel",
                btn_update: "Update",
                modal_settings_title: "Settings",
                modal_settings_desc: "API Key Settings and Data Management.",
                btn_guide: "📖 How to Get Free API Key",
                guide_step_0: "You can get a Gemini API Key for free from Google AI Studio for personal use.",
                guide_step_1: "Visit <a href='https://aistudio.google.com/' target='_blank' class='text-primary font-bold hover:underline'>Google AI Studio</a>.",
                guide_step_2: "Login with your Google account.",
                guide_step_3: "Click the <strong>'Get API key'</strong> button in the top left corner.",
                guide_step_4: "Select <strong>'Create API key in new project'</strong>.",
                guide_step_5: "Copy the API Key and paste it in the field above.",
                sect_data: "Data Management",
                btn_export: "Export Data (.bcal)",
                btn_import: "Import Data (.bcal)",
                alert_export_success: "Data exported successfully!",
                alert_import_success: "Data imported successfully! Refreshing page.",
                alert_import_fail: "Failed to import data: ",
                confirm_overwrite: "Importing will overwrite all current data. Continue?",
                btn_history: "History",
                modal_history_title: "Data History",
                th_date: "Date",
                th_in: "In",
                th_out: "Out",
                th_net: "Net",
                btn_open: "Open",
                btn_delete_day: "Delete",
                confirm_delete_day: "Permanently delete this day's data?"
            }
        };

        const DB_NAME = "CalorieTrackerDB"; const DB_VERSION = 1; const STORE_LOGS = "daily_logs"; const STORE_PROFILE = "user_profile";
        let db;

        let currentDate = new Date().toISOString().slice(0, 10);
        let userProfile = { name: "", age: "", weight: "", height: "", gender: "male" };
        let currentLog = { date: currentDate, food: [], activity: [] };
        let currentLang = localStorage.getItem("lang") || "id";

        // Define functions globally immediately so onclicks are safe even if DB init fails
        window.toggleActivityInput = toggleActivityInput;
        window.addActivity = addActivity;
        window.setFoodMode = setFoodMode;
        window.addFoodManual = addFoodManual;
        window.handleFoodScan = handleFoodScan;
        window.generateDailyAnalysis = generateDailyAnalysis;
        window.saveApiKey = saveApiKey;
        window.deleteItem = deleteItem;
        window.editItem = editItem;
        window.saveEdit = saveEdit;
        window.recalcEditModal = recalcEditModal;
        window.predictNutrition = predictNutrition;
        window.predictActivityMET = predictActivityMET;
        window.toggleExpertChat = toggleExpertChat;
        window.handleChatEnter = handleChatEnter;
        window.sendChatMessage = sendChatMessage;
        window.toggleApiGuide = toggleApiGuide;
        window.exportData = exportData;
        window.importData = importData;
        window.openHistory = openHistory;
        window.loadHistoryDate = loadHistoryDate;
        window.deleteDayLog = deleteDayLog;

        document.addEventListener("DOMContentLoaded", async () => {
            // 1. UI Initialization (Theme, Listeners) - MUST RUN FIRST
            try {
                if(localStorage.getItem("theme") === "dark") document.documentElement.classList.add("dark");

                document.getElementById("themeToggle").addEventListener("click", () => {
                    document.documentElement.classList.toggle("dark");
                    localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
                });

                // --- LANGUAGE LOGIC ---
                document.getElementById("langToggle").addEventListener("click", () => {
                    currentLang = currentLang === "id" ? "en" : "id";
                    localStorage.setItem("lang", currentLang);
                    updateLanguage();
                    renderSummary(); // To update status text
                    renderLists(); // To update empty messages
                });

                document.getElementById("settingsBtn").addEventListener("click", () => {
                    document.getElementById("geminiApiModal").classList.remove("hidden");
                    document.getElementById("geminiApiKey").value = localStorage.getItem("geminiApiKey") || "";
                });

                const datePicker = document.getElementById("datePicker");
                datePicker.value = currentDate;
                document.getElementById("displayDate").innerText = formatDateFriendly(currentDate);

                datePicker.addEventListener("change", (e) => {
                    currentDate = e.target.value;
                    document.getElementById("displayDate").innerText = formatDateFriendly(currentDate);
                    loadLogForDate(currentDate);
                });

                ["userName", "age", "weight", "height", "gender"].forEach(id => {
                    document.getElementById(id).addEventListener("input", updateProfile);
                });

                // Apply initial language
                updateLanguage();

            } catch(e) { console.error("UI Init Error:", e); }

            // 2. Data Initialization (IndexedDB) - Wrapped in Try/Catch
            try {
                await initDB();
                const savedProfile = await dbOps.getProfile();
                if(savedProfile) { userProfile = savedProfile; populateProfileForm(); }
                await loadLogForDate(currentDate);
            } catch(e) {
                console.error("DB Init Error:", e);
                const T = translations[currentLang];
                alert(T.alert_db_fail + e);
            }
        });

        function updateLanguage() {
            const T = translations[currentLang];
            const btn = document.getElementById("langToggle");
            btn.innerText = currentLang.toUpperCase();

            // Text
            document.querySelectorAll("[data-i18n]").forEach(el => {
                const key = el.getAttribute("data-i18n");
                if(T[key]) {
                    if(el.tagName === 'OPTGROUP') {
                        el.label = T[key];
                    } else {
                        el.innerText = T[key];
                    }
                }
            });

            // Placeholders
            document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
                const key = el.getAttribute("data-i18n-placeholder");
                if(T[key]) el.placeholder = T[key];
            });

            // Update Date
            document.getElementById("displayDate").innerText = formatDateFriendly(currentDate);
        }

        const initDB = () => new Promise((resolve, reject) => {
            try {
                const request = indexedDB.open(DB_NAME, DB_VERSION);
                request.onupgradeneeded = (e) => {
                    db = e.target.result;
                    if (!db.objectStoreNames.contains(STORE_LOGS)) db.createObjectStore(STORE_LOGS, { keyPath: "date" });
                    if (!db.objectStoreNames.contains(STORE_PROFILE)) db.createObjectStore(STORE_PROFILE, { keyPath: "id" });
                };
                request.onsuccess = (e) => { db = e.target.result; resolve(db); };
                request.onerror = (e) => reject(e.target.error || "DB Error");
            } catch(e) {
                reject(e);
            }
        });

        const dbOps = {
            async getProfile() {
                if(!db) try { await initDB(); } catch(e) { return null; }
                if(!db) return null;
                return new Promise(resolve => { const tx = db.transaction(STORE_PROFILE, "readonly"); const req = tx.objectStore(STORE_PROFILE).get("main_user"); req.onsuccess = () => resolve(req.result || null); req.onerror = () => resolve(null); });
            },
            async saveProfile(data) {
                if(!db) try { await initDB(); } catch(e) { console.warn("Save failed, no DB"); return; }
                if(!db) return;
                const tx = db.transaction(STORE_PROFILE, "readwrite"); data.id = "main_user"; tx.objectStore(STORE_PROFILE).put(data);
            },
            async getLog(dateStr) {
                if(!db) try { await initDB(); } catch(e) { return { date: dateStr, food: [], activity: [] }; }
                if(!db) return { date: dateStr, food: [], activity: [] };
                return new Promise(resolve => { const tx = db.transaction(STORE_LOGS, "readonly"); const req = tx.objectStore(STORE_LOGS).get(dateStr); req.onsuccess = () => resolve(req.result || { date: dateStr, food: [], activity: [] }); });
            },
            async saveLog(data) {
                if(!db) try { await initDB(); } catch(e) { console.warn("Save log failed, no DB"); return; }
                if(!db) return;
                const tx = db.transaction(STORE_LOGS, "readwrite"); tx.objectStore(STORE_LOGS).put(data);
            },
            async deleteLog(dateStr) {
                if(!db) try { await initDB(); } catch(e) { return; }
                if(!db) return;
                const tx = db.transaction(STORE_LOGS, "readwrite"); tx.objectStore(STORE_LOGS).delete(dateStr);
            },
            async getAllLogs() {
                if(!db) try { await initDB(); } catch(e) { return []; }
                return new Promise(resolve => { const tx = db.transaction(STORE_LOGS, "readonly"); const req = tx.objectStore(STORE_LOGS).getAll(); req.onsuccess = () => resolve(req.result || []); });
            },
            async clearAll() {
                if(!db) return;
                return new Promise((resolve, reject) => {
                    const tx = db.transaction([STORE_LOGS, STORE_PROFILE], "readwrite");
                    tx.objectStore(STORE_LOGS).clear();
                    tx.objectStore(STORE_PROFILE).clear();
                    tx.oncomplete = () => resolve();
                    tx.onerror = () => reject();
                });
            }
        };

        window.dbOps = dbOps;

        function formatDateFriendly(dateStr) {
            const date = new Date(dateStr);
            const locale = currentLang === "id" ? "id-ID" : "en-US";
            return date.toLocaleDateString(locale, { weekday: "long", day: "numeric", month: "long" });
        }
        function populateProfileForm() { document.getElementById("userName").value = userProfile.name || ""; document.getElementById("age").value = userProfile.age || ""; document.getElementById("weight").value = userProfile.weight || ""; document.getElementById("height").value = userProfile.height || ""; document.getElementById("gender").value = userProfile.gender || "male"; }
        async function updateProfile() {
            userProfile = { name: document.getElementById("userName").value, age: document.getElementById("age").value, weight: document.getElementById("weight").value, height: document.getElementById("height").value, gender: document.getElementById("gender").value };
            await dbOps.saveProfile(userProfile);
            renderSummary();
        }
        async function loadLogForDate(date) {
            currentLog = await dbOps.getLog(date);
            if(!currentLog.food) currentLog.food = [];
            if(!currentLog.activity) currentLog.activity = [];
            renderLists();
            renderSummary();
        }
        function toggleActivityInput() { const val = document.getElementById("activityType").value; const customDiv = document.getElementById("customActivityContainer"); if(val === "custom") customDiv.classList.remove("hidden"); else customDiv.classList.add("hidden"); customDiv.style.display = val === "custom" ? "grid" : "none"; }
        function calculateBMR() {
            const w = parseFloat(userProfile.weight) || parseFloat(document.getElementById('weight').value);
            const h = parseFloat(userProfile.height) || parseFloat(document.getElementById('height').value);
            const a = parseInt(userProfile.age) || parseInt(document.getElementById('age').value);
            const g = userProfile.gender || document.getElementById('gender').value;

            if(!w || !h || !a) return 0;

            let bmr = (10 * w) + (6.25 * h) - (5 * a);
            if(g === "male") bmr += 5; else bmr -= 161;
            return Math.round(bmr);
        }

        async function addActivity() {
            const T = translations[currentLang];
            await updateProfile();
            const bmr = calculateBMR();
            if(bmr === 0) { alert(T.alert_profile_inc); return; }
            const typeSelect = document.getElementById("activityType"); let met = 0; let name = "";
            if(typeSelect.value === "custom") { name = document.getElementById("customActName").value; met = parseFloat(document.getElementById("customActMet").value); } else if (typeSelect.value === "work_indoor") { name = T.opt_work_in.replace(/^[^\w\s]+/, "").trim(); met = 1.5; } else if (typeSelect.value === "work_outdoor") { name = T.opt_work_out.replace(/^[^\w\s]+/, "").trim(); met = 4.0; } else { met = parseFloat(typeSelect.value); name = typeSelect.options[typeSelect.selectedIndex].text.replace(/^[^\w\s]+/, "").trim(); }
            const duration = parseFloat(document.getElementById("actDuration").value); if(!name || !met || !duration) { alert(T.alert_act_inc); return; }
            const burned = Math.round(met * (bmr / 24) * (duration / 60));
            currentLog.activity.push({ id: Date.now(), name, met, duration, calories: burned }); await dbOps.saveLog(currentLog); renderLists(); renderSummary();
            document.getElementById("actDuration").value = ""; document.getElementById("customActName").value = ""; document.getElementById("customActMet").value = "";
        }
        async function predictActivityMET() {
            const T = translations[currentLang];
            const apiKey = localStorage.getItem("geminiApiKey"); if(!apiKey) { alert(T.alert_api_missing); document.getElementById("geminiApiModal").classList.remove("hidden"); return; }
            const name = document.getElementById("customActName").value;
            if(!name) { alert(T.alert_act_name_missing); return; }

            const btn = document.getElementById("btnPredictMET");
            const originalText = btn.innerHTML;
            btn.innerHTML = `<span class='typing-dot'>●</span> ${T.status_finding_met}`; btn.disabled = true;

            try {
                // Modified Prompt for Language
                const langPrompt = currentLang === "id" ? "" : "Respond in English.";
                const prompt = `Estimasikan nilai MET (Metabolic Equivalent of Task) standar untuk aktivitas: "${name}". ${langPrompt} Output WAJIB JSON valid: { "met": number }. Contoh: { "met": 3.5 }. Jangan pakai markdown.`;
                const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }) });
                const json = await res.json();

                if (json.error) throw new Error(json.error.message);
                if (!json.candidates || !json.candidates.length) throw new Error("No candidates returned from AI.");

                let text = json.candidates[0].content.parts[0].text;
                const jsonMatch = text.match(/\{[\s\S]*\}/);
                if(jsonMatch) text = jsonMatch[0];
                const data = JSON.parse(text);

                document.getElementById("customActMet").value = data.met || 0;
            } catch(e) {
                alert(T.alert_met_fail + e.message);
            } finally {
                btn.innerHTML = originalText; btn.disabled = false;
            }
        }
        function setFoodMode(mode) {
            const manual = document.getElementById("foodManualForm"); const scan = document.getElementById("foodScanForm"); const tabM = document.getElementById("tabManual"); const tabS = document.getElementById("tabScan");
            if(mode === "manual") { manual.classList.remove("hidden"); scan.classList.add("hidden"); tabM.classList.replace("text-gray-500", "text-gray-800"); tabM.classList.add("bg-white", "shadow"); tabS.classList.replace("bg-white", "text-gray-500"); tabS.classList.remove("shadow"); } else { manual.classList.add("hidden"); scan.classList.remove("hidden"); tabS.classList.replace("text-gray-500", "text-gray-800"); tabS.classList.add("bg-white", "shadow"); tabM.classList.replace("bg-white", "text-gray-500"); tabM.classList.remove("shadow"); }
        }
        async function addFoodManual() {
            const T = translations[currentLang];
            const name = document.getElementById("foodName").value; const portion = document.getElementById("foodPortion").value || "-"; const cal = parseFloat(document.getElementById("foodCal").value); const p = document.getElementById("foodProt").value || "-"; const c = document.getElementById("foodCarb").value || "-"; const f = document.getElementById("foodFat").value || "-";
            if(!name || !cal) { alert(T.alert_food_inc); return; }
            currentLog.food.push({ id: Date.now(), name, portion, calories: cal, macros: { p, c, f } }); await dbOps.saveLog(currentLog); renderLists(); renderSummary();
            document.getElementById("foodName").value = ""; document.getElementById("foodCal").value = ""; document.getElementById("foodPortion").value = ""; document.getElementById("foodProt").value = ""; document.getElementById("foodCarb").value = ""; document.getElementById("foodFat").value = "";
        }
        async function predictNutrition() {
            const T = translations[currentLang];
            const apiKey = localStorage.getItem("geminiApiKey"); if(!apiKey) { alert(T.alert_api_missing); document.getElementById("geminiApiModal").classList.remove("hidden"); return; }
            const name = document.getElementById("foodName").value;
            const portion = document.getElementById("foodPortion").value || "1 porsi";
            if(!name) { alert(T.alert_food_name_missing); return; }

            const btn = document.getElementById("btnPredict");
            const originalText = btn.innerHTML;
            btn.innerHTML = `<span class='typing-dot'>●</span> ${T.status_calc}`; btn.disabled = true;

            try {
                // Modified Prompt
                const langPrompt = currentLang === "id" ? "" : "Respond in English.";
                const prompt = `Estimasikan kalori dan makro untuk makanan: "${name}" dengan porsi "${portion}". ${langPrompt} Output WAJIB JSON valid: { "calories": number, "protein": number, "carbs": number, "fat": number }. Jangan pakai markdown.`;
                const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }) });
                const json = await res.json();

                if (json.error) throw new Error(json.error.message);
                if (!json.candidates || !json.candidates.length) throw new Error("No candidates returned from AI.");

                let text = json.candidates[0].content.parts[0].text;
                const jsonMatch = text.match(/\{[\s\S]*\}/);
                if(jsonMatch) text = jsonMatch[0];
                const data = JSON.parse(text);

                document.getElementById("foodCal").value = data.calories || 0;
                document.getElementById("foodProt").value = data.protein || 0;
                document.getElementById("foodCarb").value = data.carbs || 0;
                document.getElementById("foodFat").value = data.fat || 0;
            } catch(e) {
                alert(T.alert_nut_fail + e.message);
            } finally {
                btn.innerHTML = originalText; btn.disabled = false;
            }
        }
        async function handleFoodScan(event) {
            const T = translations[currentLang];
            const apiKey = localStorage.getItem("geminiApiKey"); if(!apiKey) { alert(T.alert_api_missing); document.getElementById("geminiApiModal").classList.remove("hidden"); return; }
            const file = event.target.files[0]; if(!file) return;
            const preview = document.getElementById("scanPreview"); preview.classList.remove("hidden");
            // Show loading initially
            preview.innerHTML = `<p class='text-xs text-center text-gray-500 animate-pulse mt-2'>${T.txt_analyzing}</p>`;

            const reader = new FileReader();
            reader.onload = async (e) => {
                const img = new Image();
                img.onload = async () => {
                    // Display the image
                    preview.innerHTML = `<img src="${e.target.result}" class="w-full max-h-48 object-cover rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm mb-3"><p class='text-xs text-center text-gray-500 animate-pulse'>${T.status_identifying}</p>`;

                    const canvas = document.createElement("canvas"); const MAX = 800; let w = img.width, h = img.height; if(w > MAX) { h *= MAX/w; w = MAX; } canvas.width = w; canvas.height = h; const ctx = canvas.getContext("2d"); ctx.drawImage(img, 0, 0, w, h); const base64 = canvas.toDataURL("image/jpeg", 0.8).split(",")[1];
                    try {
                        const langPrompt = currentLang === "id" ? "" : "Respond in English. Identify: Food Name, Portion Estimate, Total Calories, Macros. If not food, return error.";
                        const prompt = `Analisa gambar makanan ini. Identifikasi: Nama, Estimasi Porsi, Estimasi Kalori Total, dan Makro (Protein, Karbo, Lemak). ${langPrompt} Output WAJIB JSON valid: { "name": "string", "portion": "string", "calories": number, "protein": number, "carbs": number, "fat": number } Jika bukan makanan, return { "error": "Bukan makanan" }. Jangan pakai markdown.`;
                        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({ contents: [{ parts: [{text: prompt}, {inline_data: {mime_type: "image/jpeg", data: base64}}] }] }) });
                        const json = await res.json();

                        if (json.error) throw new Error(json.error.message);
                        if (!json.candidates || !json.candidates.length) throw new Error("No candidates returned from AI.");

                        let text = json.candidates[0].content.parts[0].text;
                        const jsonMatch = text.match(/\{[\s\S]*\}/);
                        if(jsonMatch) text = jsonMatch[0];
                        const data = JSON.parse(text);
                        if(data.error) throw new Error(data.error);
                        currentLog.food.push({ id: Date.now(), name: data.name, portion: data.portion, calories: data.calories, macros: { p: data.protein, c: data.carbs, f: data.fat } }); await dbOps.saveLog(currentLog); renderLists(); renderSummary(); preview.classList.add("hidden"); alert(`${T.alert_scan_success}${data.name} (${data.calories} kkal)`);
                    } catch(err) { alert(T.alert_scan_fail + err.message); preview.classList.add("hidden"); }
                }; img.src = e.target.result;
            }; reader.readAsDataURL(file); event.target.value = "";
        }
        function renderLists() {
            const T = translations[currentLang];
            const foodList = document.getElementById("foodList"); const actList = document.getElementById("activityList");
            if(currentLog.food.length === 0) foodList.innerHTML = `<p class='text-xs text-center text-gray-400 py-4 italic'>${T.empty_food}</p>`;
            else foodList.innerHTML = currentLog.food.map(item => {
                const mac = item.macros || {p:'-', c:'-', f:'-'};
                return `<div class="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm flex justify-between items-center group"><div><p class="font-bold text-sm text-gray-800 dark:text-gray-200">${item.name}</p><p class="text-[10px] text-gray-500">${item.portion} • P:${mac.p}g C:${mac.c}g F:${mac.f}g</p></div><div class="text-right flex items-center gap-2"><span class="font-bold text-green-600 dark:text-green-400 text-sm mr-2">${item.calories} kkal</span><button onclick="editItem('food', ${item.id})" class="text-gray-300 hover:text-blue-500 transition">✎</button><button onclick="deleteItem('food', ${item.id})" class="text-gray-300 hover:text-red-500 transition">✕</button></div></div>`;
            }).join("");
            if(currentLog.activity.length === 0) actList.innerHTML = `<p class='text-xs text-center text-gray-400 py-4 italic'>${T.empty_act}</p>`;
            else actList.innerHTML = currentLog.activity.map(item => `<div class="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm flex justify-between items-center group"><div><p class="font-bold text-sm text-gray-800 dark:text-gray-200">${item.name}</p><p class="text-[10px] text-gray-500">${item.duration} menit • MET ${item.met}</p></div><div class="text-right flex items-center gap-2"><span class="font-bold text-orange-600 dark:text-orange-400 text-sm mr-2">-${item.calories} kkal</span><button onclick="editItem('activity', ${item.id})" class="text-gray-300 hover:text-blue-500 transition">✎</button><button onclick="deleteItem('activity', ${item.id})" class="text-gray-300 hover:text-red-500 transition">✕</button></div></div>`).join("");
        }

        let editTarget = null; // { type: 'food'|'activity', id: number }

        function editItem(type, id) {
            editTarget = { type, id };
            const item = type === 'food'
                ? currentLog.food.find(i => i.id === id)
                : currentLog.activity.find(i => i.id === id);

            if(!item) return;

            // Populate Form
            document.getElementById('editItemName').value = item.name;
            document.getElementById('editItemCal').value = item.calories;

            // Ensure calorie field is editable
            const calInput = document.getElementById('editItemCal');
            calInput.readOnly = false;
            calInput.classList.remove('bg-gray-100', 'text-gray-500');

            const foodFields = document.getElementById('editFoodFields');
            const actFields = document.getElementById('editActFields');

            if (type === 'food') {
                foodFields.classList.remove('hidden');
                actFields.classList.add('hidden');
                const mac = item.macros || {};
                document.getElementById('editItemPortion').value = item.portion || "";
                document.getElementById('editItemProt').value = mac.p || "";
                document.getElementById('editItemCarb').value = mac.c || "";
                document.getElementById('editItemFat').value = mac.f || "";
            } else {
                foodFields.classList.add('hidden');
                actFields.classList.remove('hidden');
                document.getElementById('editItemDuration').value = item.duration || "";
                document.getElementById('editItemMet').value = item.met || "";
            }

            document.getElementById('editItemModal').classList.remove('hidden');
        }

        function recalcEditModal() {
            const duration = parseFloat(document.getElementById('editItemDuration').value) || 0;
            const met = parseFloat(document.getElementById('editItemMet').value) || 0;
            const bmr = calculateBMR();
            const burned = Math.round(met * (bmr / 24) * (duration / 60));
            document.getElementById('editItemCal').value = burned;
        }

        async function saveEdit() {
            if(!editTarget) return;
            const name = document.getElementById('editItemName').value;
            const cal = parseFloat(document.getElementById('editItemCal').value) || 0;

            if (editTarget.type === 'food') {
                const portion = document.getElementById('editItemPortion').value;
                const p = parseFloat(document.getElementById('editItemProt').value) || 0;
                const c = parseFloat(document.getElementById('editItemCarb').value) || 0;
                const f = parseFloat(document.getElementById('editItemFat').value) || 0;

                const idx = currentLog.food.findIndex(i => i.id === editTarget.id);
                if(idx !== -1) {
                    currentLog.food[idx] = { ...currentLog.food[idx], name, calories: cal, portion, macros: { p, c, f } };
                }
            } else {
                const duration = parseFloat(document.getElementById('editItemDuration').value) || 0;
                const met = parseFloat(document.getElementById('editItemMet').value) || 0;

                const idx = currentLog.activity.findIndex(i => i.id === editTarget.id);
                if(idx !== -1) {
                    // Use 'cal' (manual input) instead of recalculating
                    currentLog.activity[idx] = { ...currentLog.activity[idx], name, calories: cal, duration, met };
                }
            }

            await dbOps.saveLog(currentLog);
            renderLists();
            renderSummary();
            document.getElementById('editItemModal').classList.add('hidden');
            editTarget = null;
        }

        async function deleteItem(type, id) {
            const T = translations[currentLang];
            if(!confirm(T.confirm_del)) return;
            if(type === "food") currentLog.food = currentLog.food.filter(i => i.id !== id); else currentLog.activity = currentLog.activity.filter(i => i.id !== id); await dbOps.saveLog(currentLog); renderLists(); renderSummary();
        }
        function renderSummary() {
            const T = translations[currentLang];
            const locale = currentLang === "id" ? "id-ID" : "en-US";
            const totalFood = currentLog.food.reduce((sum, i) => sum + i.calories, 0); const totalActivity = currentLog.activity.reduce((sum, i) => sum + i.calories, 0); const bmr = calculateBMR(); const totalOut = totalActivity + bmr; const net = totalFood - totalOut;
            document.getElementById("totalFoodCal").innerText = totalFood.toLocaleString(locale) + " kkal"; document.getElementById("totalBurnCal").innerText = totalOut.toLocaleString(locale) + " kkal"; document.getElementById("dailyBmrVal").innerText = bmr.toLocaleString(locale) + " kkal";
            const netEl = document.getElementById("netCalVal"); const statusEl = document.getElementById("netCalStatus"); netEl.innerText = (net > 0 ? "+" : "") + net.toLocaleString(locale);
            if(net > 200) { netEl.className = "text-4xl font-black text-red-500"; statusEl.innerText = T.status_surplus; statusEl.className = "text-xs font-bold uppercase tracking-widest text-red-500"; }
            else if (net < -200) { netEl.className = "text-4xl font-black text-yellow-500"; statusEl.innerText = T.status_deficit; statusEl.className = "text-xs font-bold uppercase tracking-widest text-yellow-500"; }
            else { netEl.className = "text-4xl font-black text-green-500"; statusEl.innerText = T.status_maint; statusEl.className = "text-xs font-bold uppercase tracking-widest text-green-500"; }
            document.getElementById("dailyAnalysisResult").classList.add("hidden");
        }
        async function generateDailyAnalysis() {
            const T = translations[currentLang];
            const apiKey = localStorage.getItem("geminiApiKey"); if(!apiKey) { alert(T.alert_api_missing); return; }
            const totalFood = currentLog.food.reduce((sum, i) => sum + i.calories, 0); const totalAct = currentLog.activity.reduce((sum, i) => sum + i.calories, 0); const bmr = calculateBMR(); const totalOut = bmr + totalAct; const net = totalFood - totalOut;
            const resDiv = document.getElementById("dailyAnalysisResult"); resDiv.classList.remove("hidden"); resDiv.innerHTML = `<div class='flex gap-2'><div class='w-2 h-2 bg-indigo-500 rounded-full typing-dot'></div><span class='italic text-gray-500'>${T.status_analyzing}</span></div>`;

            // Modified Prompt
            const langInstruction = currentLang === "id"
                ? "Jawab dalam Bahasa Indonesia. Berikan analisa singkat dan saran kesehatan, gizi, dan olahraga dalam format HTML (gunakan <ul>, <li>, <strong>, <p>)."
                : "Answer in English. Provide a short analysis and health, nutrition, and exercise advice in HTML format (use <ul>, <li>, <strong>, <p>).";

            const prompt = `Saya adalah ${userProfile.gender}, ${userProfile.age} tahun, berat ${userProfile.weight}kg. Hari ini: - Makan Total: ${totalFood} kkal. Detail: ${currentLog.food.map(f=>f.name).join(", ")}. - Aktivitas Total: ${totalAct} kkal (ditambah BMR ${bmr} kkal = Total Out ${totalOut}). Detail: ${currentLog.activity.map(a=>a.name).join(", ")}. - Net Kalori: ${net} kkal. ${langInstruction} Jangan gunakan tag <div>, jangan gunakan style css atau class. Jangan markdown. Fokus pada apakah surplus/defisit ini baik untuk kesehatan saya.`;
            try {
                const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }) });
                const json = await res.json();

                if (json.error) throw new Error(json.error.message);
                if (!json.candidates || !json.candidates.length) throw new Error("No candidates returned from AI.");

                let text = json.candidates[0].content.parts[0].text.replace(/```html/g, "").replace(/```/g, "").trim(); resDiv.innerHTML = text;
            } catch(e) { resDiv.innerHTML = `<p class="text-red-500">${T.err_analysis}${e.message}</p>`; }
        }

        function saveApiKey() {
            const T = translations[currentLang];
            const key = document.getElementById("geminiApiKey").value;
            if(key) {
                localStorage.setItem("geminiApiKey", key);
                document.getElementById("geminiApiModal").classList.add("hidden");
                alert(T.alert_api_saved);
            } else {
                alert(T.alert_api_empty);
            }
        }

        function toggleApiGuide() {
            const content = document.getElementById('apiGuideContent');
            const icon = document.getElementById('apiGuideIcon');
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.classList.add('rotate-180');
            } else {
                content.classList.add('hidden');
                icon.classList.remove('rotate-180');
            }
        }

        async function exportData() {
            const T = translations[currentLang];
            try {
                const profile = await dbOps.getProfile();
                const logs = await dbOps.getAllLogs();

                const data = {
                    version: 1,
                    timestamp: new Date().toISOString(),
                    profile: profile,
                    logs: logs
                };

                const json = JSON.stringify(data, null, 2);
                const blob = new Blob([json], { type: "application/json" });
                const url = URL.createObjectURL(blob);

                const name = profile && profile.name ? profile.name.replace(/[^a-zA-Z0-9]/g, "_") : "user";
                const date = new Date();
                const day = String(date.getDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const year = date.getFullYear();

                const a = document.createElement("a");
                a.href = url;
                a.download = `${name}-totalkalori-${day}${month}${year}.bcal`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);

                alert(T.alert_export_success);
            } catch(e) {
                alert("Export Failed: " + e.message);
            }
        }

        async function importData(input) {
            const T = translations[currentLang];
            if (!input.files || !input.files[0]) return;

            if(!confirm(T.confirm_overwrite)) {
                input.value = "";
                return;
            }

            const file = input.files[0];
            const reader = new FileReader();

            reader.onload = async (e) => {
                try {
                    const data = JSON.parse(e.target.result);

                    if (!data.logs) throw new Error("Invalid format");

                    await dbOps.clearAll();

                    // Restore Profile
                    if (data.profile) await dbOps.saveProfile(data.profile);

                    // Restore Logs
                    if (data.logs && Array.isArray(data.logs)) {
                        for (const log of data.logs) {
                            await dbOps.saveLog(log);
                        }
                    }

                    alert(T.alert_import_success);
                    location.reload();
                } catch(err) {
                    alert(T.alert_import_fail + err.message);
                }
            };

            reader.readAsText(file);
            input.value = "";
        }

        async function openHistory() {
            const list = document.getElementById('historyList');
            const empty = document.getElementById('emptyHistory');
            const T = translations[currentLang];

            list.innerHTML = `<tr><td colspan="5" class="p-4 text-center"><div class='typing-dot'>●</div> Loading...</td></tr>`;
            document.getElementById('historyModal').classList.remove('hidden');

            const logs = await dbOps.getAllLogs();
            // Sort by date desc
            logs.sort((a, b) => new Date(b.date) - new Date(a.date));

            if (logs.length === 0) {
                list.innerHTML = '';
                empty.classList.remove('hidden');
                return;
            }
            empty.classList.add('hidden');

            const profile = await dbOps.getProfile();
            // BMR calculation needed for recalculating BMR per day?
            // Ideally BMR should be stored per day, but currently it's calculated from profile.
            // We will use current profile BMR for history summary or re-calculate if age/weight stored?
            // Current app logic calculates BMR on the fly based on current profile inputs.
            // We will do the same here for consistency, or just show Food/Activity sums.

            // To make it simple and fast, we just sum Food and Activity Calories.
            // BMR is static display in the row usually.
            // Let's calculate BMR based on CURRENT profile for the "Net" calc or just show In/Out.
            // Net = In - (Out + BMR).
            // We'll reuse the calculateBMR function.
            const bmr = calculateBMR() || 0;

            let html = '';
            logs.forEach(log => {
                const totalFood = (log.food || []).reduce((sum, i) => sum + i.calories, 0);
                const totalAct = (log.activity || []).reduce((sum, i) => sum + i.calories, 0);
                const totalOut = totalAct + bmr;
                const net = totalFood - totalOut;
                const dateDisplay = formatDateFriendly(log.date);

                const netClass = net > 200 ? 'text-red-500' : (net < -200 ? 'text-yellow-500' : 'text-green-500');

                html += `
                    <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition group">
                        <td class="p-4 font-bold text-gray-700 dark:text-gray-300">
                            ${dateDisplay}
                            <div class="text-[9px] text-gray-400 font-mono">${log.date}</div>
                        </td>
                        <td class="p-4 text-center text-green-600 font-bold">${totalFood}</td>
                        <td class="p-4 text-center text-orange-600 font-bold">${totalOut}</td>
                        <td class="p-4 text-center font-black ${netClass}">${net > 0 ? '+'+net : net}</td>
                        <td class="p-4 text-right">
                            <button onclick="loadHistoryDate('${log.date}')" class="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-xs font-bold hover:bg-blue-200 transition mb-1 mr-1">${T.btn_open}</button>
                            <button onclick="deleteDayLog('${log.date}')" class="px-3 py-1.5 bg-red-100 text-red-700 rounded-lg text-xs font-bold hover:bg-red-200 transition">✕</button>
                        </td>
                    </tr>
                `;
            });
            list.innerHTML = html;
        }

        async function loadHistoryDate(date) {
            currentDate = date;
            document.getElementById('datePicker').value = date;
            document.getElementById('displayDate').innerText = formatDateFriendly(date);
            await loadLogForDate(date);
            document.getElementById('historyModal').classList.add('hidden');
        }

        async function deleteDayLog(date) {
            const T = translations[currentLang];
            if(confirm(T.confirm_delete_day)) {
                await dbOps.deleteLog(date);
                // Refresh list
                openHistory();
                // If deleted date is current visible date, reload it (will be empty)
                if(currentDate === date) {
                    await loadLogForDate(date);
                }
            }
        }

        let isChatOpen = false;

        function toggleExpertChat() {
            const chatWindow = document.getElementById('expertChatWindow');
            const apiKey = localStorage.getItem("geminiApiKey");
            const errorMsg = document.getElementById('chatApiError');

            isChatOpen = !isChatOpen;

            if (isChatOpen) {
                chatWindow.classList.remove('hidden');
                setTimeout(() => chatWindow.classList.add('scale-100', 'opacity-100'), 10);
                chatWindow.classList.remove('scale-90', 'opacity-0');

                // Focus input
                document.getElementById('chatInput').focus();

                // Check API
                if (!apiKey) {
                    errorMsg.classList.remove('hidden');
                    document.getElementById('chatInput').disabled = true;
                    document.getElementById('sendBtn').disabled = true;
                } else {
                    errorMsg.classList.add('hidden');
                    document.getElementById('chatInput').disabled = false;
                    document.getElementById('sendBtn').disabled = false;
                }
            } else {
                chatWindow.classList.add('scale-90', 'opacity-0');
                setTimeout(() => chatWindow.classList.add('hidden'), 300);
                chatWindow.classList.remove('scale-100', 'opacity-100');
            }
        }

        function handleChatEnter(e) {
            if (e.key === 'Enter') sendChatMessage();
        }

        async function sendChatMessage() {
            const T = translations[currentLang];
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            const apiKey = localStorage.getItem("geminiApiKey");

            if (!message || !apiKey) return;

            // 1. Add User Message
            appendMessage('user', message);
            input.value = '';
            input.disabled = true;

            // 2. Add Loading State
            const loadingId = 'loading-' + Date.now();
            appendMessage('bot', `<em>${T.status_typing}</em>`, loadingId);

            try {
                // 3. Call API
                const langInstruction = currentLang === "id"
                    ? "Jawab pertanyaan pengguna dengan ramah, akurat, dan bijaksana dalam Bahasa Indonesia."
                    : "Answer user questions politely, accurately, and wisely in English.";

                const systemPrompt = `Anda adalah ahli kesehatan, ahli olahraga, dan ahli gizi berpengalaman. ${langInstruction} Gunakan format HTML seperti <ul>, <li>, <strong>, dan <p> untuk memformat jawaban agar rapi. Gunakan poin-poin (bullet points) agar mudah dibaca. Jangan gunakan Markdown (seperti ** atau -). Batasi paragraf agar singkat.`;

                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [
                            {
                                role: "user",
                                parts: [{ text: systemPrompt + "\n\nUser Question: " + message }]
                            }
                        ],
                        safetySettings: [
                            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
                            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
                            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_ONLY_HIGH" },
                            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" }
                        ]
                    })
                });

                const result = await response.json();

                // Remove loading
                document.getElementById(loadingId).remove();

                if (result.error) {
                    appendMessage('bot', `<span class="text-red-500">API Error: ${result.error.message}</span>`);
                    return;
                }

                let text = result.candidates?.[0]?.content?.parts?.[0]?.text;

                if (text) {
                    // Clean Markdown artifacts
                    text = text.replace(/```html/g, '').replace(/```/g, '').trim();
                    // Format bold text for better readability if needed
                    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                    appendMessage('bot', text);
                } else {
                    appendMessage('bot', `<span class="text-red-500">${T.chat_sorry}</span>`);
                }

            } catch (error) {
                if(document.getElementById(loadingId)) document.getElementById(loadingId).remove();
                appendMessage('bot', `${T.chat_err}${error.message}`);
            } finally {
                input.disabled = false;
                input.focus();
            }
        }

        function appendMessage(role, text, id = null) {
            const chatContainer = document.getElementById('chatMessages');
            const div = document.createElement('div');
            div.className = "flex gap-2 items-start " + (role === 'user' ? "flex-row-reverse" : "");

            if (id) div.id = id;

            const icon = role === 'user' ? '👤' : '👨‍⚕️';
            const bgClass = role === 'user'
                ? 'bg-blue-600 text-white rounded-tr-none'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-tl-none border border-gray-100 dark:border-gray-600 rich-text max-h-60 overflow-y-auto pr-2 custom-scrollbar';

            div.innerHTML = `
                <div class="w-8 h-8 ${role==='user'?'bg-gray-200':'bg-blue-100'} rounded-full flex items-center justify-center shrink-0 text-lg shadow-sm">${icon}</div>
                <div class="${bgClass} p-3 rounded-2xl shadow-sm text-xs leading-relaxed max-w-[80%]">
                    ${text}
                </div>
            `;

            chatContainer.appendChild(div);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }