let paisesAfricanos = [
    {
        pais: "Nigéria",
        descricao: "A Nigéria, oficialmente República Federal da Nigéria (em inglês: Federal Republic of Nigeria), é uma república constitucional federal que compreende 36 estados e o Território da Capital Federal. O país está localizado na África Ocidental e compartilha fronteiras terrestres com a República do Benim a oeste; com Chade e Camarões a leste e com o Níger ao norte. Sua costa encontra-se ao sul, no Golfo da Guiné, no Oceano Atlântico.",
        telefone: "+234 1 271 0351",
        portal: "http://lagos.itamaraty.gov.br/",
        email: "consular.lagos@itamaraty.gov.br"
    },
    {
        pais: "Egito",
        descricao: "O Egito é um país transcontinental localizado no nordeste da África e sudoeste da Ásia. É famoso por suas antigas pirâmides e pela civilização faraônica.",
        telefone: "+20 2 2578 6000",
        portal: "http://cairo.itamaraty.gov.br/",
        email: "consular.cairo@itamaraty.gov.br"
    },
    {
        pais: "Marrocos",
        descricao: "Marrocos é um país do Norte de África, banhado pelo Oceano Atlântico a oeste e pelo Mar Mediterrâneo ao norte.",
        telefone: "+212 5 222 989 89",
        portal: "http://rabat.itamaraty.gov.br/",
        email: "consular.rabat@itamaraty.gov.br"
    },
    {
        pais: "África do Sul",
        descricao: "A África do Sul é um país localizado na ponta sul do continente africano, conhecido por sua rica diversidade cultural e paisagens variadas.",
        telefone: "+27 12 342 9900",
        portal: "http://pretoria.itamaraty.gov.br/",
        email: "consular.pretoria@itamaraty.gov.br"
    },
    {
        pais: "Quênia",
        descricao: "O Quênia é um país da África Oriental, famoso por seus safáris e pelo Parque Nacional de Masai Mara.",
        telefone: "+254 20 362 1000",
        portal: "http://nairobi.itamaraty.gov.br/",
        email: "consular.nairobi@itamaraty.gov.br"
    },
    {
        pais: "Angola",
        descricao: "Angola é um país localizado no sudoeste da África, com uma costa atlântica extensa. É conhecido por sua história colonial e pela produção de petróleo.",
        telefone: "+244 222 333 444",
        portal: "http://luanda.itamaraty.gov.br/",
        email: "consular.luanda@itamaraty.gov.br"
    },
    {
        pais: "Tanzânia",
        descricao: "A Tanzânia é um país da África Oriental, famoso pelo monte Kilimanjaro e pelo arquipélago de Zanzibar.",
        telefone: "+255 22 211 5000",
        portal: "http://dar.itamaraty.gov.br/",
        email: "consular.dar@itamaraty.gov.br"
    },
    {
        pais: "Etiópia",
        descricao: "A Etiópia é um dos países mais antigos da África, com uma rica história e cultura. É conhecida por suas tradições, como a cerimônia do café e a dança tradicional.",
        telefone: "+251 11 155 1000",
        portal: "http://addisababa.itamaraty.gov.br/",
        email: "consular.addisababa@itamaraty.gov.br"
    },
    {
        pais: "Madagascar",
        descricao: "Madagascar é uma grande ilha no Oceano Índico, conhecida por sua biodiversidade única e pela cultura malgaxe.",
        telefone: "+261 20 22 211 11",
        portal: "http://antananarivo.itamaraty.gov.br/",
        email: "consular.antananarivo@itamaraty.gov.br"
    },
    {
        pais: "Moçambique",
        descricao: "Moçambique é um país localizado na costa leste da África, conhecido por suas belas praias, rica biodiversidade e história colonial portuguesa.",
        telefone: "+258 21 497 000",
        portal: "http://maputo.itamaraty.gov.br/",
        email: "consular.maputo@itamaraty.gov.br"
    },
    {
        pais: "Camarões",
        descricao: "Camarões é um país da África Central, com uma rica diversidade cultural e paisagens que variam de florestas tropicais a savanas.",
        telefone: "+237 22 22 22 22",
        portal: "http://yaounde.itamaraty.gov.br/",
        email: "consular.yaounde@itamaraty.gov.br"
    },
    {
        pais: "Zimbábue",
        descricao: "O Zimbábue é um país sem litoral na África Austral, famoso pelas ruínas de Grande Zimbábue e pelas Cataratas de Vitória.",
        telefone: "+263 4 797 121",
        portal: "http://harare.itamaraty.gov.br/",
        email: "consular.harare@itamaraty.gov.br"
    },
    {
        pais: "Tunísia",
        descricao: "A Tunísia é um país do Norte da África, conhecido por suas cidades antigas, como Cartago e Túnis, e por suas belas praias.",
        telefone: "+216 71 863 000",
        portal: "http://tunis.itamaraty.gov.br/",
        email: "consular.tunis@itamaraty.gov.br"
    },
    {
        pais: "Mali",
        descricao: "O Mali é um país sem litoral na África Ocidental, conhecido por suas ricas tradições culturais e pela cidade de Timbuktu, um importante centro de aprendizado no passado.",
        telefone: "+223 20 22 61 61",
        portal: "http://bamako.itamaraty.gov.br/",
        email: "consular.bamako@itamaraty.gov.br"
    },
    {
        pais: "Botswana",
        descricao: "Botswana é um país sem litoral na África Austral, conhecido por seus vastos desertos, reservas de vida selvagem e a rica cultura dos san.",
        telefone: "+267 313 6800",
        portal: "http://gaborone.itamaraty.gov.br/",
        email: "consular.gaborone@itamaraty.gov.br"
    },
    {
        pais: "Burkina Faso",
        descricao: "Burkina Faso é um país sem litoral na África Ocidental, conhecido por suas paisagens de savana e pela produção de algodão.",
        telefone: "+226 25 33 60 60",
        portal: "http://ouagadougou.itamaraty.gov.br/",
        email: "consular.ouagadougou@itamaraty.gov.br"
    },
    {
        pais: "Eritreia",
        descricao: "A Eritreia é um país localizado no Corno de África, com uma rica história e uma cultura diversificada, influenciada por diversas civilizações.",
        telefone: "+291 1 122 3344",
        portal: "http://asmara.itamaraty.gov.br/",
        email: "consular.asmara@itamaraty.gov.br"
    },
    {
        pais: "Lesoto",
        descricao: "O Lesoto é um país totalmente enclavado na África do Sul, conhecido por suas montanhas, paisagens exuberantes e a cultura basotho.",
        telefone: "+266 2231 1234",
        portal: "http://maseru.itamaraty.gov.br/",
        email: "consular.maseru@itamaraty.gov.br"
    },
    {
        pais: "Mauritânia",
        descricao: "A Mauritânia é um país do Norte da África, com a maior parte do seu território ocupada pelo deserto do Saara.",
        telefone: "+222 22 234 567",
        portal: "http://nouakchott.itamaraty.gov.br/",
        email: "consular.nouakchott@itamaraty.gov.br"
    },
    {
        pais: "Comores",
        descricao: "As Comores são um arquipélago no Oceano Índico, conhecido por suas praias paradisíacas e pela rica biodiversidade marinha.",
        telefone: "+269 33 000 111",
        portal: "http://moroni.itamaraty.gov.br/",
        email: "consular.moroni@itamaraty.gov.br"
    },
    {
        pais: "Djibouti",
        descricao: "Djibouti é um pequeno país localizado no Corno de África, com uma rica história e uma localização estratégica no Mar Vermelho.",
        telefone: "+253 21 351 000",
        portal: "http://djibouti.itamaraty.gov.br/",
        email: "consular.djibouti@itamaraty.gov.br"
    },
    {
        pais: "Libéria",
        descricao: "A Libéria é um país da África Ocidental, com uma história única marcada pela imigração de escravos libertos dos Estados Unidos.",
        telefone: "+231 886 1111",
        portal: "http://monrovia.itamaraty.gov.br/",
        email: "consular.monrovia@itamaraty.gov.br"
    },
    {
        pais: "Seicheles",
        descricao: "As Seychelles são um arquipélago no Oceano Índico, famoso por suas praias de areia branca, águas cristalinas e resorts de luxo.",
        telefone: "+248 422 4444",
        portal: "http://victoria.itamaraty.gov.br/",
        email: "consular.victoria@itamaraty.gov.br"
    },
    {
        pais: "Benim",
        descricao: "Benim é um país da África Ocidental, conhecido por suas praias, lagos e rica história cultural, com influências africanas, europeias e brasileiras.",
        telefone: "+229 21 33 00 00",
        portal: "http://cotonou.itamaraty.gov.br/",
        email: "consular.cotonou@itamaraty.gov.br"
    },
    {
        pais: "Burundi",
        descricao: "Burundi é um país sem litoral na África dos Grandes Lagos, conhecido por suas paisagens montanhosas e pela cultura Hutu e Tutsi.",
        telefone: "+257 22 22 33 44",
        portal: "http://bujumbura.itamaraty.gov.br/",
        email: "consular.bujumbura@itamaraty.gov.br"
    },
    {
        pais: "Cabo Verde",
        descricao: "Cabo Verde é um arquipélago no Oceano Atlântico, conhecido por suas praias, paisagens vulcânicas e pela cultura crioula.",
        telefone: "+238 22 23 344",
        portal: "http://praiagov.itamaraty.gov.br/",
        email: "consular.praia@itamaraty.gov.br"
    },
    {
        pais: "Gâmbia",
        descricao: "A Gâmbia é um país da África Ocidental, conhecido pelo rio Gambia, que atravessa todo o país, e pela cultura mandinga.",
        telefone: "+220 222 9999",
        portal: "http://banjul.itamaraty.gov.br/",
        email: "consular.banjul@itamaraty.gov.br"
    },
    {
        pais: "Guiné-Bissau",
        descricao: "A Guiné-Bissau é um país da África Ocidental, conhecido por seus manguezais, praias e pela cultura rica em tradições musicais e artísticas.",
        telefone: "+245 222 44 55",
        portal: "http://bissau.itamaraty.gov.br/",
        email: "consular.bissau@itamaraty.gov.br"
    },
    {
        pais: "Chade",
        descricao: "O Chade é um país sem litoral na África Central, conhecido por suas paisagens desérticas e pela rica diversidade étnica.",
        telefone: "+235 22 51 12 34",
        portal: "http://ndjamena.itamaraty.gov.br/",
        email: "consular.ndjamena@itamaraty.gov.br"
    },
    {
        pais: "Congo",
        descricao: "O Congo, oficialmente República do Congo, é um país da África Central, com uma rica biodiversidade e uma história marcada pela colonização belga.",
        telefone: "+242 06 600 11 22",
        portal: "http://brazzaville.itamaraty.gov.br/",
        email: "consular.brazzaville@itamaraty.gov.br"
    },
    {
        pais: "Eswatini",
        descricao: "Eswatini, anteriormente conhecido como Suazilândia, é um país enclavado na África Austral, famoso por suas paisagens montanhosas e pela cultura Swazi.",
        telefone: "+268 2404 1234",
        portal: "http://mbabane.itamaraty.gov.br/",
        email: "consular.mbabane@itamaraty.gov.br"
    },
    {
        pais: "Guiné Equatorial",
        descricao: "A Guiné Equatorial é um país da África Central, com uma costa no Golfo da Guiné e uma economia baseada no petróleo.",
        telefone: "+240 222 33 44",
        portal: "http://malabo.itamaraty.gov.br/",
        email: "consular.malabo@itamaraty.gov.br"
    },
    {
        pais: "São Tomé e Príncipe",
        descricao: "São Tomé e Príncipe é um país insular no Golfo da Guiné, conhecido por suas praias, florestas tropicais e rica biodiversidade.",
        telefone: "+239 22 23 456",
        portal: "http://sao_tome.itamaraty.gov.br/",
        email: "consular.sao_tome@itamaraty.gov.br"
    },
    {
        pais: "República Democrática do Congo",
        descricao: "A República Democrática do Congo é um país da África Central, conhecido por suas vastas florestas tropicais, rica biodiversidade e uma história marcada por conflitos.",
        telefone: "+243 81 888 9999",
        portal: "http://kinshasa.itamaraty.gov.br/",
        email: "consular.kinshasa@itamaraty.gov.br"
    },
    {
        pais: "Malawi",
        descricao: "O Malawi é um país sem litoral na África Austral, conhecido pelo Lago Niassa, um dos maiores lagos de água doce da África.",
        telefone: "+265 1 750 000",
        portal: "http://lilongwe.itamaraty.gov.br/",
        email: "consular.lilongwe@itamaraty.gov.br"
    },
    {
        pais: "Namíbia",
        descricao: "A Namíbia é um país da África Austral, conhecido pelo deserto do Namibe, um dos mais antigos do mundo, e pela rica fauna selvagem.",
        telefone: "+264 61 292 7000",
        portal: "http://windhoek.itamaraty.gov.br/",
        email: "consular.windhoek@itamaraty.gov.br"
    },
    {
        pais: "Uganda",
        descricao: "Uganda é um país da África Oriental, conhecido por seus lagos, montanhas, como o monte Ruwenzori, e pela rica biodiversidade.",
        telefone: "+256 414 259 900",
        portal: "http://kampala.itamaraty.gov.br/",
        email: "consular.kampala@itamaraty.gov.br"
    },
    {
        pais: "Argélia",
        descricao: "A Argélia é o maior país da África e do mundo árabe, conhecido por suas vastas extensões de deserto do Saara e pela rica história romana e islâmica.",
        telefone: "+213 21 92 17 19",
        portal: "http://argelia.itamaraty.gov.br/",
        email: "consular.argelia@itamaraty.gov.br"
    },
    {
        pais: "Líbia",
        descricao: "A Líbia é um país norte-africano com uma costa mediterrânea extensa, famoso pelas ruínas romanas de Leptis Magna e por suas vastas reservas de petróleo.",
        telefone: "+218 21 444 555",
        portal: "http://libia.itamaraty.gov.br/",
        email: "consular.libia@itamaraty.gov.br"
    },
    {
        pais: "Sudão",
        descricao: "O Sudão é um país transcontinental, com a maior parte de seu território localizado no nordeste da África. É conhecido por suas pirâmides de Meroe e pelas vastas planícies.",
        telefone: "+249 18 351 234",
        portal: "http://sudao.itamaraty.gov.br/",
        email: "consular.sudao@itamaraty.gov.br"
    },
    {
        pais: "Sudão do Sul",
        descricao: "O Sudão do Sul é o país mais jovem da África, conhecido por sua rica biodiversidade e pelos conflitos étnicos que marcaram sua história recente.",
        telefone: "+211 912 345 678",
        portal: "http://sudaosul.itamaraty.gov.br/",
        email: "consular.sudaosul@itamaraty.gov.br"
    },
    {
        pais: "Costa do Marfim",
        descricao: "A Costa do Marfim, ou Côte d'Ivoire, é um país da África Ocidental, conhecido por suas praias, florestas tropicais e produção de cacau.",
        telefone: "+225 23 22 33 44",
        portal: "http://costademarfim.itamaraty.gov.br/",
        email: "consular.costademarfim@itamaraty.gov.br"
    },
    {
        pais: "Gana",
        descricao: "Gana é um país da África Ocidental, conhecido por sua rica história, incluindo o Império Ashanti, e por ser o primeiro país da África subsaariana a obter a independência.",
        telefone: "+233 30 274 1122",
        portal: "http://gana.itamaraty.gov.br/",
        email: "consular.gana@itamaraty.gov.br"
    },
    {
        pais: "Guiné",
        descricao: "A Guiné é um país da África Ocidental, conhecido por suas florestas tropicais, reservas de bauxita e a ilha de Loos.",
        telefone: "+224 22 22 33 44",
        portal: "http://guine.itamaraty.gov.br/",
        email: "consular.guine@itamaraty.gov.br"
    },
    {
        pais: "Senegal",
        descricao: "O Senegal é um país da África Ocidental, conhecido por sua capital, Dakar, e pela Langue de Barbarie, uma península que se estende para o Oceano Atlântico.",
        telefone: "+221 33 824 12 34",
        portal: "http://senegal.itamaraty.gov.br/",
        email: "consular.senegal@itamaraty.gov.br"
    },
    {
        pais: "Serra Leoa",
        descricao: "Serra Leoa é um país da África Ocidental, conhecido por suas praias, florestas e pelo papel na história do comércio de escravos.",
        telefone: "+232 22 222 333",
        portal: "http://serraleoa.itamaraty.gov.br/",
        email: "consular.serraleoa@itamaraty.gov.br"
    },
    {
        pais: "Togo",
        descricao: "Togo é um país da África Ocidental, conhecido por suas lagoas, montanhas e a cidade de Lomé.",
        telefone: "+228 22 22 33 44",
        portal: "http://togo.itamaraty.gov.br/",
        email: "consular.togo@itamaraty.gov.br"
    },
    {
        pais: "República Centro-Africana",
        descricao: "A República Centro-Africana é um país da África Central, conhecido por suas florestas tropicais e por sua instabilidade política.",
        telefone: "+236 21 61 00 00",
        portal: "http://rca.itamaraty.gov.br/",
        email: "consular.rca@itamaraty.gov.br"
    },
    {
        pais: "Gabão",
        descricao: "O Gabão é um país da África Central, conhecido por suas florestas tropicais, reservas de petróleo e fauna diversificada.",
        telefone: "+241 01 43 00 00",
        portal: "http://gabao.itamaraty.gov.br/",
        email: "consular.gabao@itamaraty.gov.br"
    },
    {
        pais: "Ruanda",
        descricao: "Ruanda é um país da África dos Grandes Lagos, conhecido por sua recuperação após o genocídio de 1994 e por suas montanhas, como os Vulcões Virunga.",
        telefone: "+250 25 25 25 25",
        portal: "http://ruanda.itamaraty.gov.br/",
        email: "consular.ruanda@itamaraty.gov.br"
    },
    {
        pais: "Somália",
        descricao: "A Somália é um país localizado no Corno de África, conhecido por sua instabilidade política e pela pirataria.",
        telefone: "+252 25 55 55 55",
        portal: "http://somalia.itamaraty.gov.br/",
        email: "consular.somalia@itamaraty.gov.br"
    }
];