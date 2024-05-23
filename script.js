$(document).ready(function () {

        const animes = [{
            id: 1,
            image1: "img/frieren.jpg",
            image2: "",
            image3: "",
            name: "Frieren: Beyond Journey's End",
            episodes: "28",
            genre: ["Fantasy", "Adventure", "Drama"],
            synopsis: "During their decade-long quest to defeat the Demon King, the members of the hero's party—Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren—forge bonds through adventures and battles, creating unforgettable precious memories for most of them. However, the time that Frieren spends with her comrades is equivalent to merely a fraction of her life, which has lasted over a thousand years. When the party disbands after their victory, Frieren casually returns to her usual routine of collecting spells across the continent. <br> Due to her different sense of time, she seemingly holds no strong feelings toward the experiences she went through. As the years pass, Frieren gradually realizes how her days in the hero's party truly impacted her. Witnessing the deaths of two of her former companions, Frieren begins to regret having taken their presence for granted; she vows to better understand humans and create real personal connections. Although the story of that once memorable journey has long ended, a new tale is about to begin.",
        },
        {
            id: 2,
            image1: "img/jjk.jpg",
            image2: "",
            image3: "",
            name: "Jujutsu Kaisen",
            episodes: "24",
            genre: ["Action", "Award Winning", "Fantasy", "School"],
            synopsis: "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the King of Curses. <br>  Yuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Prefectural Jujutsu High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer. ",
        },
        {
            id: 3,
            image1: "img/tiamhs.jpg",
            image2: "",
            image3: "",
            name: "The Irregular at Magic High School",
            episodes: "26",
            genre: ["Action", "Fantasy", "Romance", "Sci-Fi", "School"],
            synopsis: 'In the dawn of the 21st century, magic, long thought to be folklore and fairy tales, has become a systematized technology and is taught as a technical skill. In First High School, the institution for magicians, students are segregated into two groups based on their entrance exam scores: "Blooms", those who receive high scores, are assigned to the First Course, while "Weeds" are reserve students assigned to the Second Course. <br> Mahouka Koukou no Rettousei follows the siblings, Tatsuya and Miyuki Shiba, who are enrolled in First High School. Upon taking the exam, the prodigious Miyuki is placed in the First Course, while Tatsuya is relegated to the Second Course. Though his practical test scores and status as a "Weed" show him to be magically inept, he possesses extraordinary technical knowledge, physical combat capabilities, and unique magic techniques—making Tatsuya the irregular at a magical high school.',
        },
        {
            id: 4,
            image1: "img/cote.jpg",
            image2: "",
            image3: "",
            name: "Classroom of the Elite",
            episodes: "12",
            genre: ["Drama", "Suspense", "Psychological", "School"],
            synopsis: 'On the surface, Koudo Ikusei Senior High School is a utopia. The students enjoy an unparalleled amount of freedom, and it is ranked highly in Japan. However, the reality is less than ideal. Four classes, A through D, are ranked in order of merit, and only the top classes receive favorable treatment. <br>  Kiyotaka Ayanokouji is a student of Class D, where the school dumps its worst. There he meets the unsociable Suzune Horikita, who believes she was placed in Class D by mistake and desires to climb all the way to Class A, and the seemingly amicable class idol Kikyou Kushida, whose aim is to make as many friends as possible. <br> While class membership is permanent, class rankings are not; students in lower ranked classes can rise in rankings if they score better than those in the top ones. Additionally, in Class D, there are no bars on what methods can be used to get ahead. In this cutthroat school, can they prevail against the odds and reach the top? ',
        },
        {
            id: 5,
            image1: "img/sl.jpg",
            image2: "",
            image3: "",
            name: "Solo Leveling",
            episodes: "12",
            genre: ["Action", "Adventure", "Fantasy"],
            synopsis: "Humanity was caught at a precipice a decade ago when the first gates—portals linked with other dimensions that harbor monsters immune to conventional weaponry—emerged around the world. Alongside the appearance of the gates, various humans were transformed into hunters and bestowed superhuman abilities. Responsible for entering the gates and clearing the dungeons within, many hunters chose to form guilds to secure their livelihoods. <br> Sung Jin-Woo is an E-rank hunter dubbed as the weakest hunter of all mankind. While exploring a supposedly safe dungeon, he and his party encounter an unusual tunnel leading to a deeper area. Enticed by the prospect of treasure, the group presses forward, only to be confronted with horrors beyond their imagination. Miraculously, Jin-Woo survives the incident and soon finds that he now has access to an interface visible only to him. This mysterious system promises him the power he has long dreamed of—but everything comes at a price. ",
        },
        {
            id: 6,
            image1: "img/ce.jpg",
            image2: "",
            image3: "",
            name: "Cyberpunk: Edgerunners",
            episodes: "10",
            genre: ["Action", "Sci-Fi", "Gore", "Organized Crime"],
            synopsis: 'Dreams are doomed to die in Night City, a futuristic Californian metropolis. As a teenager living in the city slums, David Martinez is trying to fulfill his mothers lifelong wish for him to reach the top of Arasaka, the worlds leading security corporation. To this end, he attends the prestigious Arasaka Academy while his mother works tirelessly to keep their family afloat. <br> When an incident with a street gang leaves Davids life in tatters, he stumbles upon Sandevistan cyberware—a prosthetic that grants its wearer superhuman speed. Fueled by rage, David implants the device in his back, using it to exact revenge on one of his tormentors. This gets him expelled from the academy, shattering his hopes of ever making his mother proud. <br> After witnessing Davids newfound abilities, the beautiful data thief Lucyna "Lucy" Kushinada offers to team up with him, handing him a ticket to salvation. However, associating with Lucy introduces David to the world of Edgerunners—cyborg criminals who will break any law for money. Edgerunners often lose their lives, if the cyberware does not break their minds first; but in his fight for survival inside a corrupt system, David is ready to risk it all.',
        },
        {
            id: 7,
            image1: "img/pp.jpg",
            image2: "",
            image3: "",
            name: "Psycho-Pass",
            episodes: "22",
            genre: ["Action", "Mystery", "Sci-Fi", "Suspense", "Detective", "Psychological"],
            synopsis: 'Justice, and the enforcement of it, has changed. In the 22nd century, Japan enforces the Sibyl System, an objective means of determining the threat level of each citizen by examining their mental state for signs of criminal intent, known as their Psycho-Pass. Inspectors uphold the law by subjugating, often with lethal force, anyone harboring the slightest ill-will; alongside them are Enforcers, jaded Inspectors that have become latent criminals, granted relative freedom in exchange for carrying out the Inspectors dirty work. <br> Into this world steps Akane Tsunemori, a young woman with an honest desire to uphold justice. However, as she works alongside veteran Enforcer Shinya Kougami, she soon learns that the Sibyl Systems judgments are not as perfect as her fellow Inspectors assume. With everything she has known turned on its head, Akane wrestles with the question of what justice truly is, and whether it can be upheld through the use of a system that may already be corrupt. ',
        },
        {
            id: 8,
            image1: "img/taw.jpg",
            image2: "",
            image3: "",
            name: "The Asterisk War",
            episodes: "12",
            genre: ["Action", "Comedy", "Fantasy", "Romance", "Sci-Fi", "Ecchi", "Harem", "School"],
            synopsis: 'In the previous century, an unprecedented disaster known as the Invertia drastically reformed the world. The powers of existing nations declined significantly, paving the way for a conglomerate called the Integrated Empire Foundation to assume control. But more importantly, the Invertia led to the emergence of a new species of humans who are born with phenomenal physical capabilities—the Genestella. Its elite are hand-picked across the globe to attend the top six schools, and they duel amongst themselves in entertainment battles called Festas. <br> Ayato Amagiri is a scholarship transfer student at the prestigious Seidoukan Academy, which has recently been suffering from declining performances. Through a series of events, he accidentally sees the popular Witch of Resplendent Flames, Julis-Alexia von Riessfeld, half-dressed! Enraged, Julis challenges him to a duel for intruding on her privacy. After said duel is voided by the student council president, Ayato reveals that he has no interest in Festas. Instead, he has enrolled in the academy to investigate the whereabouts of his missing elder sister. But when a more devious plot unravels, Ayato sets out to achieve victory, while being surrounded by some of the most talented Genestella on the planet. ',
        },
        {
            id: 9,
            image1: "img/ft.jpg",
            image2: "",
            image3: "",
            name: "Fairy Tail",
            episodes: "328",
            genre: ["Action", "Adventure", "Fantasy"],
            synopsis: 'In the enchanted Kingdom of Fiore, the lively Lucy Heartfilia has one wish: to join the renowned Fairy Tail—one of the many magical wizard guilds scattered around the continent. Luckily, a chance encounter with Natsu Dragneel, the "Salamander" of Fairy Tail, whisks her into the legendary guild. <br> From Natsus rivalrous antics with ice wizard Gray Fullbuster to the frightening presence of the unmatched combat goddess Erza Scarlet, Fairy Tails powerful mages have a slight penchant for trouble. Through all the lucrative odd jobs and adventures to save the world from destruction lies an absolute and unyielding trust stronger than family that has formed between each guild member. <br> Teaming up with Natsu, Gray, and Erza, Lucy finds herself amidst the guilds most misfit wizards. But as they constantly stand in the eye of every danger, there is one name that never ceases to resurface: Zeref, the feared master of dark magic. ',
        },
        {
            id: 10,
            image1: "img/b.jpg",
            image2: "",
            image3: "",
            name: "Bleach",
            episodes: "366",
            genre: ["Action", "Adventure", "Fantasy"],
            synopsis: 'Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigos family from the assailant. To save his family, Ichigo accepts Rukias offer of taking her powers and becomes a Soul Reaper as a result. <br> However, as Rukia is unable to regain her powers, Ichigo is given the daunting task of hunting down the Hollows that plague their town. However, he is not alone in his fight, as he is later joined by his friends—classmates Orihime Inoue, Yasutora Sado, and Uryuu Ishida—who each have their own unique abilities. As Ichigo and his comrades get used to their new duties and support each other on and off the battlefield, the young Soul Reaper soon learns that the Hollows are not the only real threat to the human world. ',
        },
        {
            id: 11,
            image1: "img/ns.jpg",
            image2: "",
            image3: "",
            name: "Naruto Shippuden",
            episodes: "500",
            genre: ["Action", "Adventure", "Fantasy", " Martial Arts"],
            synopsis: 'It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world. <br> Although Naruto is older and sinister events loom on the horizon, he has changed little in personality—still rambunctious and childish—though he is now far more confident and possesses an even greater determination to protect his friends and home. Come whatever may, Naruto will carry on with the fight for what is important to him, even at the expense of his own body, in the continuation of the saga about the boy who wishes to become Hokage. ',
        },
        {
            id: 12,
            image1: "img/sao.jpg",
            image2: "",
            image3: "",
            name: "Sword Art Online",
            episodes: "25",
            genre: ["Action", "Adventure", "Fantasy", "Romance", "Love Polygon", "Video Game"],
            synopsis: 'Ever since the release of the innovative NerveGear, gamers from all around the globe have been given the opportunity to experience a completely immersive virtual reality. Sword Art Online (SAO), one of the most recent games on the console, offers a gateway into the wondrous world of Aincrad, a vivid, medieval landscape where users can do anything within the limits of imagination. With the release of this worldwide sensation, gaming has never felt more lifelike. <br>  However, the idyllic fantasy rapidly becomes a brutal nightmare when SAO\'s creator traps thousands of players inside the game. The "log-out" function has been removed, with the only method of escape involving beating all of Aincrad\'s one hundred increasingly difficult levels. Adding to the struggle, any in-game death becomes permanent, ending the player\'s life in the real world. <br> While Kazuto "Kirito" Kirigaya was fortunate enough to be a beta-tester for the game, he quickly finds that despite his advantages, he cannot overcome SAO\'s challenges alone. Teaming up with Asuna Yuuki and other talented players, Kirito makes an effort to face the seemingly insurmountable trials head-on. But with difficult bosses and threatening dark cults impeding his progress, Kirito finds that such tasks are much easier said than done. ',
        },
        {
            id: 13,
            image1: "img/sote.jpg",
            image2: "",
            image3: "",
            name: "Seraph of the End: Vampire Reign",
            episodes: "12",
            genre: ["Action", "Drama", "Fantasy", "Military", "Vampire"],
            synopsis: 'With the appearance of a mysterious virus that kills everyone above the age of 13, mankind becomes enslaved by previously hidden, power-hungry vampires who emerge in order to subjugate society with the promise of protecting the survivors, in exchange for donations of their blood. <br> Among these survivors are Yuuichirou and Mikaela Hyakuya, two young boys who are taken captive from an orphanage, along with other children whom they consider family. Discontent with being treated like livestock under the vampires\' cruel reign, Mikaela hatches a rebellious escape plan that is ultimately doomed to fail. The only survivor to come out on the other side is Yuuichirou, who is found by the Moon Demon Company, a military unit dedicated to exterminating the vampires in Japan. <br>Many years later, now a member of the Japanese Imperial Demon Army, Yuuichirou is determined to take revenge on the creatures that slaughtered his family, but at what cost? Owari no Seraph is a post-apocalyptic supernatural shounen anime that follows a young man\'s search for retribution, all the while battling for friendship and loyalty against seemingly impossible odds. ',
        },
        {
            id: 14,
            image1: "img/be.jpg",
            image2: "",
            image3: "",
            name: "Blue Exorcist",
            episodes: "25",
            genre: ["Action", "Fantasy", "Mythology", "School"],
            synopsis: 'Humans and demons are two sides of the same coin, as are Assiah and Gehenna, their respective worlds. The only way to travel between the realms is by the means of possession, like in ghost stories. However, Satan, the ruler of Gehenna, cannot find a suitable host to possess and therefore, remains imprisoned in his world. In a desperate attempt to conquer Assiah, he sends his son instead, intending for him to eventually grow into a vessel capable of possession by the demon king. <br> Ao no Exorcist follows Rin Okumura who appears to be an ordinary, somewhat troublesome teenager—that is until one day he is ambushed by demons. His world turns upside down when he discovers that he is in fact the very son of Satan and that his demon father wishes for him to return so they can conquer Assiah together. Not wanting to join the king of Gehenna, Rin decides to begin training to become an exorcist so that he can fight to defend Assiah alongside his brother Yukio.',
        },
        {
            id: 15,
            image1: "img/86.jpg",
            image2: "",
            image3: "",
            name: "86 Eighty-Six",
            episodes: "11",
            genre: ["Action", "Drama", "Sci-Fi", "Mecha", "Military"],
            synopsis: 'According to the Republic of San Magnolia, their ongoing war against the Giadian Empire has no casualties—however, that is mere propaganda. While the silver-haired Alba of the Republic\'s eighty-five sectors live safely behind protective walls, those of different appearances are interned in a secret eighty-sixth faction. Known within the military as the Eighty-Six, they are forced to fight against the Empire\'s autonomous Legion under the command of the Republican "Handlers." <br> Vladilena Milizé is assigned to the Spearhead squadron to replace their previous Handler. Shunned by her peers for being a fellow Eighty-Six supporter, she continues to fight against their inhumane discrimination. Shinei Nouzen is the captain of the Spearhead squadron. Infamous for being the sole survivor of every squadron he\'s been in, he insists on shouldering the names and wishes of his fallen comrades. When the fates of these young souls from two different worlds collide, will it ignite the spark that lights their path to salvation, or will they burn themselves in the flames of despair?',
        },
        {
            id: 16,
            image1: "img/ditf.jpg",
            image2: "",
            image3: "",
            name: "Darling in the FranXX",
            episodes: "24",
            genre: ["Action", "Drama", "Romance", "Sci-Fi", "Mecha"],
            synopsis: 'In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as FranXX—the only weapons known to be effective against the Klaxosaurs—in boy-girl pairs. Bred for the sole purpose of piloting these machines, these children know nothing of the outside world and are only able to prove their existence by defending their race. <br> Hiro, an aspiring FranXX pilot, has lost his motivation and self-confidence after failing an aptitude test. Skipping out on his class\' graduation ceremony, Hiro retreats to a forest lake, where he encounters a mysterious girl with two horns growing out of her head. She introduces herself by her codename Zero Two, which is known to belong to an infamous FranXX pilot known as the "Partner Killer." Before Hiro can digest the encounter, the Plantation is rocked by a sudden Klaxosaur attack. Zero Two engages the creature in her FranXX, but it is heavily damaged in the skirmish and crashes near Hiro. Finding her partner dead, Zero Two invites Hiro to pilot the mecha with her, and the duo easily defeats the Klaxosaur in the ensuing fight. With a new partner by his side, Hiro has been given a chance at redemption for his past failures, but at what cost?',
        },
        {
            id: 17,
            image1: "img/klk.jpg",
            image2: "",
            image3: "",
            name: "Mecha",
            episodes: "24",
            genre: ["Action", "Comedy", "Fantasy", "Ecchi", "School", "Super Power"],
            synopsis: 'After the murder of her father, Ryuuko Matoi has been wandering the land in search of his killer. Following her only lead—the missing half of his invention, the Scissor Blade—she arrives at the prestigious Honnouji Academy, a high school unlike any other. The academy is ruled by the imposing and cold-hearted student council president Satsuki Kiryuuin alongside her powerful underlings, the Elite Four. In the school\'s brutally competitive hierarchy, Satsuki bestows upon those at the top special clothes called "Goku Uniforms," which grant the wearer unique superhuman abilities. <br> Thoroughly beaten in a fight against one of the students in uniform, Ryuuko retreats to her razed home where she stumbles across Senketsu, a rare and sentient "Kamui," or God Clothes. After coming into contact with Ryuuko\'s blood, Senketsu awakens, latching onto her and providing her with immense power. Now, armed with Senketsu and the Scissor Blade, Ryuuko makes a stand against the Elite Four, hoping to reach Satsuki and uncover the culprit behind her father\'s murder once and for all. ',
        },
        {
            id: 18,
            image1: "img/cotn.jpg",
            image2: "",
            image3: "",
            name: "Call of the Night",
            episodes: "13",
            genre: ["Romance", "Supernatural", "Vampire"],
            synopsis: 'Kou Yamori is an average middle school student who struggles with grasping the complex concept of love. Because he sees little sense in surrendering to the norm, he soon stops going to school. Plagued with insomnia due to his idleness, Kou begins roaming the lonesome streets at night. <br> One night, Kou encounters a bizarre girl named Nazuna Nanakusa who believes that people stay awake during the night because they are dissatisfied with how they spent their day and cannot rest until they release their inhibitions. Nazuna offers to help Kou with his sleep issues and invites him over to her place, where she convinces him to share a futon with her. Feeling uncomfortable, Kou only pretends to doze off—which is when Nazuna suddenly bites his neck, revealing herself to be a vampire! <br> While Kou thinks the bite will turn him into a vampire, the specifics of transforming are not that simple. In order to change, he must be bitten by someone he truly loves. Ready to let go of his dreary mortal life, Kou decides on a new goal: he will fall in love with Nazuna and become a vampire himself. ',
        },
        {
            id: 19,
            image1: "img/k.jpg",
            image2: "",
            image3: "",
            name: "Kakegurui",
            episodes: "12",
            genre: ["Drama", "Mystery", "Suspense", "High Stakes Game", "Psychological", "School", "Strategy Game"],
            synopsis: 'Unlike many schools, attending Hyakkaou Private Academy prepares students for their time in the real world. Since many of the students are the children of the richest people in the world, the academy has its quirks that separate it from all the others. By day, it is a normal school, educating its pupils in history, languages, and the like. But at night, it turns into a gambling den, educating them in the art of dealing with money and manipulating people. Money is power; those who come out on top in the games stand at the top of the school. <br> Yumeko Jabami, a seemingly naive and beautiful transfer student, is ready to try her hand at Hyakkaou\'s special curriculum. Unlike the rest, she doesn\'t play to win, but for the thrill of the gamble, and her borderline insane way of gambling might just bring too many new cards to the table. ',
        },
        {
            id: 20,
            image1: "img/h.jpg",
            image2: "",
            image3: "",
            name: "Horimiya",
            episodes: "13",
            genre: ["Romance", "School"],
            synopsis: 'On the surface, the thought of Kyouko Hori and Izumi Miyamura getting along would be the last thing in people\'s minds. After all, Hori has a perfect combination of beauty and brains, while Miyamura appears meek and distant to his fellow classmates. However, a fateful meeting between the two lays both of their hidden selves bare. Even though she is popular at school, Hori has little time to socialize with her friends due to housework. On the other hand, Miyamura lives under the noses of his peers, his body bearing secret tattoos and piercings that make him look like a gentle delinquent. <br> Having opposite personalities yet sharing odd similarities, the two quickly become friends and often spend time together in Hori\'s home. As they both emerge from their shells, they share with each other a side of themselves concealed from the outside world. ',
        },
        {
            id: 21,
            image1: "img/mdud.jpg",
            image2: "",
            image3: "",
            name: "My Dress-Up Darling",
            episodes: "12",
            genre: ["Romance", "Otaku Culture", "School"],
            synopsis: 'High school student Wakana Gojou spends his days perfecting the art of making hina dolls, hoping to eventually reach his grandfather\'s level of expertise. While his fellow teenagers busy themselves with pop culture, Gojou finds bliss in sewing clothes for his dolls. Nonetheless, he goes to great lengths to keep his unique hobby a secret, as he believes that he would be ridiculed were it revealed. <br> Enter Marin Kitagawa, an extraordinarily pretty girl whose confidence and poise are in stark contrast to Gojou\'s meekness. It would defy common sense for the friendless Gojou to mix with the likes of Kitagawa, who is always surrounded by her peers. However, the unimaginable happens when Kitagawa discovers Gojou\'s prowess with a sewing machine and brightly confesses to him about her own hobby: cosplay. Because her sewing skills are pitiable, she decides to enlist his help. <br> As Gojou and Kitagawa work together on one cosplay outfit after another, they cannot help but grow close—even though their lives are worlds apart.',
        },
        {
            id: 22,
            image1: "img/dal.jpg",
            image2: "",
            image3: "",
            name: "Date A Live",
            episodes: "12",
            genre: ["Action", "Fantasy", "Romance", "Sci-Fi", "Harem", "School"],
            synopsis: 'Thirty years ago, the Eurasian continent was devastated by a supermassive "spatial quake"—a phenomenon involving space vibrations of unknown origin—resulting in the deaths of over 150 million people. Since then, these quakes have been plaguing the world intermittently, albeit on a lighter scale. <br> Shidou Itsuka is a seemingly average high school student who lives with his younger sister, Kotori. When an imminent spatial quake threatens the safety of Tengu City, he rushes to save her, only to be caught in the resulting eruption. He discovers a mysterious girl at its source, who is revealed to be a "Spirit," an otherworldly entity whose appearance triggers a spatial quake. Soon after, he becomes embroiled in a skirmish between the girl and the Anti-Spirit Team, a ruthless strike force with the goal of annihilating Spirits. <br> However, there is a third party that believes in saving the spirits: "Ratatoskr," which surprisingly is commanded by Shidou\'s little sister! Kotori forcibly recruits Shidou after the clash, presenting to him an alternative method of dealing with the danger posed by the Spirits—make them fall in love with him. Now, the fate of the world rests on his dating prowess, as he seeks out Spirits in order to charm them.',
        },
        {
            id: 23,
            image1: "img/mtamcbnl.jpg",
            image2: "",
            image3: "",
            name: "More than a Married Couple, but Not Lovers",
            episodes: "12",
            genre: [" Romance", "School"],
            synopsis: 'Third-year high school student Jirou Yakuin is in love with his childhood friend and classmate, Shiori Sakurazaka. Thus, he hopes to be paired with her for the marriage practical: their school\'s practice of randomly selecting boy-girl pairs to live as pretend married couples while monitoring and rating them on how close they have gotten. Meanwhile, the lively Akari Watanabe wants to be assigned to her crush, the popular and good-looking Minami Tenjin. <br> Much to their dismay, Jirou and Akari find out that not only have they been paired together, but so have Shiori and Minami! Determined to be with their crushes, Jirou and Akari strive to earn as many points as possible, as the top 10 pairs earn the right to switch their partners—so long as both couples agree.',
        },


    ];


    // ------- CHECKBOX LOGIC ----------
    const genreButtons = $(".genreCheck").toArray(); // Create an ACTUAL array of of the buttons

    console.log(genreButtons);

    // Array to store the values of checked checkboxes
    const checkedGenres = [];

    // Iterate over each checkbox
    genreButtons.forEach(checkboxElement => {
        $(checkboxElement).click(function (event) {
            const clickedCheckbox = $(event.target);

            // Clear the array of checked genres
            checkedGenres.length = 0;

            // Check all checkboxes and add checked ones to checkedGenres array
            genreButtons.forEach(checkbox => {
                if ($(checkbox).is(":checked")) {
                    checkedGenres.push($(checkbox).val());
                }
            });

            // Filter Aniems - see filter function
            filteredAnimes = filter();

            // Log or do something with filteredAnimes
            console.log(filteredAnimes);

            populateCards(filteredAnimes);
        });
    });



    // h-l (high to low episodes)
    $("#episode-high-to-low").click(function () {
        console.log("h to l");
        const filteredAnimes = filter();
        const sortedAnimes = sortAnimesByEpisodesHighToLow(filteredAnimes);
        populateCards(sortedAnimes);
    });

    // l-h (low to high episodes)
    $("#episode-low-to-high").click(function () {
        console.log("l to h");
        const filteredAnimes = filter();
        const sortedAnimes = sortAnimesByEpisodesLowToHigh(filteredAnimes);
        populateCards(sortedAnimes);
    });

    // a-z (alphabetical sorting)
    $("#sort-alpha").click(function () {
        console.log("alpha");
        const filteredAnimes = filter();
        const sortedAnimes = sortAnimesAlphabetical(filteredAnimes); // sorting filtered properties alphabetically
        populateCards(sortedAnimes);
    });


    // ___________SORTING FUNCTIONS_______________
    // Sort Results - sort by episodes lowest to highest
    function sortAnimesByEpisodesLowToHigh(animes) {
        return animes.sort((a, b) => {
            const episodesA = parseInt(a.episodes);
            const episodesB = parseInt(b.episodes);
            return episodesA - episodesB;
        });
    };

    // Sort Results - sort by episodes highest to lowest
    function sortAnimesByEpisodesHighToLow(animes) {
        return animes.sort((a, b) => {
            const episodesA = parseInt(a.episodes);
            const episodesB = parseInt(b.episodes);
            return episodesB - episodesA;
        });
    };

    // sort by A-Z
    function sortAnimesAlphabetical(animes) {
        return animes.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            return nameA.localeCompare(nameB);
        });
    }

    // ____________FILTERING _____________
    function filter() {
        // Filter anime array based on checked genres
        let filteredAnimes;
        if (checkedGenres.length > 0) {
            filteredAnimes = animes.filter(anime => {
                // Check if all checked genres are included in anime.genre
                return checkedGenres.every(genre => anime.genre.includes(genre));
            });
            return filteredAnimes
        } else {
            // If no checkboxes are checked, include all anime objects
            filteredAnimes = animes;
            return filteredAnimes
        }
    }


    function populateCards(array) {
        $('#results').html('');

        if (array.length === 0) {
            $("#results").append(`<p> no results</p>`);
        }

        array.forEach(item => {
            // Create a card for that property:
            const card = `
                <div class="animes">
                    <div class="swiper">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">
                            <!-- Slides -->
                            <div class="swiper-slide"><img src="${item.image1}" alt="${item.name} image 1" class="animes-image" data-id="${item.id}"></div>
                            <div class="swiper-slide"><img src="${item.image2}" alt="${item.name} image 2" class="animes-image" data-id="${item.id}"></div>
                            <div class="swiper-slide"><img src="${item.image3}" alt="${item.name} image 3" class="animes-image" data-id="${item.id}"></div>
                        </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="animes-details">
                    <h2>${item.name}</h2>
                    <p>${item.episodes} Episodes</p>
                    <div class="genre-container">
                        ${item.genre.map(genre => `<p class="genre">${genre}</p>`).join('')}
                    </div> 
                </div>
            `;

            $("#results").append(card);
        });

        // Call attachModalToImages after populating cards
        attachModalToImages();
    }

    function attachModalToImages() {
        // Get images
        const images = $(".animes-image");
        // Get modal
        const detailsModal = $("#details-modal");

        for (let i = 0; i < images.length; i++) {
        // Add a click event listener to each image
        images.on('click', function(event) {
            // Keep scroll position
            const scrollPosition = $(window).scrollTop();
            detailsModal.data('scrollPosition', scrollPosition); // Store scroll position in the modal's data
            const rect = event.target.getBoundingClientRect(); // Get the position of the clicked image relative to the viewport
            const imageTop = rect.top + scrollPosition; // Calculate the top position 
            const windowHeight = window.innerHeight;
            const dialogHeight = detailsModal.offsetHeight; // Height of the modal
            const viewportTop = scrollPosition;
            let dialogTop = viewportTop + (windowHeight - dialogHeight) / 2; // Calculate the top position for the dialog to be centered

            // Ensure the dialog doesn't go above or below the viewport
            if (dialogTop < imageTop) {
                dialogTop = imageTop; // Place the dialog just below the clicked image if there's enough space
            } else if (dialogTop + dialogHeight > windowHeight + viewportTop) {
                dialogTop = windowHeight + viewportTop - dialogHeight; // Place the dialog at the bottom of the viewport if there's not enough space
            }
            detailsModal.css('top', dialogTop + "px"); // Set top position of the dialog

            console.log('Image click working');
            detailsModal.show(); // Open modal
            $("body").addClass("modal-open"); // Add class to disable scrolling
            // Populate modal
            populateModal($(event.target).data('id'));
        });
    }
    }

    // Closing modal
    function closeDetailsModal() {
        // Get close button
        const $close = $('#close-modal');
        // Get the modal
        const $detailsModal = $("#details-modal");
        // Click event to close modal
        $close.on('click', function () {
            $detailsModal.hide();
            $("body").removeClass('modal-open'); // Remove scroll-lock class
            const scrollPosition = $detailsModal.data('scrollPosition') || 0;
            $(window).scrollTop(scrollPosition);
        });
    }

    function populateModal(imageId) {
        // Check if imageId is valid
        const anime = animes.find(a => a.id === imageId);
        if (!anime) {
            console.error('Invalid imageId:', imageId);
            return;
        }

        // Get modal content container
        const $detailsModalContent = $('.modal-contents');

        $detailsModalContent.html(`
            <img src="${anime.image1}" alt="${anime.name} image 1">
            <h2>${anime.name}</h2>
            <p>${anime.episodes} Episodes</p>
            <h4>${anime.genre.join(', ')}</h4>
            <p class="property-description">${anime.synopsis}</p>
        `);
    }

    // Initialize modal functionality on DOMContentLoaded
    $(document).ready(function () {
        populateCards(animes); // Populate cards first
        closeDetailsModal(); // Set up modal close event
    });



    // Swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

      });

});