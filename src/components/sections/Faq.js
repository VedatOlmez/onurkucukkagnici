import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: 'İmplant Ne İçin Yapılır?',
    content: () => (
      <>
        İmplant nedir sorusuna aslında verilecek en kısa cevap, eksik olan diş kökümüz yerine titanyum malzemesinden bir kök oluşturmaktır ve toplumda implant denince her zaman üstüne takılan zirkonyum veya porselen dişler de implanta dahil gibi durmakta, halbuki implant nedir? üst yapınız için sadece bir kök.
        <br></br>
        <br></br>
İmplant kelime anlamı itibariyle doku içerisine konan demektir, ayrıca genel olarak ana maddesi titanyumdur bazı durumlarda ana maddesi zirkonyum metalinden yapılabilir, nedeni  Diş hekimlerinin kullanımını yapmaya başladıkları dönem ise 20.yüzyıl olarak bilinmektedir. Kişinin diş eksikliğini tamamlamayı ve ağız bölgesinde bazı nedenlerle kayba uğramış olan kısımları tamamlamak için çene kemiğinin iç kısmı ya da üzerine yerleştirilen, diğer dişlere ve çeneye tutuculuk sağlayan titanyum malzemesinden üretilen protez yapıya implant adı verilir.
<br></br>
<br></br>
İmplant, normalde yapay bir diş olmasına rağmen çene kemiğine yerleştirildikten sonra, doğal dişin görevini sağlamaktadır. İnsanlar, implant sayesinde kaybettikleri dişleri, aynı konforda yapay dişlerle sağlamakta ve yaşam kalitesini tekrar kazanabilmektedirler. Kaliteli bir yaşam sürebilmek için insan vücudunda önemli etkenlerden birisi olan dişiniz için herhangi bir nedenle oluşan kayıplarda tedavisi yapılması önemli olmaktadır. İmplant yöntemi sonrasında kişinin yüzünde doğal görünümde değişme olmamaktadır.
<br></br>
<br></br>
Diş çekilen bölgeye en kısa sürede implant yapmak önemlidir.
<br></br>
<br></br>          
Şayet akut bir enfeksiyon varsa; böyle durumlarda da, kemik dokusunun iyileşmesini beklemek gerekir, sonra tedavi yapılmalıdır.
<br></br>
<br></br>
Diş implantı tedavisi kanıtlanmış bir tedavi yöntemidir.Genel sağlığımızın iyi olması durumunda, bütün herkese yapılabilir. Bu tedavilerinde başarı yüzdesi oldukça yüksektir, %97-98 gibi, neredeyse yüzde 100 gibi değerlendirilebilir.
<br></br>
<br></br>
Bununla beraber, bazı istisnai durumlarda, özellikle de kemik dokusunu, bağ dokusunu ilgilendiren, mesela Paget hastalığı olan hastalarda, mesela tedavi amaçlı yüksek dozda ışın almış kişilerde, diğer bir husus, şekeri çok yüksek seviyede seyreden hastalarda başarısız olma riski yüksektir. Hastalar buna rağmen isteyebilirler. Bu risk hususu kendilerine açık açık anlatılmalıdır.
<br></br>
<br></br>
Diş Hekiminin implant konusunda muhakkak bilgisi, tecrübesi olması şart.
<br></br>
<br></br>
Doktorumuza açık açık soracağız.  Hani nasıl pratisyen hekime gidip kalp ameliyatı olmuyorsak, diş hekimine de soracağız, bundan önce tecrübesi var mı? Bu hususta çalışması, bilgisi var mı? Hafta sonunda aldığı 2 saatlik kursla,  yapabileceğini söyleyecek doktorlarımız var. Aman dikkat bu husus çok önemli.
      </>
    ),
  },
  {
    title: 'Kimler İmplant Yaptırtabilir?',
    content: () => (
      <>
        Diş tedavisinde en yüksek başarıya sahip olan implant uygulaması gerekli testler yapıldıktan sonra hastalara önerilmektedir. Kimler implant yaptırabilir sorularını yöneltenler için şeker hastalığı, kalp rahatsızlığı ve diyalize bağlı olan hastalar dışında risk taşımayan kişilere uygulaması yapılmaktadır. Testler sonrasında bu tür rahatsızlıkları olan hastalar da uygun görüldüğünde tedaviden yararlanabilirler. Tedavinin kolaylıkla uygulanabildiği kişiler ise diş iltihaplanması gibi rahatsızlıkları olmayanlardır.
        <br></br>
<br></br>
Kimler implant yaptırabilir sorusunu merak edenler için implant diş yapısında ve insan vücudunda yan etkiye neden olmayan maddelerden yapılmıştır. Tedaviden yararlanmak isteyen hastanın diş ve çene yapısı kontrol edilir. Çene kemiğinin implant vidasının genişlik ve kalınlığını kabul edebilecek yapıya sahip olması gerekir. Sağlık durumu iyi olan tüm diş rahatsızlığı yaşayan hastalar implant tedavisinden yararlanabilir. Kemik erimesinin önüne geçen bir uygulama olması nedeniyle tüm dişlerini kaybetmiş kişiler için önerilen bir uygulamadır. Tek dişini kaybeden hastalar da implant tedavisine başvurabilir. Diş yapısına tam uyum sağlaması, protez taşıyan hastaların çiğneyememe gibi sorunlarının implant tedavisinde yaşanmaması sayesinde uygulamayı tercih edenlerin sayısı gün geçtikçe artmaktadır.
<br></br>
<br></br>
Ayrıca implant yapılacak hastaların çene gelişimini tamamlamış olması çok önemlidir.
<br></br>
<br></br>
Kadınlar için: en az 18 yaş
<br></br>
<br></br>
Erkekler için: en az 20 yaş
<br></br>
<br></br>
Olması başarılı bir operasyon için gereklidir.

      </>
    ),
  },
  {
    title: 'Neden İmplant Yaptırmalıyım?',
    content: () => (
      <>
        Diş tedavi yöntemleri arasında tercih edilme oranı artan implant, başarılı bir tedavidir. Pek çok hasta başarılı bir şekilde implant ile tedavi olmaktadırlar. Eksik olan dişlerin estetiğini yeniden kazanması için tercih edilen tedavi yöntemi, doğal dişlere de uygunluk göstermekte ve herhangi bir soruna neden olmamaktadır.
        <br></br>
<br></br>
İmplant yaptırmak veya aklınızdaki tüm sorular için bize ulaşabilirsiniz ve fiyat alabilirsiniz.
      </>
    ),
  },
  {
    title: 'İmplant Fiyatları?',
    content: () => (
      <>
        İmplant fiyatları öğrenmek için ayrıca implant fiyatları sayfamızı ziyaret ederekte bilgi sahibi olabilirsiniz. ayrıca aklınıza takılan soruları dilerseniz mail adresimizden, dilerseniz sayfamızdaki formlardan bize sorabilirsiniz.
        <br></br>
<br></br>
Klinik olarak kullandığımız implant firması implant direct
      </>
    ),
  },
  {
    title: 'İmplant Takılması Ne Kadar Sürer?',
    content: () => (
      <>
        İmplant operasyonu yaklaşık 45 dakikalık bir operasyondur. Ameliyathane operasyon için hazırlanırken hastaya anestezi uygulanarak implant yapılacak bölgenin uyuşması beklenir. Steril hazırlıkları tamamlanan hekim ve asistanı yaklaşık 30 dk lık bir operasyon ile panoramik röntgen ve bilgisayarlı tomografiden yardım alarak implantı yerine yerleştirip diş eti dikiş ile kapatılır. Ardından hasta ilk ağrı kesicisini alıp anestezisinin açılması beklenir implant için yapılan anestezi çoğu zaman 1 saat içinde açılacaktır.
        <br></br>
<br></br>
İmplant operasyon olarak örnek vermek gerekirse kanal tedavisinden daha ağrılı bir operasyon değildir.
      </>
    ),
  },
  {
    title: 'İmplanttan Sonra Ağrı Olur Mu?',
    content: () => (
      <>
İmplant operasyonundan sonra o gün için biraz şişlik ve ağrı olabilmektedir. İmplant yapılan gün uygulanacak buz kompresi şişlik ve ağrının hafif geçmesi için çok önemlidir, genel olarak ertesi gün ve diğer günlerde eğer operasyon sonrası bir enfeksiyon oluşmamış ise ağrı beklenmez. Oluşacak aynı gün ağrısı ise basit ağrı kesiciler ile geçebilecek derecededir.
      </>
    ),
  },
  {
    title: 'İmplant Ne Kadar Sürede İyileşir?',
    content: () => (
      <>
        İmplant hastalarının en büyük sorularından biri, operasyon sonrası ne kadar sürede iyileşeceğidir. Bu aslında normal kemik kaynaması ile çok farklı değildir, implant maddesi titanyum olup kemik ile kaynaşmaktadır bu süreç genel olarak 2 ay olup üzerine diş yükleneceği yani belli basınçlara maruz kalacağından 3 ay kemiğe bağlanıp iyileşmesi beklenir en optimum süreç 3 ay olmaktadır.
      </>
    ),
  },
  {
    title: 'İmplant Hangi Malzemeden Yapılır? Ham Maddesi Nedir?',
    content: () => (
      <>
       Genel olarak implant materyali 2 tanedir; Titanyum implantlar ve Zirkonyum implantlar. Titanyum implantlar oldukça bilinir olsada bazı markaların zirkonyum implantlarıda vardır ve başarılı sonuçlar vermektedir. Sonuç olarak çok fazla farklılık olmasa da çoğu hekim titanyum grade 4 implantları tercih etmektedir. titanyum implantların hem uzun süreli vakaları olması, daha bilinir olması tercih meselesi oluyor.
      </>
    ),
  },
  {
    title: 'İmplant Nedir? İmplant Fiyatları 2020 Ne Kadar?',
    content: () => (
      <>
       İmplant, çene kemiğine yerleştirilen ve protezlere destek için yapılan yapay diş kökleridir. Bunlar eksik dişlerin yerine yapılan, uzun ömürlü ve yaşam boyu sorunsuz şekilde kullanılabilen daha çok titanyumdan yapılan vidalardır. İmplant fiyatları genellikle kullanılan malzemeler nedeniyle değişiklik göstermektedir.
      </>
    ),
  },
  {
    title: 'İmplant Diş Kimlere Yapılabilir?',
    content: () => (
      <>
       implant dişGenel sağlık durumu iyi olan, sağlıklı diş etleri ve çene kemiğinde implantları destekleyebilecek oranda kemik bulunan, iyi ağız bakımı yapan bireyler implant tedavisinde yüksek başarı oranına
       <br></br>
<br></br>
sahiptir. Bazı durumlarda kemiğin miktarı implant yerleşimi için yeterli olmaz. Eğer kemik kaybı fazla ise, ileri teknikler uygulanarak implant yerleştirilmesi için uygun alt yapı sağlanarak implantlar yerleştirilebilir.
      </>
    ),
  },
  {
    title: 'İmplant Markaları',
    content: () => (
      <>
Onur Küçükkağnıcı Diş Kliniği olarak 28 yıllık tecrübemiz ile tercih ettiğimiz implant markaları şunlardır:
<br></br>
<br></br>
ITI Straumann : En çok bilinen implant markalarındandır. Uzun ömürlü ve dayanıklıdır.
<br></br>
<br></br>
Medentika By Straumann : Straumann güvencesi ve Alman teknolojisi ile üretilmiş Straumann Group implant markasıdır.
Bego İmplant: Alman teknolojisi ile üretilmektedir. Uzun ömürlü ve dayanıklı olması ile ünlüdür.
<br></br>
<br></br>
Osstem İmplant: Güney Koreli bu implant markası kendini ispatlayarak diş klinik ve hastanelerinin en çok tercih ettiği implant markalarından biri olmuştur.
      </>
    ),
  },
  {
    title: 'İmplant Fiyatları 2020 Güncel Fiyatları',
    content: () => (
      <>
       İmplant fiyatları belirlenirken pek çok faktör göz önünde bulundurulmalı. Her Sene implant fiyatları özel klinikler, devlet hastaneleri ve özel hastaneler için olmak üzere Türk Diş hekimleri Birliği tarafından belirlenmektedir.Belirlenen İmplant fiyatları kıymetli metal ve zirkonyum gibi kullanılan malzeme ücretlerini içermemekle birlikte rekabet şartlarından dolayı internet üzerinden fiyat paylaşılması yasaklanmıştır. Dolayısıyla hem fiyat bilgisini öğrenmek hem de ihtiyacınız olan tedaviyi detaylı olarak belirlenmesi için klinik muayene gerekmektedir.
       <br></br>
<br></br>
2020 Türk Diş hekimleri Birliği tarafından belirlenen İmplant Diş Fiyatları 
2020 Yılı İmplant Fiyatları Aşağıda Görebilirsiniz.
<br></br>
<br></br>
✓ Kemik İçi İmplant (Tek Silindirik İmplant Ücreti Hariç)
Kdv Dahil	.... TL
<br></br>
<br></br>
✓ Sert doku greftleme ( kemik tozu ücreti hariç)
Kdv Dahil	.... TL
<br></br>
<br></br>
✓ Overdenture İmplant Ücreti Hariç (Tek Çene)
Kdv Dahil	.... TL
<br></br>
<br></br>
✓ İmplant Çıkartılması
Kdv Dahil	.... TL
<br></br>
<br></br>
✓ Veneer Kron ( Zirkonyum) ( Kıymetli Metal Ücreti Hariç )
Kdv Dahil	.... TL
<br></br>
<br></br>
✓ Veneer Kron ( Porselen ) ( Kıymetli Metal Ücreti Hariç )
Kdv Dahil	.... TL
<br></br>
<br></br>
✓ Tam Seramik Kron ( Metal Desteksiz Porselen )
Kdv Dahil	.... TL
<br></br>
<br></br>
✓ Diş Çekimi
Kdv Dahil	.... TL
<br></br>
<br></br>
✓ Gömülü Diş Çekimi
Kdv Dahil	.... TL
<br></br>
<br></br>
İmplant Fiyatları 2020 Yılında Ne kadar?
İmplant fiyatları implant markasına göre farklılık arz etmektedir.
<br></br>
<br></br>
Yerli implant fiyatları: Konya’da tek diş için implant fiyatı diş sağlığı merkezlerinin farklı fiyat politikalarına göre değişmektedir. En uygun implant fiyatını öğrenmek için buraya tıklayabilirsiniz.
İthal (yabancı) implant fiyatı: Marka olarak aynı implant kullanılsa dahi diş sağlığı hastaneleri aynı hizmeti farklı fiyatlarla sunmaktadırlar. Kliniğimizin ithal implant fiyatı öğrenmek için buraya tıklayabilirsiniz.
İmplant tedavisinde implantın kendisinden daha önemli bir husus var ise bu da uygulamayı yapacak hekimin tecrübesidir.
<br></br>
<br></br>
Bu konuda yeterli tecrübesi olmayan bir hekime veya sadece reklam politikası ile hastalara hitap eden hastanelerin aynı ürüne ve hizmete uyguladıkları iki/üç katına varan fiyatlarla tedavinizi yaptırmamanızı tavsiye ederiz.
<br></br>
<br></br>
Onur Küçükkağnıcı Diş Kliniği’mizin güncel tek diş implant fiyatları öğrenmek isterseniz aşağıdaki yöntemlerden biri ile bize şimdi ulaşabilirsiniz.
      </>
    ),
  },
  {
    title: 'Yerli İmplant Fiyatları',
    content: () => (
      <>
       Yukarıda bahsedildiği üzere pek çok implant markası olduğunu söylemeliyiz. Uzun zamandır başarılı bir şekilde kullanılan implant tedavisi tüm dünyada bu konuda bir hareketlenmeye sebep olmuştur. Türkiye’de bu konuda gerekli çalışmaları tamamlamış ve yerli bir implant markası kurmuştur. Bu yerli implant markası yaklaşık olarak 10 yıldır bu konuda çalışmalarını devam ettirmekte ve başarılı bir şekilde kullanılmaktadır.
      </>
    ),
  },
  {
    title: 'İmplant Tedavisi Onur Küçükkağnıcı – Randevu',
    content: () => (
      <>
       Konya'da implant tedavisi yapan yerler arasında öncelikle 28 yıllık tecrübesi ile hizmet vererek fark yaratan Onur KÜçükkağnıcı Diş Kliniğinde tedavi olmak için aşağıdaki yöntemlerden biri ile muayene randevunuzu oluşturabilirsiniz.
       <br></br>
<br></br>
Artık siz de eksik dişlerinizi geç olmadan tamamlatın.
      </>
    ),
  },
  {
    title: 'İmplant Tedavisi Sonrası Yapılması Ve Yapılmaması Gerekenler',
    content: () => (
      <>
       Operasyon sonrası 2 saat boyunca herhangi bir şey yemeyiniz, içmeyiniz. İlk 24 saat sıcak içeceklerden kaçınınız ve sadece yumuşak, soğuk yiyecekler (soğuk püre, süt ürünleri ve dondurma) tüketiniz. İlk hafta sıcak yiyecek ve içeceklerden kaçınınız.
       <br></br>
<br></br>
Operasyon sonrasında pıhtılaşmayı başlatmak ve kanamayı durdurmak için yumuşak, steril bir tampon ile yumuşak baskı uygulanması önerilmektedir.
<br></br>
<br></br>
İlk 24 saat tükürükte kan görülmesi mümkündür-normal bir durumdur. Hatta sabah uyandığınızda yastığınızda kan izleriimplant dis beyazligigörebilirsiniz. İlk 24 saat, yara bölgesinin iyileşme sürecinin başlaması için tükürmeyiniz ya da ağzınızı çalkalamayınız.
<br></br>
<br></br>
Operasyon akşamı dişlerinizi fırçalamayınız ya da gargara kullanmayınız.
<br></br>
<br></br>
36 saat sonra ağzınızı 2 hafta boyunca günde iki defa ağız gargarası ile ya da tuzlu su (bir bardak ılık suya ¼ çay kaşığı tuz) ile gargara yapılması tavsiye edilir. 1 dakika boyunca gargara yapınız, tükürünüz ve sonrasındaki 30 dakika boyunca herhangi bir şey yemeyiniz, içmeyiniz.
<br></br>
<br></br>
İlk 24 saat sigara içmeyiniz, alkol almayınız. Operasyon bölgesi tamamen iyileşene kadar sigara içilmemesi uygundur.
<br></br>
<br></br>
Eğer diş hekimi tarafından antibiyotik ya da ağrı kesici verildiyse, önerilen şekilde kullanınız
<br></br>
<br></br>
İlerleyen günlerde operasyon bölgesinde kanama meydana gelirse, steril tampon ya da ıslak çay poşeti ile operasyon bölgesi üzerine baskı uygulayınız
<br></br>
<br></br>
İlk 2-3 gün operasyon bölgesinde şişkinlikler ya da hematom görülebilir, yanakta ya da göz altında gözlemlenebilir, bir hafta sonra kaybolurlar. İzlerin kaybolmasını hızlandırmak için operasyon alanına
<br></br>
<br></br>
İlk gün boyunca buz uygulanması (5 dakika buz ile uygulama yapılmalı, 5 dakika beklenmeli, bir kaç saat boyunca devam edilmeli) ve ilk 2 gece başınız yukarında olacak şekilde uyumanız önerilmektedir
<br></br>
<br></br>
Absorbe olan (kendiliğinden eriyen) dikişlerin ağızda 2 hafta kadar kalmaları beklenir ve alınmaları gerekmemektedir. Eğer absorbe olmayan (erimeyen) dikiş var ise diş hekimi tarafından 5-7 gün sonra alınmalıdırlar. Her iki durumda da operasyon sonrasındaki ilk hafta dikiş olan bölgeyi fırçalamayınız.
<br></br>
<br></br>
Herhangi bir problem meydana gelirse ya da herhangi bir sorununuz olursa diş hekiminize danışmaktan çekinmeyiniz.
<br></br>
<br></br>
İlk 24 saat için soğuk uygulaması tavsiye edilmektedir.
<br></br>
<br></br>
Dikişler 7 gün sonra alınmalıdır. Operasyon sonrası iki hafta boyunca günlük iki defa bir dakika boyunca gargara yapılması tavsiye edilmektedir.
      </>
    ),
  },
  {
    title: 'İmplant Ücreti Ortalama Maliyeti Nedir?',
    content: () => (
      <>
      Hiçbir hasta ya da kişiye özel diş implantı tedavileri birbirine benzemez, bu nedenle diş implantlarının randevuları, prosedürleri ve implant diş fiyatları kişiye göre değişir. Diğer diş tedavi seçeneklerinden farklı olarak, diş implantları dişleriniz ve ağızlarınız için özel olarak uyarlanmıştır - bu yüzden doğal görünürler.
      <br></br>
<br></br>
Dental implantların maliyeti, diğer tedavi seçeneklerine göre çok daha iyi bir karşılaştırma eğilimi gösteriyor, çünkü bir diş implantı tedavisi diğer tedavilere göre daha uzun ömürlüdür, hatta ömürlüktür. Önemlisi tedavinizin uzun ömürlü olması ve iyi bir sonuç alınması için, implant tedaviniz için deneyimli, sertifikalı bir diş hekimini tercih etmelisiniz. Diğer diş tedavi seçenekleri daha düşük bir ön maliyete sahip gibi görünebilir, ancak bu masrafı tekrar tekrar ödemeye devam edeceksiniz ve neticede diş implantlarına kıyasla pahalı hale gelecek.
<br></br>
<br></br>
ABD'de yapılan bir araştırmaya göre, tek bir dişin yerini alacak bir diş implantının maliyeti 3.000$ ila 4.500$ aralığındadır. Bununla birlikte, mümkün olan en düşük masrafı elde etmenin püf noktası, güvenilir bir uzmana kontrol ettirmektir.
<br></br>
<br></br>
Diş implantları için son derece düşük fiyatlı reklamlar görürdüğünüzde ne düşünüyorsunuz?  Bu implant diş fiyatları nın gerçek olamayacak kadar iyi olduğunu mu düşünüyorsunuz? Gerçek olamayacak kadar iyi görünen bir şey hakkında söylenenleri biliyorsunuzdur. Öyleyse anahtar, güvenebileceğiniz bir implant diş hekimine doğru soruları sormaktır:Bu fiyat, kemik takviyesi, yumuşak doku tedavisi, ekstraksiyon - gerekirse, abutment, kaplama ve geçici veya hemen yüklemeyi içeriyor mu? Kaplamanın neden imal edildiğini, implantın boyutunun ne olduğunu ve akla gelen diğer şeyleri sorun. Diş hekimleriniz, sorularınıza cevap vermekten mutluluk duyacaktır. Bu nedenle Implant uzmanı Diş Hekimi oluşturuldu, böylece ihtiyacınız olan cevapları elde edebilirsiniz ve uzmanı diş hekiminize şimdiki ve uzun vadede sizin için en güvenli ve en iyi tedaviyi planlamasında güvenin.
<br></br>
<br></br>
Buradaki kilit nokta, kimlik doğrulamasıdır. Herhangi bir diş hekimi implant yapabilir, ancak sertifikalı bir diş hekimi, deneyimi belgelenmiş tecrübesiyle sizin için implant tedavisinin en doğru ve uzun ömürlü şekilde planlamasını yaparak, implant tedavisi nin masraflarını hem anlık ve hem de uzun vadede maliyetinizi en düşük düzeye indirecek.
<br></br>
<br></br>
Bu nedenle her zaman diş hekimine danışmalısınız: "AAID sertifikalı mısınız?" Umursamıyorlar ve soruyu sorarsanız gece daha iyi uyuyacaksınız.
<br></br>
<br></br>
İlk görüşme ve değerlendirme sonrasında, uzmanınız size tahmini randevu ve maliyet dahil olmak üzere bir tedavi planı sunacaktır ve işlem sırasında herhangi bir değişiklik olup olmadığını bildirir.
<br></br>
<br></br>
Muayene olmadan implant diş fiyatları için bir ücret teklifi alırsanız, dikkatli olmalısınız. Herkese-tek-fiyat implant tedavisi doğru bir yaklaşım değildir. Nitelikli, tecrübeli bir implant diş hekimi uzmanının göründükten sonra sizin için kişiselleştirilmiş bir tedavi planı ile alacağınız implant tedavisi fiyatı böyle herkese-tek-fiyat yaklaşımına göre daha düşük bir maliyet verebilir.
<br></br>
<br></br>
Dişleriniz, gülümsemenizi, özgüveninizi, yeme, konuşma ve zevk aldığınız herşeyi doğrudan etkilediğinden, eksik dişleri tedavi etmek için daha iyi bir seçenek olmadığından diş implantları doğru bir yatırımdır. Şu an seçenekleri keşfetmek için size yakın bir 3Gündediş hekimini bulun.
Diş implantları uzun vadeli bir yatırımdır. Kalifiye, tecrübeli bir implant uzmanı olduğundan emin olmak için doktorunuza "tarafından onaylanmış mısınız?" diye sorunuz.
      </>
    ),
  },
  {
    title: 'İmplant Diş Ücreti Neden Bu Kadar Yüksektir?',
    content: () => (
      <>
       İlk görüşme son derece önemlidir .Tedavinin geri kalanı için planlamanın çoğu bu aşamada  yapılacaktır. Diş hekimi de dişlerin sağlığını değerlendirecektir ve tedavinin önemli bir unsuru olan çene kemiğidir. İmplantlar başarısız olduğunda, genellikle planlama aşamasında kritik bir unsur kaçırılmıştır. Zaman kazanmak için, muhtemelen ilk danışmayı tedavinin ilk kısmıyla birleştirmeniz mümkün olacak. Bu ziyarette kesinlikle diagnostik görüntülemeye ihtiyacınız olacağının farkındasınız (muhtemelen panoramik bir röntgen filmi) .Bu, implant diş fiyatları için ek bir maliyetle getirebilir. Bu işlem için röntgen filmi kesinlikle gereklidir, ve onsuz implant yapacak bir profesyonele güvenmek istemeyebilirsiniz.
       <br></br>
<br></br>
Diş implantlarının tedavisinde genellikle iki randevu vardır; implantları yerleştirmek için bir tane ve sonrasında yaklaşık 3 ila 6 aylık bir iyileşme süresinden sonra, abutment ve kaplama(diş) yapılıp takılması. Bazı diş hekimleri, "hemen yükleme" implantları kullanır; bu implantlar, İmplant yerleştirildikten hemen sonra yerleştirilen geçici diştir. Hâlâ bir kalıcı diş için 3 ile 6 ay sonrasında ikinci bir randevu gereklidir. Bazı durumlarda, ek randevu gerekebilir bu sırada kalıcı diş yerleştirildikten sonra implantın ayarlanması gerekir.
<br></br>
<br></br>
Ayrıca, uzman muayenesi için implant diş fiyatları kapsamında ödeme yapmanız gerekebilir. Diş implantları restorasyon kategorisine girer ve kendi diş hekimliği implantoloji uzmanlığına sahiptir. İmplant cerrahı , periodontolog, oral cerrah veya implantolojide ileri eğitimli bir diş hekimidir. Uzmanlık eğitimi gerekliliği, prosedürü gerçekleştirmek için sizden daha yüksek bir ücret talep edebilir.
<br></br>
<br></br>
Bazı doktorlar, prosedür sırasında hastanın genel anestezi uygulamasını, yani hasta tüm prosedür boyunca uykuda olmasını isteyebilir. Bu daha pahalıdır ve bir anestezi uzmanının tüm ameliyat için hazır bulunmasını gerektirir. Bazı doktorlar buna gerek duymaz ve lokal anestezik kullanarak prosedürü uygulayacaktır; hasta üzerinde çalıştıklarında uyuşukluk yaşıyor ancak uyanık ve bilinci yerindedir. Bazı hastalar çok gergin olabilir bu nedenle işlem öncesi endişenizi hafifletmek için bir sakinleştirici kullanılması gerekebilir.
<br></br>
<br></br>
Çok sayıda kemik dokusu kaybetmiş hastalarda kemik grefti gerekebilir. Kemik greftleri, implant yerleştirilmeden birkaç ay önce ayrı bir prosedürle uygulanır ve greftin normal kemiğe kaynaşması için birkaç ay beklenmesi gerekir. Bu ilave prosedür, elbette ek maliyet anlamına gelecektir. Bu aynı zamanda prosedürün tek bir seferde gerçekleştirilemeyeceği anlamına gelir, çünkü greft kemik içine büyümek için zaman alır ve dokuların iyileşmesi için süre gerekir.
<br></br>
<br></br>
Teknolojideki ilerlemeler sayesinde, implantların daha öncekinden daha az kemikle yapılabilmesine rağmen, zayıf osseointegrasyon (implant kemik içine çok iyi kaynaşmadığı anlamına gelir), diş implantının başarısızlığının başlıca nedenlerinden biridir. Bu nedenle kemik grefti gerektiğinde atlanmaması gereken bir adımdır.Atlanması sonucunda oluşabilecek başarısızlık nedeniyle, muhtemelen implantın çıkarılması için ekstra bir maliyet ödemeniz gerekecek, bir kemik grefti ve daha sonra implant yeniden yerleştirilecek. Ayrıca, önemli periodontal hastalıklar (ağız dişeti veya diğer yumuşak dokularda hastalık) varsa, ameliyattan önce tamamen tedavi edilmeleri gerekecektir. Yurtdışında, periodontal tedavi, hastalığın ne kadar ileri olduğuna bağlı olarak, 54 USD'dan birkaç yüz dolara mal olabilir. Bu, aynı zamanda, etkilenen bölgeler iyileştikçe prosedürün gecikmesine neden olacaktır.
      </>
    ),
  },
  {
    title: 'İmplant Tedavisi Fiyatına Ne Dahil Edilmelidir?',
    content: () => (
      <>
       Satın aldığınız implant üç parçadan oluşur: implantın kendisi, yapay diş ve abutment (dişi implanta bağlayan). Çoğu durumda, fiyat bir klinikte sadece kemiğe vidalanan implantın bedeli olduğunu gösterir ve abutment ve yapay diş dahil değildir. Herşey dahil olmak üzere tüm işlem ve parçalar için fiyat istediğinizden emin olun cerrahi, anestezi, anestezi uzmanı ve cerrahide yer alan diğer ücretler dahil olarak.
      </>
    ),
  },
  {
    title: 'SGK De Diş İmplantı Tedavisi Olabilirmiyim?',
    content: () => (
      <>       
En çok sorulan soruların başında kuşkusuz bu gelmektedir.Devlet güvencem var implant tedavisi ücretimi karşılar mı? Sosyal Güvenlik Kurumu implant tedavisini kapsar mı? Birçok yanlış bilgi olması nedeniyle hastaların kafası karışmaktadır.Ne yazıkki devlet sağlık kuruluşlarında şu aşamada implant tedavisi masraflarını ve implant diş fiyatları nı karşılamamaktadır. Kaldı ki özel bir sağlık kuruluşuna başvurmanız durumunda bunun tamamını kendi cebinizden ödemek durumunda kalıyorsunuz.
<br></br>
<br></br>
Bazı özel sağlık sigortaları, kişinin özel sağlık kurumundaki implant tedavisi ücretinin bir kısmını veya tamamını karşılayabilmektedir.Bunu ancak bağlı olduğunuz özel sağlık sigortasına arayarak kesin bir şekilde öğrenebilirsiniz.
      </>
    ),
  },
  {
    title: 'İmplant Tedavisi Nedir?',
    content: () => (
      <>
       Bir implant tedavisi, eksik dişinizin yerini tutan ve çene kemiğinin içine yerleştirilen bir vidadır. Vidanın etrafında bir iyileşme gerçekleştiği zaman, yapay bir diş veya kron ona bağlanır. İmplantlar çok dayanıklıdır ve eksik dişlerin yerine kullanılan çok uzun süreli bir çözümdür. İmplant tedavisi şu anda, diğer tüm diş tedavi seçeneklerine kıyasla en yüksek başarı oranına ve dayanıklılığa sahipler. Bir implant doğal dişinize benzer ve aynı görevi yerine getirir.
      </>
    ),
  },
  {
    title: 'İmplant Tedavisi',
    content: () => (
      <>
      İmplant Tedavisi yapılabilecek en iyi yatırımdır.
      <br></br>
<br></br>
Hepimiz harika bir diş dizisinin ve güzel bir gülümsemenin ne kadar önemli olduğunu biliyoruz. Bir dişi kaybetmek, kendimize daha az güven duymamıza, yemek yeme kabiliyetimizi ve hayatın kalitemizin en yüksek seviyede zarar görmesine neden olabilir. Kaybettiğimiz dişler için implant tedavisi yapılabilecek en iyi yatırımdır. 
      </>
    ),
  },
  {
    title: 'Eksik Bir Dişin Etkisi',
    content: () => (
      <>
      Tek bir eksik dişin kalan dişlerinizin ısırma gücünü etkileyebileceğini biliyor muydunuz? Geriye kalan dişler boşluklara eğilebilir, yer değiştirebilir ve yiyecekler bu alanlara sıkışabilir. Bu, diş çürüğü ve diş eti hastalığına yüksek bir risk oluşturur. Eksik dişlerin etkisi, gülümsemediğiniz zaman dahi görülebilir; çünkü dişlerin desteğinin eksildiği durumlar birçok insanda, yüz kaslarının sarkması ve kırışıklıkların artması şeklinde gözlemlenebilir. 
      </>
    ),
  },
  {
    title: 'Tedavimiz Neden Farklıdır',
    content: () => (
      <>
       implantları ve sistemleri, bugün mevcut en iyi implant tedavisi sağlamak için en güncel teknikleri ve sistemleri kullanmaktadır:
       <br></br>
<br></br>
Aynı gün veya en geç 3. gün sizi kalıcı, sürekli ve klinikten çıkar çıkmaz kullanabileceğiniz sabit diş sahibi yapıyoruz.
Diş eti kesilmeden, kanamasız ve dikişe gerek olmakısızın implantlarınızı yerleştiriyoruz.
İmplant dişleriniz, en son teknoloji kullanılarak kaliteli malzeme kullanarak en hızlı şekilde yapıyoruz.
Diş eti hastalıkları, sigara kullanımı, şeker hastalıkları dahil bütün sistemik hastalıklarda dahi sizi tedavi edip sabit ve kalıcı diş sahibi yapabiliyoruz.
Eski dişlerinizin çekilmesi gerektiği durumlarda dahi (dişleri çekip 2ay beklemeye gerek olmadan) hemen çekim sonrası implatları yerleştiriyoruz.
Biz güvenilir olduğu kanıtlanmış malzemeleri kullanan, iyi bilinen ve iyi araştırılmış implant sistemi yerleştiriyoruz.
<br></br>
<br></br>
Kemik eksikliği nedeniyle implant tedavisi ne uygun olmadığını söylenen birçok hastayı tedavi ettik. Bu sorunun üstesinden gelmek için, implant yerleştirmenize olanak sağlamak için gerçek ya da sentetik kemik kullanılarak kemiğin yeniden oluşturulması için özel prosedürler bulunmaktadır, ancak implantlarında buna gerek kalmaksızın tedavi ediyoruz.
      </>
    ),
  },
  {
    title: 'İmplant Tedavisinin Aşamaları Nelerdir?',
    content: () => (
      <>
       Konsültasyon. İlk ziyaretiniz implant tedavisi uygulanacak bölgeyi değerlendirmek için diş hekimlerimizle dostane bir görüşme şeklinde olacaktır. Tedavinizi planlamak için bazı röntgen filmleri, fotoğraflar ve diş kalıpları alacağız. Endişelerinizi dikkatle dinleyeceğiz ve devam etmeden önce sormak istediğiniz tüm soruları cevaplayacağız.
       <br></br>
<br></br>
implant tedavisi. Tedavi planında hemfikir olduğumuzda, bir sonraki adım implant yerleştirmektir. Dişhekimimiz küçük bir cerrahi işlem ve lokal anestezi yapacaktır. Tecrübe edeceğiniz işlem dolgu yapmaktan çok farklı değildir ve genellikle 20 dakika sürer. Ameliyatın yapıldığı yerde diş etine kesi yapılmadığında, dikiş dahi olmayacaktır. İmplant tedavisi alanı çevresinde diş etinde bir kesi olmadığı için herhangi bir şişkinlik yaşamayacaksınız. Size hızlı bir iyileşme sağlamak için ilaç verilecektir. Günlük işlerinize işlem sonrasında devam edebileceksiniz.
<br></br>
<br></br>
İyileşme Süresi. Eski tip implantlarda kemiğin implant tedavisinden sonra tamamen kaynaşması genellikle 3 ay sürer. implantlarında bu tarz bir süreye ihtiyaç yoktur.Özel tasarımı sayesinde hemen üstüne diş konup kullanmaya başlayabilirsiniz.
<br></br>
<br></br>
İmplant kron yerleşimi. İmplantların yerleştirilmesini takiben hemen ağızda dişssiz bölgenin ve implantların bir kalıbı alınarak yapay kalıcı ve sabit dişleriniz yapılır.Bu süre eksik diş sayısına göre 1 ile 3 gün arasında değişiklik gösterir.
      </>
    ),
  },
  {
    title: 'İmplant Diş Nedir?',
    content: () => (
      <>
       İmplant diş çeşitli sebeplerle kaybedilen dişlerin yerine çene kemiğine yerleştirilen suni titanyum diş kökleridir. İmplant diş geleneksel kaplama ve protezlere göre daha iyi konuşma ve çiğneme fonksiyonu sağlarken, yüzünüzde doğal bir görünümü de beraberinde getirir.
       <br></br>
<br></br>
Rahat ve güvenilir bir işlem olan implant diş operasyonu, lokal anestezi ile hiç bir ağrı ve rahatsızlık duyulmadan yapılabilir. Gerekli durumlarda genel anestezi de uygulanabilir. Ancak şunu unutmamak gerekir, implant diş uygulanabilmesi için, sağlıklı diş etleri ve implantı destekleyecek ehil kemik yapısının bulunması şarttır.
<br></br>
<br></br>
İmplant diş tedavisi rahat ve güvenli bir uygulama mıdır?
İmplant diş tedavileri, tam steril ortamda uzman bir ekip ile yapıldığı müddetçe güvenli ve huzurlu bir uygulamadır.
<br></br>
<br></br>
İmplant diş tedavilerinin bir ayağını cerrahi işlem oluştururken diğer ayağını protez işlemi oluşturmaktadır. Bu nedenle protez uzmanı ile ağız diş ve çene cerrahisi uzmanının birbiri ile ahenk içerisinde emek harcaması oldukça önemlidir.
      </>
    ),
  },
  {
    title: 'İmplant Diş Kimlere Uygulanabilir?',
    content: () => (
      <>
       İmplant diş tedavisinin başarısı, çene yapısına ve çene kemiğinin yeterliliğine bağlıdır. Yeterli kemik yoğunluğu bulunmayan hastalara yoğunluğun azca olduğu bölgelere yapay kemik tozu uygulaması yapılarak implant operasyonları gerçekleştrilmektedir.
       <br></br>
<br></br>
İmplant diş tedavileri için üst yaş sınır bulunmamakla birlikte, 18 yaşını doldurmuş yani kemik gelişimini tamamlamış tüm hastalara implant diş tedavisi uygulanabilir.
<br></br>
<br></br>
Ayrıca test edilemeyen diyabet, gerilim, kan pıhtılaşma sorunu olan ve ileri derecede kalp rahatsızlığı olan kişilere implant diş operasyonları öncesi hekimlerinden izin almadan operasyonları gerçekleştirilmemektedir.
<br></br>
<br></br>
implant diş tedavisinin avantajları
<br></br>
<br></br>
İmplant Diş tedavisinin avantajları nelerdir?
• İmplant diş uygulaması sonrası meydana getirilen protezler doğal dişe en yakın yapıyı oluştururlar.
<br></br>
<br></br>
• Geleneksel protezlere oranla daha iyi çiğneme ve konuşma fonksiyonu sağlamaktadırlar.
<br></br>
<br></br>
• Diğer protezlere oranla daha güzel duyu görünüme haizdir.
<br></br>
<br></br>
• İmplant diş sayesinde diş eksikliği yandaki sağlam dişlere dokunulmadan giderilebilmektedir.
<br></br>
<br></br>
• Total protezlerde tutuculuğun artmasını sağlar. Şöyle ki, özellikle alt çene total protezlerinin tutuculuğu oldukca azdır. Bu nedenle hastada yeterli kemik seviyesi olmasa bile, alt çeneye 2 implant yerleştirerek, tutuculuk artmaktadır.
      </>
    ),
  },
  {
    title: 'İmplant Diş Ömrü Ne Kadardır?',
    content: () => (
      <>
       • İmplantların ömür boyu sorunsuz kaldığı gözlemlenmiştir. Ancak, implant diş ömrünün uzunluğunu etkileyen birçok unsur bulunmaktadır. Bunların başında hastanın ağız hijyenine ne kadar önem verdiği gelir.
       <br></br>
<br></br>
• Her gün minimum 2 defa protezlerinizi doğru bir biçimde fırçalamanız gerekmektedir. Etkili fırçalama teknikleri hakkındaki doktorunuzdan bilgi alabilirsiniz.
<br></br>
<br></br>
• Diş aralarını ve implantınızın çevresinde biriken yiyecek artıklarını ortamdan uzaklaştırmak için ara yüz fırçası ya da diş ipi kullanmanızda fayda var.
<br></br>
<br></br>
• Ağız hijyeninin sağlanması için gargara veya ağız duşu kullanabilirsiniz.
      </>
    ),
  },
  {
    title: 'Hızlı İmplant Tedavisi Nedir?',
    content: () => (
      <>
       İmplant tedavisi, diş ekskikliklerinde sıkça başvurulan bir tedavi şekli olan kemik içerisine kökün yerini tutan vidanın yardımı ile eksikliğin giderilmesidir. Eski vida-implant sistemlerinde etrafında yeni oluşan çene kemiği yani çene kemiğinin implantla kaynaşması olarak da bilinine bir süreç gereklidir. Buna osteintegrasyon denmektedir. Diğer eski sistemlerden farklı olarak implantlarında buna gerek yoktur. Hızlı implant tedavisi ise bu kaynaşma gerekmeksizin yada beklenmeksizin çok kısa bir sürede geçici diş takılarak hemen implant - hızlı implant olarak adlandırılan tedavinin bitirilmesidir.
      </>
    ),
  },
  {
    title: 'Hızlı İmplant Diş Tedavisinin Süresi Nedir?',
    content: () => (
      <>
      Herkes en hızlı, en kaliteli ve en ucuz tedaviyi istemektedir. Ancak bu pratikte ne kadar mümkündür tartışılır.Mevcut piyasadaki implant sistemlerinde hemen yükleme implant ile diş takılarak neticelenmesi için belli başlı şartların oluşması gerekmektedir. Bunların en başında kemiğin kalitesi olarak adlandırdığımız genişliği-yüksekliği ve sertliği en belirgin faktördür. Diğer implantlardan farklı olarak implantlarında böyle bir gereksinim yoktur ve her kemik seviyesinde implant takılarak tedavi olabilirsiniz.
      <br></br>
<br></br>
Eski implant sistemlerinde hızlı implant tedavisi ancak bu şartlar sağlandığında yapılabilir ve ilk sağlamlığı iyi olan bir implant üstüne diş takılması ile başarılı olabilir. Aksi gibi bir durumda hemen implant tedavisinin yani implant dişin sallanıp düşmesi - başarısız olması kaçınılmazdır. Ayrıca takılan dişin geçici olduğu yani implant ile kemiğin kaynaşması sonrası asıl dişinizin takılacağı bunun da en az 60-90 gün olduğu unutulmamalıdır. Oysaki implant ve sistemlerinde bu süre sadece 3 gündür ve direk kalıcı dişiniz takılmaktadır. 
      </>
    ),
  },
  {
    title: 'Hemen İmplant Ne Kadar Güvenilir?',
    content: () => (
      <>
       Hızlı implant eğer doğru bir şekilde deneyimli bir hekim tarafından yapılırsa son derece güvenilirdir. Ancak unutulmaması gereken şey eski implant sistemleri kullanılarak yerleştirilen vida implant tedavisi sonrası takılan hemen yükleme implant üstü diş geçicidir plastiktir ve kırılgandır. Diğer implantlardan farklı olarak implantlarında hemen kullanabileceğiniz kalıcı dişiniz takılmaktadır. Ayrıca implant, kemik ile gerekli oranda kaynaşmış olmadığı için (eski implant sistemlerinde bu üst çenede 90 gün alt çenede 60 gündür) bu gibi dişler aşırı yüklenmekten kaçınılmalıdır yoksa tedavi kesin bir şekilde başarısızlık ile sonuçlanacaktır. implantlarında klinikten çıkar çıkmaz kısıtlama olmaksızı hemen dişlerinizi kullanmaya başlayabilirsiniz.
      </>
    ),
  },
  {
    title: 'Hızlı İmplant Tedavisi Neden Farklıdır?',
    content: () => (
      <>
       İmplantları ve sistemleri, bugün mevcut en hızlı implant tedavisi olup en son teknolojiden yararlanarak tasarlanmıştır.Neden mi?
       <br></br>
<br></br>
Bir ile üç gün içinde kalıcı, sürekli ve klinikten çıkar çıkmaz kullanabileceğiniz sabit diş sahibi olurusunuz.
Diş eti kesilmeden, kanamasız ve dikişe gerek olmakısızın implantlarınızı yerleştirilir.
Hızlı implant tedavisi dişleriniz, en son teknoloji ve kaliteli malzeme kullanılarak en hızlı şekilde yapılır.
İmplant tedaivisi için kontraendike olan sistemik rahatsızlıklar ve kötü alışkanlıklar; diş eti hastalıkları, sigara kullanımı, şeker hastalıkları, ileri kemik erimesi dahil tedavi olup sabit ve kalıcı diş sahibi olabilirsiniz.
Eski dişlerinizin çekilmesi gerektiği durumlarda (dişleri çekip 2ay beklemeye gerek olmadan) hemen çekim sonrası implatlarınız yerleştirilir.
<br></br>
<br></br>
Kemik eksikliği nedeniyle implant tedavisi ne uygun olmadığını söylenen birçok hastayı tedavi ettik. Bu sorunun üstesinden gelmek için, implant yerleştirmenize olanak sağlamak için gerçek ya da sentetik kemik kullanılarak kemiğin yeniden oluşturulması için özel prosedürler bulunmaktadır, ancak implantlarında buna gerek kalmaksızın tedavi ediyoruz.
<br></br>
<br></br>
Hızlı implant tedavisinin aşamaları nelerdir?
<br></br>
<br></br>
Ön görüşme. İlk randevunuz endişelerinizi dikkatle dinleyeceğiz ve devam etmeden önce sormak istediğiniz tüm soruları cevaplayacağız. Eksik diş bölgesini değerlendirmek için diş hekimlerimizle bir görüşme şeklinde olacaktır. Tedavinizi planlamak için kaydınız yapılıp; röntgen filmleri, fotoğraflar ve diş kalıpları alacağız.
<br></br>
<br></br>
Hızlı implant tedavisi. Tedavi planında uzlaşı sağlandığında, sonraki adım implantların yerleştirilmesidir. Doktorunuz lokal anestezi yapacaktır. Bütün işlem dolgu yapmaktan çok farklı değildir ve genellikle 30 dakika sürer. Ameliyatın yapıldığı yerde diş etine kesi yapılmadığında, dikiş olmayacaktır. İmplant tedavisi yapılan bölgede diş etinde bir kesik olmadığından herhangi bir şişkinlik yaşamayacaksınız. Günlük işlerinize işlem sonrasında devam edebileceksiniz.
<br></br>
<br></br>
İyileşme Süresi. Eski tip implantlarda kemiğin implant tedavisinden sonra tamamen kaynaşması genellikle 3 ay sürer. implantlarında bu tarz bir süreye ihtiyaç yoktur. Özel tasarımı sayesinde hemen üstüne diş konup kullanmaya başlayabiliceksiniz.
<br></br>
<br></br>
İmplant kron yerleşimi. İmplantların yerleştirilmesini takiben hemen ağızda dişssiz bölgenin ve implantların bir kalıbı alınarak yapay kalıcı ve sabit dişleriniz yapılır.Bu süre eksik diş sayısına göre 1 ile 3 gün arasında değişiklik gösterir.
      </>
    ),
  },
  {
    title: 'Kaybedilen Her Diş İçin Bir İmplant Mı Gerekir?',
    content: () => (
      <>
       Yeterli kemik varsa diş hekimlerinin tercihi her zaman kaybedilen her dişin yerine bir implant uygulanmasıdır. Ancak bazı durumlarda iki implant aralıklı yerleştirilip üzerine köprü protezi yapılabilir. Yerleştirilecek implantın sayısı ancak hekimin klinik ve radyografik muayenesinden sonra belirlenebilir.
       <br></br>
<br></br>
Damak (hareketli) protez kullanan hastalarda implant tedavisinden yararlanabilir mi?
<br></br>
<br></br>
Günümüzde tamamen dişsiz ağıza sahip hastalar bile yeterli kemikleri varsa doğrudan, yoksa kemik oluşturma işlemi sonrası yapılacak implantlar sayesinde hareketli protezlerden kurtulabilirler. Özellikle dişsiz alt çenede takıp çıkarmalı bir protez kullanılması hasta için oldukça zordur çünkü, içeride sürekli oynayan bir dil dışarıda yanak ve dudak konuşma ve yemek yeme esnasında hastaya oldukça sıkıntı verirler. Alt çenede dil, dudak, yanak ve çiğneme hareketleri ile sabit duramayan ve sıklıkla vuruk yapan protez ile ilgili sorunlar, implant uygulamaları ile giderilebilir.
<br></br>
<br></br>
Ayrıca üst total protezlerin tutuculuğunu sağlayabilmek için yapılan damağı kapatan tasarımdan dolayı oluşan mide bulantısı gibi sorunlar da ortadan kaldırılmış olur. Bu durumda sabit ya da takıp çıkarılan implant destekli protezler yapılabilir. Her iki tip protezde de oynama ve bulantı şikayetleri ortadan kalkar.
      </>
    ),
  },
  {
    title: 'İmplantların Sağladığı Yararlar Nelerdir?',
    content: () => (
      <>
       Kaybedilmiş dişin yerine implant ile yeni diş yapılması çevre dişlerin ve tüm çiğneme sisteminin sağlığı ve fonksiyonu için önemlidir. Doğal diş formunda, estetik ve çiğneme fonksiyonunu yerine getiren bir diş elde edilirken, çevredeki dişlerin kayıp diş boşluğuna kayması ve diğer dişlerdeki şekil bozuklukları da engellenmiş olur. Ayrıca diş çekimi sonrası oluşan boşlukta zamanla meydana gelen kemik kaybı implant yapıldığında engellenir.
      </>
    ),
  },
  {
    title: 'İmplant İşleminin Köprü Yapımı İle Karşılaştırıldığında Avantajı Nedir ?',
    content: () => (
      <>
       Tek diş eksikliği veya birden fazla diş eksiklikliğinin olduğu hastalarda klasik köprü yapımında kayıp boşluğun önündeki ve arkasındaki dişlerin kesilmesi, küçültülmesi ve madde kaybına neden olunması söz konusudur. Fakat implant uygulaması yapıldığında herhangi bir dişin kesilmesine gerek kalmadan eksik dişin önce kökünü taklit eden implant yerleştirilmekte daha sonra ise üst protezi (diş) yapılarak dişsizlik giderilmektedir.
      </>
    ),
  },
  {
    title: 'Her Hastaya İmplant Uygulanabilir Mi?',
    content: () => (
      <>
       İmplant uygulaması bazı istisnai durumlar haricinde herkese uygulanabilen başarılı bir tedavi şeklidir. İmplantın yerleştirilebileceği kalınlıkta, yükseklikte ve kalitede kemiği olan ve herkese ‘’sistemik sağlık durumu’’ değerlendirilerek implant yapılabilir.
       <br></br>
<br></br>
Bir kişide yeterli kemik dokusu olması bazı etkenlere bağlıdır. Bazı kişilerde kalıtımsal olarak çok ince/kalın ya da az/çok kemik olabilir.
Bazı kişilerde ise diş ve dişeti iltahapları çevrelerindeki kemik dokusunun erimesine ve azalmasına sebep olurlar. Bu nedenle bir dişin çekimine karar verilmişse kemik kaybına neden olmamak için çekimin hemen yapılmasında fayda vardır.
<br></br>
<br></br>
Bazı durumlarda çekimden sonra implant yapılmadan beklenebilmekte, bazı vakalarda ise çekim yapıldığı seansta implant yerleştirilebilmektedir.
      </>
    ),
  },
  {
    title: 'İmplantları Vücudun Kabul Etmemesi Gibi Bir Durum Olabilir Mi?',
    content: () => (
      <>
       Vücudun implantı kabul etmemesi söz konusu değildir, implantların insan vücudunda bilinen hiçbir yan etkisi ya da alerjik reaksiyonu yoktur ancak bazı hastalar implant uygulaması için uygun olamayabilir.
      </>
    ),
  },
  {
    title: 'Hangi Durumlarda İmplant Uygulaması Risklidir?',
    content: () => (
      <>
       • İyileşmeyi etkileyen diyabet ve kronik kardiyovasküler hastalıklar
       <br></br>
<br></br>
• Kemik gelişimi tamamlanmamış olan genç hastalar
<br></br>
<br></br>
• Hamileler
<br></br>
<br></br>
• Çok miktarda sigara kullanan kişiler (sigara kullanımı ağız içindeki iyileşmeyi baskılar ve implant başarısının düşmesine neden olabilir)
<br></br>
<br></br>
• Alkol ya da uyuşturucu madde bağımlıları
<br></br>
<br></br>
• Baş ve boyun bölgesine yüksek dozda radyoterapi uygulanmış kişiler
<br></br>
<br></br>
• Yüksek tansiyon, bağ dokusu hastalıkları, hemofili ve önemli bağışıklık sistemi yetersizlikleri gibi kronik hastalıkları olan kişiler
<br></br>
<br></br>
• Kortikosteroid ya da immun sistemi baskılayıcı ilaç kullanan bireyler
<br></br>
<br></br>
Bu hasta gruplarında implant uygulaması risklidir, başarısızlıkla sonuçlanabilir. Ancak durumlarının derece ve ciddiyetine bağlı olarak implant yerleştirilmesi mümkün olabilir. Bu konuda son karar ‘’sistemik konsültasyon yapmak kaydı ile’’ diş hekimine aittir.
      </>
    ),
  },
  {
    title: 'İlk Muayenede Ne Yapılır?',
    content: () => (
      <>
       İlk muayenenin amacı diş eksikliğinizin olduğu bölgenin implant yapılması için uygun olup olmadığının belirlenmesidir. Sistemik sağlığınız hakkında alınan detaylı bilginin ardından ağız içi muayeneniz yapılır. İlgili bölgelerden panoramik radyografi veya üç boyutlu görüntü (tomografi) alarak modelleme yapılır ve implanta uygunluğunuza ve hangi tür implant uygulanacağına karar verilir.
      </>
    ),
  },
  {
    title: 'İmplant Öncesi Tomografi Çektirmek Zorunlu Mudur?',
    content: () => (
      <>
       İmplant tedavisi öncesi görüntüleme çok önemlidir. Üç boyutlu görüntüleme yöntemleri çene kemiklerinin durumunu çok net gösterdiği için, tomografiler implantın yapılabileceği kalitede kemik olup olmadığının belirlenmesinde kullanılmakta ve ameliyat başarısının artırmaktadır.
      </>
    ),
  },
  {
    title: 'İmplant Tedavisi Nasıl Yapılır, Hangi Süreçleri İçerir?',
    content: () => (
      <>
       İmplant uygulaması günümüzde çok basit ve ağrısız bir uygulamadır. Önce lokal anestezi ile bölge uyuşturulur, implant yerleştirilecek kemikte bir yuva hazırlanır ve implant yerleştirilir. İmplant yerleştirildikten sonra, iyileşme döneminde implant üzerinde kalacak olan vidalar yerleştirilir ve iyileşme dönemi beklenir.
       <br></br>
<br></br>
Diş implantlarının çiğnemeyle oluşan basınçlar karşısında sağlıklı olarak kalabilmesi için, çene kemiği ile tam olarak kaynaşması gereklidir. Bu süre operasyonun türü, bölgesi, hastanın yaşı ve sağlık durumuna göre değişiklik gösterir. Operasyondan sonra kalıcı protezlerin yapımı için en az 5 hafta, en fazla 3 ay gibi bir süre gereklidir. Kemik yetersizliğinde yeni kemik oluşturulmuş bölgelere yapılan implantlarda bekleme süresi uzayabilir.
Sonrasında ölçü alınır ve planlanan protez yapılır.
      </>
    ),
  },
  {
    title: 'Flepsiz (Dikişsiz) İmplant Cerrahisi Nedir?',
    content: () => (
      <>
       Dişeti kesilmeden ve dikiş atılmadan implant yapılmasına flepsiz implant cerrahisi denilir. Bu işlemde yumuşak dokular zarar görmeden implant cerrahisi gerçekleştirildiği için iyileşme daha hızlı ve daha konforlu olmaktadır. Her vaka bu teknik için uygun olmayabilir. Bu konudaki kararı hekiminiz ilk muayenenizin sonunda verecektir.
      </>
    ),
  },
  {
    title: 'Cerrahi İşlem Ne Kadar Sürer?',
    content: () => (
      <>
       İmplant uygulamaları cerrahi işlemlerdir. Uygulanacak implant sayısına ve uygulanacağı bölgede kemik kalitesini artırmaya yönelik ek işlemler yapılıp yapılmayacağına bağlı olarak süre değişebilir. Ancak, asıl önemli olan işlem süresinden çok, kişiye uzun süreler hizmet edecek kriterlerle implant uygulaması yapmaktır.
      </>
    ),
  },
  {
    title: 'İmplant Uygulanırken Ne Kadar Ağrı Duyarım?',
    content: () => (
      <>
       Tüm cerrahi işlemler lokal anestezi ile yapılacağından işlem sırsaında ağrı duymazsınız. Lazer destekli olarak yapılan uygulamalarda genellikle işlem sonrası şiş ve ağrı da minimum seviye de olur. Hekiminiz tarafından verilen ağrı kesiciler işlem sonrası hissedeceğiniz ağrıyı engelleyecektir.
      </>
    ),
  },
  {
    title: 'İmplant Uygulaması Günlük Yaşantımı Ne Kadar Etkiler?',
    content: () => (
      <>
       İmplant cerrahisi sonrasında işlem yapılan bölgeye hekiminizin önerisi doğrultusunda belirli aralıklarla soğuk uygulaması yapmanız önemlidir. Bu, ödem ve şişliği engelleyecektir. Hekiminiz tarafından size verilecek ilaçları düzenli kullanmanız ve iyileşmeyi hızlandırmak amaçlı uygulanan düşük dozlu lazer uygulamaları da iyileşme döneminde önemlidir. Bu dönemde ağız bakımınız çok iyi olmalıdır.
       <br></br>
<br></br>
Kötü bir ağız hijyeni implant başarısızlıklarının en önde gelen nedenlerindendir. Diş hekiminizi iyileşme döneminde de belli aralıklarla görmelisiniz.
      </>
    ),
  },
  {
    title: 'İmplant Yapıldıktan Sonra Nasıl Beslenmeliyim?',
    content: () => (
      <>
       Operasyondan sonraki ilk birkaç gün sıcak yiyecek ve içeceklerden uzak durmalısınız. Daha çok yumuşak ve besleyici gıdalar tüketmelisiniz. Yara yerindeki iyileşme tamamlandıktan sonra yeme-içme konusunda herhangi bir kısıtlama kalmamaktadır.
      </>
    ),
  },
  {
    title: 'İmplant Yapıldıktan Sonra Nasıl Bir Ağız Bakımı Uygulamalıyım?',
    content: () => (
      <>
       Doğal dişlerimizi nasıl düzenli fırçalıyorsak aynı şekilde implant yapılan bölgeyi de fırçalamalıyız. Diş fırçası ve macunla yaptığınız bakıma dişipi ve arayüz fırçalarının rutin kullanımını da eklemelisiniz. Böylece ağızda oluşan bakteri miktarı azaltılabilir.
Gargara kullanımı ağız hijyenine katkı sağlayacaktır.
      </>
    ),
  },
  {
    title: 'Diş Çekimi Yapılıp Aynı Seans İmplant Uygulaması Yapılabilir Mi?',
    content: () => (
      <>
       Dişi çekip hemen implant yapılmasına "immediat implant uygulaması" ismi verilir. Uygun koşullar sağlandığında tercih edilebilen bir tekniktir. Bu işlemde en büyük risk diş çekim soketinde bulunan enfekte dokulardır.
       <br></br>
<br></br>
Enfekte dokuları seçici olarak temizleme imkanını bize Er:YAG lazerÇekim sonrası hemen yapılan implant uygulamalarında doğru teknik uygulanırsa kemik kaybı olma ihtimali azalmaktadır.
      </>
    ),
  },
  {
    title: 'İmplant Yapılacak Bölgede Yeterli Kemik Yoksa Nasıl Bir Yöntem Uygulanır?',
    content: () => (
      <>
       İmplant yapılacak bölgedeki kemiğin yoğunluğu, yüksekliği ve kalınlığı önemlidir. Bu implantın başarısını doğrudan etkiler. Kemiğin yeterli olmadığı durumlarda kemik miktarını artırmak için değişik tekniklerle (kemik greftleri kullanılarak) kemik oluşturmak gereklidir. Bu işlem için üst arka bölgede sinüs lift, blok greftleme, alt çenede yatay ve dikey yönde kemik oluşturma işlemleri yapılabilir.
      </>
    ),
  },
  {
    title: 'İmplant Sonrası Protezlerim Yapılana Kadar Dişsiz Mi Kalacağım?',
    content: () => (
      <>
       Diş eksikliğinizin sayısına bağlı olarak ne tür bir geçici protez yapılacağına yine hekiminiz karar verecektir. Eğer fazla diş eksikliğiniz varsa bu dönemde geçici hareketli protez yada uygulanan yönteme göre sabit bir protez kullanabilirsiniz. Tam dişsizliklerde ve bazı durumlarda kısmi dişsizliklerde Bredent Fast&Fixed tekniği uygulanarak anında sabit geçici diş yapmak mümkündür.
      </>
    ),
  },
  {
    title: 'Fast&Fixed Tekniği Nedir?',
    content: () => (
      <>
       Arka bölgelerde kemik eksikliği olan durumlarda Fast&Fixed tekniği ile açılı yerleştirilmiş implantlar kullanılarak ileri cerrahilere gerek kalmadan sabit protezler yapmak mümkündür. Bu teknik ile dişler çekildiği gün implantların yapılması, dişsiz hastalarda ise implantların yapılıp aynı gün sabit protez yapılması mümkündür.
      </>
    ),
  },
  {
    title: 'İmplantların Ömrü Ne Kadardır?',
    content: () => (
      <>
       Hasta ağzına yerleştirilmiş bir implantın kullanım süresini belirleyen en önemli faktör hastanın günlük bakımına gösterdiği özendir. Tüm hastalar gibi implant taşıyan hastalar da mutlaka 6 ayda bir diş hekimine başvurmalı ve diş temizliği yaptırmalıdır. Bu kontroller sırasında bir sorun tespit edilirse erken müdahale edilerek sorunların ilerlemesi de engellenebilir.
      </>
    ),
  },
  {
    title: 'İmplantların Dezavantajları Var Mıdır?',
    content: () => (
      <>
       İmplant malzemelerinin yüksek teknoloji ile üretilmesi ve kullanılan malzemelerin ithal olması nedeniyle, maliyeti klasik protezlere göre daha fazladır. Bir başka dezavantajı ise protezin uygulanabilmesi için implantın kemikle kaynaşmasının beklenmesi ve dolayısıyla genellikle diğer tedavi alternatiflerine göre tedavinin daha uzun sürmesidir.
      </>
    ),
  },
  {
    title: 'Vücutta Kemik Erimesi Varsa Ağızda Da Kemik Erimesi Var Anlamına Mı Gelir?',
    content: () => (
      <>
       Vücuttaki kemik erimesi ile ağızdaki kemik erimesi farklı sağlık sorunlarıdır. Vücutta yüksek oranda kemik erimesi olsa bile ağızda çok iyi bir kemik olabildiği gibi vücutta çok iyi bir kemik olduğu halde ağızdaki kemik seviyesi yetersiz olabilir.
      </>
    ),
  },
  {
    title: 'İmplant Yaptırdıktan Sonra Baş-Boyun Bölgesinden MR Ya Da Tomografi Benzeri Görüntülemeler Alınabilir Mi?',
    content: () => (
      <>
      Alınabilir. Ancak implantlar sadece çok yakın çevrelerinde ışık yansıması yapabilir, bu da çok yakın bölgede görüntü kalitesinin düşmesine neden olabilir. 
      </>
    ),
  },
  {
    title: 'İmplant Uygulamasında Başarısızlık Görülebilir Mi?',
    content: () => (
      <>
       Mevcut araştırmalar kök şeklindeki implantların cerrahi olarak yerleştirilmesinde zaman içinde % 98 başarı sağlandığını ortaya koymaktadır.Bu köprü protezlerinde 10 yıllık süreçte % 60 tır. Bu tip implantlar da başarısızlık genellikle cerrahi işlemden sonraki ilk bir yıl içerisinde ortaya çıkmaktadır. Bu süreden sonra her yıl implant başarısızlık oranı %1’e düşmektedir.
       <br></br>
<br></br>
Tedavinin başarısı hastanın iyileşme potansiyeli, sigara kullanımı, ağız hijyeninin durumu, diyabet gibi iyileşmeyi etkileyebilecek sistemik hastalıkların varlığı, kullanılan implantın markası ve hekimin cerrahi becerisi ile ilgilidir.
      </>
    ),
  },
  {
    title: 'İmplant Cerrahisi Sırasında Ne Tür Komplikasyonlar Görülür?',
    content: () => (
      <>
       Her cerrahi müdahale komplikasyon riski taşır. Kanama, enfeksiyon ve sinirlerde, sinüste ve nazal kavitedeki yaralanmalar bu komplikasyonlar arasındadır. İyi bir muayene ve radyolojik kontrol ile bu ihtimalleri en aza indirmek mümkündür.
       <br></br>
<br></br>
Üç boyutlu görüntüleme yöntemleri komplikasyonların azaltılmasında etkilidir. Ayrıca hekimin tecrübesi ve kullanılan implant sistemi de önemlidir. Örneğin bazı setlerde bulunan stoperler implant yuvası açan aletlerin kontrolsüz kullanımını engellerler.
      </>
    ),
  },
  {
    title: 'İmplant Pahalı Bir Tedavi Midir?',
    content: () => (
      <>
       İmplantta kullanılan titanyum % 99,9 saflıkla elde edilen çok ileri bir endüstri ürünüdür. Bu yüzden muayenehaneye giriş fiyatları yüksektir. İmplant tedavisinin ücretinin yüksek ya da düşük olması uygulanan implant markasına, işlem sırasında kullanılan yardımcı cerrahi malzemelere bağlıdır.
      </>
    ),
  },
  {
    title: 'İmplantın Markası Önemli Midir?',
    content: () => (
      <>
       İmplant markası olarak AR-GE çalışmalarına önem veren, uzun vadede başarısı gösterilmiş, teknik destek konusunda sıkıntısı olmayan ve protez üst yapı için yeterli seçeneği sunan implant sistemlerinin seçilmesinde fayda vardır. Ancak, implant uygulamasının başarılı olması hastanın iyileşme potaniyeli, sigara kullanımı, ağız hijyeninin durumu, diyabet gibi iyileşmeyi etkileyebilecek sistemik hastalıkların varlığı, ve hekimin cerrahi becerisi ile de ilgilidir.
      </>
    ),
  },

];

const Faq = () => (
  <Section id="blog">
    <Container>
      <h1 style={{ marginBottom: 40 }}>İmplant Tedavisi Hakkında Sık Sorulan</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
