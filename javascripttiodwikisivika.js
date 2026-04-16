javascript:(function(){

// ===== LIST KEGIATAN (60) =====
var list = [
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

// ===== SHUFFLE =====
function shuffle(arr){
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

var kegiatanList = shuffle(list).slice(0,8);

// ===== JAM =====
var jamList = [
['07:30','08:30'],
['08:30','09:30'],
['09:30','10:30'],
['10:30','11:30'],
['11:30','13:00'],
['13:00','14:00'],
['14:00','15:00'],
['15:00','16:00']
];

// ===== TANGGAL =====
var today = new Date();
var dd = String(today.getDate()).padStart(2,'0');
var mm = String(today.getMonth()+1).padStart(2,'0');
var yyyy = today.getFullYear();
var defaultDate = dd+'-'+mm+'-'+yyyy;

var input = prompt('Masukkan tanggal (DD-MM-YYYY)', defaultDate);
if(!input) return;

var t = input.split('-');
var d = parseInt(t[0]);
var m = parseInt(t[1]) - 1;
var y = parseInt(t[2]);

// ===== LOOP =====
function isiForm(i){

  if(i >= 8) return;

  document.querySelector('.ls-modal').click();

  var cek = setInterval(function(){
    if ($('#tgl').length) {
      clearInterval(cek);

      var p = $('#tgl').pickadate('picker');
      p.set('select',[y,m,d]);

      $('#jam1').val(jamList[i][0]);
      $('#jam2').val(jamList[i][1]);

      $('input[name="kategori"][value="2"]').prop('checked',true).trigger('change');
      $('#divskp').show();

      var skp = $('#skpid option').not('[value=""]').eq(2).val();
      $('#skpid').val(skp).trigger('change');

      $('#penilai').val($('#penilai option:eq(1)').val()).trigger('change');

      var keg = kegiatanList[i];

      $('#kegiatan').val(keg);
      $('textarea[name="uraian"]').val(keg);

      setTimeout(function(){
        $('#formmodal').submit();

        setTimeout(function(){
          isiForm(i+1);
        }, 2000);

      }, 1000);
    }
  },300);
}

isiForm(0);

})();
