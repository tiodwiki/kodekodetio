(function(){

// ================= CONFIG =================
const KEY = 'auto_skp_progress';

const JAM_LIST = [
  ['07:30','08:30'],
  ['08:30','09:30'],
  ['09:30','10:30'],
  ['10:30','11:30'],
  ['11:30','13:00'],
  ['13:00','14:00'],
  ['14:00','15:00'],
  ['15:00','16:00']
];

// ================= UTIL =================
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const waitFor = async (selector, timeout = 10000) => {
  const start = Date.now();
  while (!document.querySelector(selector)) {
    if (Date.now() - start > timeout) throw new Error('Timeout: ' + selector);
    await sleep(200);
  }
};

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// ================= DATA =================
const KEGIATAN = [
"penyusunan kerangka kerja sistem informasi aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"menyusun kerangka kerja sistem penghargaan aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"penyusunan kerangka kerja sistem manajemen SDM aparatur strategik berbasis kompetensi atau talenta/reformasi birokrasi/zona integritas sesuai pedoman dan peraturan perundang-undangan",
"menganalisis pelaksanaan pembayaran tunjangan kinerja dan/atau penghargaan lain berdasarkan laporan dokumen penilaian kinerja",
"penyusunan kerangka kerja mutasi aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"menyusun kebutuhan aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"penyusunan kerangka kerja perlindungan aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"menyusun kerangka kerja cuti aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"penyusunan dokumen tindak lanjut penilaian kinerja",
"merancang manajemen kinerja organisasi berdasarkan balance scorecard atau sistem lain",
"penyusunan kerangka kerja sistem penggajian, tunjangan dan fasilitas aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"melaksanakan layanan konseling kinerja pegawai",
"penyusunan pola karier aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"menyusun kerangka kerja promosi aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"pelaksanaan layanan konseling kinerja pegawai",
"menyusun dokumen tindak lanjut penilaian kinerja",
"penyusunan kerangka kerja disiplin aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"menyusun struktur/kelembagaan/tatalaksana/proses bisnis unit kerja/instansi",
"penganalisisan pelaksanaan pembayaran tunjangan kinerja dan/atau penghargaan lain berdasarkan laporan dokumen penilaian kinerja",
"penyusunan kerangka kerja pangkat dan jabatan aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"menyusun kerangka kerja sistem informasi aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"penyusunan kerangka kerja promosi aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"menyusun kerangka kerja sistem manajemen SDM aparatur strategik berbasis kompetensi atau talenta/reformasi birokrasi/zona integritas sesuai pedoman dan peraturan perundang-undangan",
"menyusun kerangka kerja penugasan aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"penyusunan kerangka kerja penugasan aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"merancang kebutuhan dan rencana pengembangan kompetensi aparatur sipil negara",
"penyusunan kerangka kerja pemberhentian aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"menyusun kerangka kerja sistem penggajian, tunjangan dan fasilitas aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"pelaksanaan asistensi dan konsultasi pengelolaan sistem kepegawaian aparatur sipil negara/sumber daya manusia aparatur",
"menyusun kerangka kerja pemberhentian aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"penyusunan kerangka kerja cuti aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"menyusun rancangan pengadaan aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"penyusunan kerangka kerja jaminan pensiun dan jaminan hari tua aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"menyusun kerangka kerja jaminan pensiun dan jaminan hari tua aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"menyusun perencanaan kinerja aparatur sipil negara",
"penyusunan kerangka kerja proses penyusunan kebijakan/regulasi bidang sumber daya manusia aparatur",
"menganalisis proses promosi aparatur sipil negara",
"penyusunan kebutuhan aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"penyusunan rancangan pengadaan aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"melakukan monitoring/pemantauan kinerja aparatur sipil negara",
"pelaksanaan monitoring/pemantauan kinerja aparatur sipil negara",
"penyusunan kerangka kerja sistem manajemen kinerja aparatur sipil negara terintegrasi sesuai pedoman dan peraturan perundang-undangan",
"menyusun instrumen penetapan penciptaan ide baru dan/atau cara baru dalam peningkatan kinerja yang bermanfaat bagi organisasi/negara",
"penyusunan instrumen penetapan penciptaan ide baru dan/atau cara baru dalam peningkatan kinerja yang bermanfaat bagi organisasi/negara",
"penyusunan perencanaan kinerja aparatur sipil negara",
"menyusun kerangka kerja disiplin aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"penyusunan struktur/kelembagaan/tatalaksana/proses bisnis unit kerja/instansi",
"penyusunan kerangka kerja sistem penghargaan aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"menyusun kerangka kerja mutasi aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"penyusunan kerangka kerja pengembangan karier aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"menyusun kerangka kerja pengembangan karier aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"penyusunan kerangka kerja sistem manajemen kinerja aparatur sipil negara terintegrasi sesuai pedoman dan peraturan perundang-undangan",
"penganalisisan proses promosi aparatur sipil negara",
"perancangan manajemen kinerja organisasi berdasarkan balance scorecard atau sistem lain",
"perancangan kebutuhan dan rencana pengembangan kompetensi aparatur sipil negara",
"menyusun pola karier aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"menyusun kerangka kerja proses penyusunan kebijakan/regulasi bidang sumber daya manusia aparatur",
"menyusun kerangka kerja pangkat dan jabatan aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"menyusun kerangka kerja perlindungan aparatur sipil negara sesuai pedoman dan peraturan perundang-undangan",
"melaksanakan asistensi dan konsultasi pengelolaan sistem kepegawaian aparatur sipil negara/sumber daya manusia aparatur"
];

// ================= STATE =================
let state = JSON.parse(localStorage.getItem(KEY) || '{}');

// init
if (!state.index) {
  const today = new Date();
  const def = `${String(today.getDate()).padStart(2,'0')}-${String(today.getMonth()+1).padStart(2,'0')}-${today.getFullYear()}`;

  const input = prompt('Masukkan tanggal (DD-MM-YYYY)', def);
  if (!input) return;

  const [d,m,y] = input.split('-').map(Number);

  state = {
    index: 0,
    d, m: m-1, y,
    kegiatan: shuffle([...KEGIATAN]).slice(0,8)
  };

  localStorage.setItem(KEY, JSON.stringify(state));
}

// ================= MAIN =================
(async function run(){

  if (state.index >= 8) {
    localStorage.removeItem(KEY);
    alert('✅ Selesai 8 data');
    return;
  }

  // klik tambah
  document.querySelector('.ls-modal')?.click();

  // tunggu form
  await waitFor('#tgl');

  // isi form
  const picker = $('#tgl').pickadate('picker');
  picker.set('select',[state.y,state.m,state.d]);

  $('#jam1').val(JAM_LIST[state.index][0]);
  $('#jam2').val(JAM_LIST[state.index][1]);

  $('input[name="kategori"][value="2"]').prop('checked',true).trigger('change');
  $('#divskp').show();

  const skp = $('#skpid option').not('[value=""]').eq(2).val();
  $('#skpid').val(skp).trigger('change');

  $('#penilai').val($('#penilai option:eq(1)').val()).trigger('change');

  const keg = state.kegiatan[state.index];
  $('#kegiatan').val(keg);
  $('textarea[name="uraian"]').val(keg);

  // submit
  await sleep(800);
  state.index++;
  localStorage.setItem(KEY, JSON.stringify(state));
  $('#formmodal').submit();

})();

})();
