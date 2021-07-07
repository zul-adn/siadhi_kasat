
import icon2 from './../../components/assets/icons/002-speech bubble.svg';


import TrigatraIcon from './../../components/assets/icons/017-web browser.svg'
import PancagatraIcon from './../../components/assets/icons/037-bank.svg'
import GeografiIcon from './../../components/assets/icons/029-find my gadget app.svg'
import TopografiIcon from './../../components/assets/icons/026-tips.svg'
import IdeologiIcon from './../../components/assets/icons/012-daily health app.svg'
import PoliticIcon from './../../components/assets/icons/009-tv app.svg'
import EconomyIcon from './../../components/assets/icons/016-stock exchange app.svg'
import PertahananIcon from './../../components/assets/icons/069-linkedin.svg'

const initState = {
    datas: [],
    datas_detail: [],
    question: [
        {
            q: "Jenis Kelamin",
            o: [
                {
                    o: "Laki - laki"
                },
                {
                    o: "Perempuan"
                }
            ]
        }, {
            q: "Usia",
            o: [
                {
                    o: "Dibawah 18 tahun"
                },
                {
                    o: "18 - 24 tahun"
                },
                {
                    o: "25 - 34 tahun"
                },
                {
                    o: "35 - 59 tahun"
                },
                {
                    o: "60 tahun keatas"
                }
            ]
        }, {
            q: "Pendidikan Terakhir",
            o: [
                {
                    o: "SD"
                },
                {
                    o: "SMP"
                },
                {
                    o: "SMA / SMK"
                },
                {
                    o: "Diploma"
                },
                {
                    o: "Sarjana (S1)"
                },
                {
                    o: "Pasca Sarjana (S2 / S3)"
                }
            ]
        }, {
            q: "Pekerjaan",
            o: [
                {
                    o: "PNS"
                },
                {
                    o: "TNI / POLRI"
                },
                {
                    o: "Karyawan BUMN"
                },
                {
                    o: "Karyawan Swasta"
                },
                {
                    o: "Wirausaha"
                },
                {
                    o: "Pelajar / Mahasiswa"
                },
                {
                    o: "Belum Bekerja"
                },
                {
                    o: "Lain - lain"
                }
            ]
        }, {
            q: "Jenis Layanan",
            o: [
                {
                    o: "DPMTK"
                },
                {
                    o: "DUKCAPIL"
                },
                {
                    o: "KEMENAG"
                },
                {
                    o: "BPN"
                },
                {
                    o: "BPJS KESEHATAN"
                },
                {
                    o: "BPJS KETENAGAKERJAAN"
                },
                {
                    o: "KEJAKSAAN"
                },
                {
                    o: "PENGADILAN NEGERI"
                },
                {
                    o: "KPP PRATAMA"
                },
                {
                    o: "SAMSAT"
                },
                {
                    o: "POLRES SINGKAWANG"
                },
                {
                    o: "IMIGRASI"
                },
                {
                    o: "BKD"
                },
                {
                    o: "BANK KALBAR"
                },
                {
                    o: "BRI"
                }
            ]
        }, {
            q: "Bagaimana pendapat saudara tentang kesesuaian persyaratan pelayanan dengan jenis pelayanannya?",
            o: [
                {
                    o: "Tidak Cepat"
                },
                {
                    o: "Kurang Cepat"
                },
                {
                    o: "Cepat"
                },
                {
                    o: "Sangat Cepat"
                }
            ]
        }, {
            q: "Bagaimana pendapat saudara tentang kewajaran biaya / tarif dalam pelayanan (Khusus izin yang terdapat retribusi)",
            o: [
                {
                    o: "Tidak Sesuai"
                },
                {
                    o: "Kurang Sesuai"
                },
                {
                    o: "Sesuai"
                },
                {
                    o: "Sangat Sesuai"
                }
            ]
        }, {
            q: "Bagaimana pendapat saudara tentang kompetensi / kemampuan petugas dalam pelayanan?",
            o: [
                {
                    o: "Tidak Kompeten"
                },
                {
                    o: "Kurang Kompeten"
                },
                {
                    o: "Kompeten"
                },
                {
                    o: "Sangat Kompeten"
                }
            ]
        }, {
            q: "Bagaimana pendapat saudara tentang perilaku petugas dalam pelayanan terkait kesopanan dan keramahan? ",
            o: [
                {
                    o: "Tidak Sopan dan Ramah"
                },
                {
                    o: "Kurang Sopan"
                },
                {
                    o: "Sopan dan Ramah"
                },
                {
                    o: "Sangat Sopan dan Ramah"
                }
            ]
        }, {
            q: "Bagaimana pendapat saudara tentang kualitas sarana dan prasarana?",
            o: [
                {
                    o: "Sangat Baik"
                },
                {
                    o: "Cukup Baik"
                },
                {
                    o: "Baik"
                },
                {
                    o: "Buruk"
                }
            ]
        }, {
            q: "Bagaimana pendapat saudara tentang penanganan pengaduan pengguna layanan?",
            o: [
                {
                    o: "Tidak Ada"
                },
                {
                    o: "Ada Tetapi Tidak Berfungsi"
                },
                {
                    o: "Berfungsi Kurang Maksimal"
                },
                {
                    o: "Dikelola Bengan Baik"
                }
            ]
        }, {
            q: "Bagaimana pemahaman Saudara tentang kemudahan prosedur pelayanan?",
            o: [
                {
                    o: "Tidak Mudah"
                },
                {
                    o: "Kurang Mudah"
                },
                {
                    o: "Mudah"
                },
                {
                    o: "Sangat Mudah"
                }
            ]
        }, {
            q: "Penilaian Kepuasan",
            o: [
                {
                    o: "Sangat Puas"
                },
                {
                    o: "Cukup Puas"
                },
                {
                    o: "Puas"
                },
                {
                    o: "Tidak Puas"
                },
                {
                    o: "Sangat Tidak Puas"
                }
            ]
        }
    ],
    button_all: [
     
    ],
    button_init: [
        {
            id: 1,
            name: "Trigatra",
            icon: TrigatraIcon
        },
        {
            id: 2,
            name: "Panca Gatra",
            icon: PancagatraIcon
        },
    ],
    button_main_trigatra: [
        {
            id: 1,
            name: "Geografi",
            icon: GeografiIcon
        },
        {
            id: 2,
            name: "Topografi",
            icon: TopografiIcon
        },
        {
            id: 3,
            name: "Demografi",
            icon: icon2
        },
    ],
    button_main_pancagatra: [
        {
            id: 1,
            name: "Ideologi",
            icon: IdeologiIcon
        },
        {
            id: 2,
            name: "Politik",
            icon: PoliticIcon
        },
        {
            id: 2,
            name: "Ekonomi",
            icon: EconomyIcon
        },
        {
            id: 2,
            name: "Sosial Budaya",
            icon: icon2
        },
        {
            id: 2,
            name: "Pertahanan",
            icon: PertahananIcon
        },
    ],
    isTrigatra: false,
    isPancaGatra: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'STORE_DATAS':
            return {
                ...state,
                datas: action.datas
            }
        case 'STORE_DATAS_DETAIL':
            return {
                ...state,
                datas_detail: action.datas
            }
        case 'RESET_DETAIL':
            return {
                ...state,
                datas_detail: []
            }
        case 'MAIN_BUTTON_TRIGATRA':
            return {
                ...state,
                isTrigatra: true,
                isPancaGatra: false,
            }
        case 'MAIN_BUTTON_PANCAGATRA':
            return {
                ...state,
                isTrigatra: false,
                isPancaGatra: true,
            }
        default:
            return state
    }
}