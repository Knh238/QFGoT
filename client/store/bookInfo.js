const booksData = [
  {
    _id: { $oid: '58e68a4e1799d0f58a9e22d' },
    primary_isbn: '9781480473805',
    title: 'Taking Care of Mrs. Carroll',
    authors: [
      {
        _id: { $oid: '58e6edd6afbe421347a11281' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 15415368,
        display_name: 'Paul Monette',
        first_name: 'Paul',
        last_name: 'Monette',
        slug: 'paul-monette'
      }
    ],
    bookkey: '15526982',
    isbns: ['9781480473805'],
    price: '14.99',
    amazon_rank: 320928,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eNow that Mrs. Carroll has died, the race for control of her elegant home has begun\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003eIt is incredible how the death of a loved one can bring people together. Especially when greedy developers waste no time in attempting to steal the Cape Cod estate of the person in question.\u003cBR /\u003e\u003cBR /\u003eBefore she could add a stipulation to her will requiring that the house not be bought up and razed for development, Mrs. Carroll tragically passed away. Now, it is up to her lover, Phidias, and her houseboy, David, to take care of the place once again. However, they cannot do it alone. They will need the help of people ranging from David\u0026rsquo;s ex-boyfriend Rick to a kitschy former screen goddess.\u003cBR /\u003e\u003cBR /\u003eWritten not long after Paul Monette moved to Los Angeles, his first novel is a madcap caper featuring a cast of characters willing to do anything to fulfill a dying woman\u0026rsquo;s final wish\u0026mdash;even if that means impersonating her while hiding her dead body from the nosy lawyers scouring her estate.\u003cBR /\u003e\u003cBR /\u003eThis ebook features an illustrated biography of Paul Monette including rare images and never-before-seen documents from the Paul Monette papers of the UCLA Library Special Collections.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781480473805-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6f00de1799d0f58a9d324' },
    primary_isbn: '9781453212509',
    title: 'The Mystery of the Mixed-Up Zoo',
    authors: [
      {
        role: 1,
        short_bio:
          'Gertrude Chandler Warner (1890–1979) was an American author of children’s books, most notably the nineteen original titles in the Boxcar Children Mysteries series. Warner was raised in Putnam, Connecticut, across the street from a railroad station, which later inspired her to write about children living in a boxcar. In 1918, she began what would become a thirty-two-year career teaching first and third grade at the Israel Putnam School. She died in Putnam on August 30, 1979, when she was eighty-nine years old. But the Boxcar Children live on: To this day, talented authors contribute new stories to the series, which now includes over one hundred twenty books.',
        firebrand_id: 8748376,
        display_name: 'Gertrude Chandler Warner',
        first_name: 'Gertrude',
        last_name: 'Warner',
        slug: 'gertrude-chandler-warner'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 9828775,
        display_name: 'Charles Tang',
        first_name: 'Charles',
        last_name: 'Tang',
        slug: 'charles-tang'
      }
    ],
    bookkey: '9830605',
    isbns: ['9781453212509'],
    price: '4.99',
    amazon_rank: 0,
    publisher: 'Albert Whitman \u0026 Company',
    primary_bisacs: ['Juvenile Fiction'],
    description:
      '\u003cdiv\u003e\u003cp\u003eThe Alden children explore a series of mix-ups at the zoo in order to save it from pranksters and the town council. \u003c/p\u003e\u003c/div\u003e',
    active: false,
    image: 'book-assets.openroadmedia.com/9781453212509-book-cover.jpg'
  },
  {
    _id: { $oid: '5a6992102ad4b3e3d0ae25ea' },
    amazon_rank: 0,
    active: true,
    title: 'How to Catch a Frog',
    price: '21.99',
    bookkey: '40431448',
    publisher: 'ABRAMS',
    description:
      '\u003cdiv\u003e\u003cB\u003eStories about growing up in a family of artists and idealists in Vermont, complete with illustrations and how-to instructions.\u003c/B\u003e\u003cBR /\u003e  \u003cBR /\u003e Much of author and illustrator Heather Ross\u0026rsquo;s work has been inspired by her childhood spent in a rural corner of Vermont during the 1970s. Her upbringing was defined by stunning natural beauty, innovative living, and daily lessons in self-reliance\u0026mdash;but also dysfunction, a self-imposed but nearly inescapable poverty, and little exposure to basic life skills.\u003cBR /\u003e  \u003cBR /\u003e When, in her twenties, Ross complained to her mother about a long list of things she had missed out on and that had compromised her chance of ever leading a \u0026ldquo;normal\u0026rdquo; life, her mother waved a hand and replied, \u0026ldquo;Well, you should thank me, because you have a lot of good stories instead.\u0026rdquo;\u003cBR /\u003e  \u003cBR /\u003e\u003cI\u003eHow to Catch a Frog\u003c/I\u003e is a collection of those stories, plus others that show Ross\u0026rsquo;s eventual route to success as an artist, entrepreneur, and mother.\u003cBR /\u003e  \u003cBR /\u003e \u0026ldquo;A very honest coming-of-age tale . . . The book reminded me of the powerful memoir \u003cI\u003eWild\u003c/I\u003e by Cheryl Strayed, and if you loved that book, this one will rock your world as well.\u0026rdquo; \u0026mdash;Meg Cox, quilt journalist, author, and instructor\u003c/div\u003e',
    authors: [
      {
        role: 1,
        short_bio: '',
        firebrand_id: 40431544,
        display_name: 'Heather Ross',
        first_name: 'Heather',
        last_name: 'Ross',
        slug: 'heather-ross'
      }
    ],
    isbns: ['9781613126523'],
    primary_isbn: '9781613126523',
    primary_bisacs: ['Biography \u0026 Autobiography', 'Crafts \u0026 Hobbies'],
    image:
      'https://s3.amazonaws.com/orim-book-covers/9781613126523-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6f0d6e1799d0f58a9d52a' },
    primary_isbn: '9781480436435',
    title: 'Career in C Major',
    authors: [
      {
        role: 1,
        short_bio:
          'James M. Cain (1892–1977) was one of the most important authors in the history of crime fiction. Born in Maryland, he became a journalist after giving up on a childhood dream of singing opera. After two decades writing for newspapers in Baltimore, New York, and the army—and a brief stint as the managing editor of the New Yorker—Cain moved to Hollywood in the early 1930s. While writing for the movies, he turned to fiction, penning the novella The Postman Always Rings Twice (1934). This tightly wound tale of passion, murder, and greed became one of the most controversial bestsellers of its day, and remains one of the foremost examples of American noir writing. It set the tone for Cain’s next few novels, including Serenade (1937), Mildred Pierce (1941), Double Indemnity (1943), and The Butterfly (1947). Several of his books became equally successful noir films, particularly the classic 1940s adaptations of Mildred Pierce and Double Indemnity. Cain moved back to Maryland in 1948. Though he wrote prolifically until his death, Cain remains most famous for his early work.     ',
        firebrand_id: 12250560,
        display_name: 'James M. Cain',
        first_name: 'James',
        last_name: 'Cain',
        slug: 'james-m-cain'
      },
      {
        role: 1,
        short_bio: '',
        firebrand_id: 13366032,
        display_name: 'Roy Hoopes',
        first_name: 'Roy',
        last_name: 'Hoopes',
        slug: 'roy-hoopes'
      }
    ],
    bookkey: '13366054',
    isbns: ['9781480436435'],
    price: '9.99',
    amazon_rank: 425279,
    publisher: 'MysteriousPress.com/Open Road',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cb\u003eFrom a famous tough-guy writer, a collection of shockingly funny stories\u003c/b\u003e\u003cBR\u003eEver since she got married, Doris has regretted giving up her singing career. After years of domestic drudgery, she decides to take one last crack at becoming an opera singer, even if it means sacrificing everything for the sake of her dream. Her contractor husband is fully supportive, having no idea that the family\u0026rsquo;s true musical genius isn\u0026rsquo;t Doris\u0026mdash;it\u0026rsquo;s him.\u003cBR\u003eIn this and other stories in \u003ci\u003eCareer in C Major\u003c/i\u003e, James M. Cain shows off a light comedic touch that will surprise readers who are familiar only with his crime novels \u003ci\u003eThe Postman Always Rings Twice\u003c/i\u003e and \u003ci\u003eDouble Indemnity\u003c/i\u003e. But Cain had been publishing funny stories, articles, and satire since his early days as a reporter for H. L. Mencken\u0026rsquo;s\u003ci\u003e Baltimore Sun\u003c/i\u003e, and was just as comfortable writing about singers as he was about killers. This collection of Cain\u0026rsquo;s lighter work shows that if an author is tough it doesn\u0026rsquo;t mean he can\u0026rsquo;t crack a smile.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781480436435-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '11/8/2017',
        date: { $date: '2017-11-08T05:00:00.000Z' },
        expiration_date: { $date: '2017-11-08T05:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 70,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6f7b1e1799d0f58a9e0a3' },
    primary_isbn: '9781497694057',
    title: 'Hunt the Beast Down',
    authors: [
      {
        _id: { $oid: '58e6ed23afbe421347a10bd9' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 15829225,
        display_name: 'Paul Lederer',
        first_name: 'Paul',
        last_name: 'Lederer',
        slug: 'paul-lederer'
      }
    ],
    bookkey: '20483664',
    isbns: ['9781497694057', '9781497695382'],
    price: '4.99',
    amazon_rank: 1688968,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eThe third installment in the Spectros series: In pursuit of his beloved, the master magician makes landfall on the Oregon coast\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e From Natchez to Denver, Mexico to Montana, Dr. Spectros has chased his nemesis, Blackschuster, across the length and breadth of North America. He nearly caught up with him in California, but the evil wizard slipped out of Spectros\u0026rsquo;s grasp. The trail grows warm again in the Oregon fishing village of Bear Harbor, where Blackschuster has come in search of the silver he needs to perform his sorcery.\u003cBR /\u003e  \u003cBR /\u003e With the help of a handsome gunslinger, a mute giant, and a skilled knife fighter, Spectros finally has a chance to destroy his enemy and rescue his beloved. But there are dark forces at work on the coast of Oregon, and Blackschuster has harnessed the powers of a beast whose very name strikes fear in the hearts of men. \u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497694057-book-cover.jpg',
    genre: 'Science Fiction \u0026 Fantasy'
  },
  {
    _id: { $oid: '58e6ef1fe1799d0f58a9d0fd' },
    primary_isbn: '9781480439726',
    title: 'Bye Bye Baby',
    authors: [
      {
        role: 1,
        short_bio: '',
        firebrand_id: 18212147,
        display_name: 'Fiona McIntosh',
        first_name: 'Fiona',
        last_name: 'McIntosh',
        slug: 'fiona-mcintosh'
      }
    ],
    bookkey: '13533117',
    isbns: ['9781480439726'],
    price: '9.99',
    amazon_rank: 58262,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003eIt all began in Brighton. Now there is a killer on the loose. Scotland Yard\u0026rsquo;s brightest talent is chosen to head up the high-profile taskforce, a DCI who must confront his own past as the body count rises.\u003cBR /\u003e\u003cBR /\u003eThere are few leads and Jack Hawksworth can only fall back on instinct and decades-old cold cases for any clue to the killer\u0026rsquo;s motive . . . and identity.\u003cBR /\u003e\u003cBR /\u003eWith his most loyal team member threatening to betray him, a chief inspector pushing for results, a hungry British media clamoring for information, and a restless public eager for a conviction, the high-pressure operation can only end in a final shocking confrontation . . . \u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781480439726-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '8/31/2017',
        date: { $date: '2017-08-31T04:00:00.000Z' },
        expiration_date: { $date: '2017-08-31T04:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$0.99',
        total_sales: 232,
        ebb_only: true
      },
      {
        readable_date: '2/26/2018',
        date: { $date: '2018-02-26T05:00:00.000Z' },
        expiration_date: { $date: '2018-02-26T05:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 0,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e70d64e1799d0f58a9f0e2' },
    primary_isbn: '9781504038911',
    title: 'The Worlds Trilogy',
    authors: [
      {
        role: 1,
        short_bio:
          'Joe Haldeman began his writing career while he was still in the army. Drafted in 1967, he fought in the Central Highlands of Vietnam as a combat engineer with the Fourth Division. He was awarded several medals, including a Purple Heart. Haldeman sold his first story in 1969 and has since written over two dozen novels and five collections of short stories and poetry. He has won the Nebula and Hugo Awards for his novels, novellas, poems, and short stories, as well as the John W. Campbell Memorial Award, the Locus Award, the Rhysling Award, the World Fantasy Award, and the James Tiptree, Jr. Award. His works include The Forever War, Forever Peace, Camouflage, 1968, the Worlds saga, and the Marsbound series. Haldeman recently retired after many years as an associate professor in the Department of Writing and Humanistic Studies at the Massachusetts Institute of Technology. He and his wife, Gay, live in Florida, where he also paints, plays the guitar, rides his bicycle, and studies the skies with his telescope. ',
        firebrand_id: 20044411,
        display_name: 'Joe Haldeman',
        first_name: 'Joe',
        last_name: 'Haldeman',
        slug: 'joe-haldeman'
      }
    ],
    bookkey: '28675200',
    isbns: ['9781504038911'],
    price: '19.99',
    amazon_rank: 207447,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eThe acclaimed author of \u003cI\u003eThe Forever War\u003c/I\u003e imagines \u003c/B\u003e\u003cB\u003ea future in which most of humanity has abandoned Earth, living in man-made habitats orbiting a troubled world.\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e In \u003cI\u003eWorlds\u003c/I\u003e, \u003cI\u003eWorlds Apart\u003c/I\u003e, and \u003cI\u003eWorlds Enough and Time\u003c/I\u003e, the acclaimed Hugo and Nebula Award\u0026ndash;winning author of \u003cI\u003eThe Forever War \u003c/I\u003eimagines a near future rife with exhilarating and terrifying possibilities, when hundreds of thousands of human beings have abandoned the Earth\u0026rsquo;s surface to live in man-made habitats orbiting the troubled planet.\u003cBR /\u003e  \u003cBR /\u003e Haldeman\u0026rsquo;s science fiction saga follows Marianne O\u0026rsquo;Hara, a young inhabitant of the World known as \u003cI\u003eNew\u003c/I\u003e New York, from her arrival on Earth as a student who becomes seduced by radical politics, through her coming of age amid the Worlds\u0026rsquo; war and the habitats\u0026rsquo; devastation, and ultimately to Marianne\u0026rsquo;s emergence as a leader\u0026mdash;and possibly the last hope of the human race as it heads toward the stars.\u003cBR /\u003e  \u003cBR /\u003e Stephen King said of the first book in Haldeman\u0026rsquo;s trilogy, \u0026ldquo;There are scenes in \u003cI\u003eWorlds\u003c/I\u003e I will remember forever.\u0026rdquo; These gripping novels will enthrall anyone interested in the future\u0026mdash;that of our planet and of the human race.\u003cBR /\u003e  \u003c/div\u003e',
    active: true,
    image:
      'https://s3.amazonaws.com/orim-book-covers/9781504038911-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '7/12/2016',
        date: { $date: '2016-07-12T04:00:00.000Z' },
        expiration_date: { $date: '2016-07-12T04:00:00.000Z' },
        original_price: '$29.99',
        promo_price: '$7.99',
        total_sales: 131,
        ebb_only: true
      },
      {
        readable_date: '10/24/2016',
        date: { $date: '2016-10-24T04:00:00.000Z' },
        expiration_date: { $date: '2016-10-24T04:00:00.000Z' },
        original_price: '$15.99',
        promo_price: '$2.99',
        total_sales: 2,
        ebb_only: true
      },
      {
        readable_date: '3/24/2017',
        date: { $date: '2017-03-24T04:00:00.000Z' },
        expiration_date: { $date: '2017-03-24T04:00:00.000Z' },
        original_price: '$29.99',
        promo_price: '$1.99',
        total_sales: 443,
        ebb_only: true
      },
      {
        readable_date: '12/1/2017',
        date: { $date: '2017-12-01T05:00:00.000Z' },
        expiration_date: null,
        original_price: '$17.99',
        promo_price: '$1.99',
        total_sales: 0,
        ebb_only: false
      }
    ],
    genre: 'Science Fiction \u0026 Fantasy',
    new: true
  },
  {
    _id: { $oid: '58e6ee19e1799d0f58a9cd07' },
    primary_isbn: '9781497605107',
    title: 'Destiny Awaits',
    authors: [
      {
        _id: { $oid: '58e6ee19afbe421347a11719' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 16164636,
        display_name: 'Suzanne Elizabeth',
        first_name: 'Suzanne',
        last_name: 'Elizabeth',
        slug: 'suzanne-elizabeth'
      }
    ],
    bookkey: '16164690',
    isbns: ['9781497605107', '9781497605114'],
    price: '4.99',
    amazon_rank: 814333,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003eWhen the old woman appeared at her bedside, Tess Harper\u0026#39;s first thought was that she was being kidnapped and held until her wealthy parents could pay a hefty ransom. She never fathomed that she would be brought back to the year 1885 and left in the middle of Kansas. Tess finds herself faced with two motherless little girls without a home and a stubborn but handsome man who is the only person who can care for them. Before she can be returned to her time, Tess must ensure that the lovely little girls have a place in recluse Joseph Maguire\u0026#39;s home and heart. Joseph has many enchanting qualities. Although he drives Tess mad with his hard-headed ways, she cannot keep her blood from boiling every time he touches her. She knows the girls should be with Joseph, but where does she belong? As a mother to the children and in the arms of the man she is oddly attracted to, or in the future where only the dream of love awaits her. \u003c/div\u003e',
    active: false,
    image: 'book-assets.openroadmedia.com/9781497605107-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6f49de1799d0f58a9dcc0' },
    primary_isbn: '9781453235256',
    title: 'The Case of the Sliding Pool',
    authors: [
      {
        role: 1,
        short_bio:
          'Howard Fast (1914–2003) was one of the most prolific American writers of the twentieth century. He was a bestselling author of more than eighty works of fiction, nonfiction, poetry, and screenplays. The son of immigrants, Fast grew up in New York City and published his first novel upon finishing high school in 1933. In 1950, his refusal to provide the United States Congress with a list of possible Communist associates earned him a three-month prison sentence. During his incarceration, Fast wrote one of his best-known novels, Spartacus (1951). Throughout his long career, Fast matched his commitment to championing social justice in his writing with a deft, lively storytelling style.    ',
        firebrand_id: 10940357,
        display_name: 'Howard Fast',
        first_name: 'Howard',
        last_name: 'Fast',
        slug: 'howard-fast'
      }
    ],
    bookkey: '10943675',
    isbns: ['9781453235256'],
    price: '7.99',
    amazon_rank: 142795,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cb\u003eA rare California deluge unearths a hidden body\u0026mdash;and a decades-old crime\u003c/b\u003e\u003cBR\u003eRain has spoiled Masao Masuto\u0026rsquo;s vacation. For six days the storm has trapped the Zen Buddhist detective and his family inside their Los Angeles cottage. By the morning of his vacation\u0026rsquo;s final day, he is so stir crazy that the call to come to work is a relief. Detective Masuto knows no better cure for boredom than a puzzling murder. Nothing remains of the deceased man but his bones. A mudslide caused by the long, punishing storm destroyed the terrace of a Beverly Hills mansion, dislodging the swimming pool and opening a grave which had been covered for three decades. The skeleton\u0026rsquo;s deep stab wound suggests a professional\u0026rsquo;s hand\u0026mdash;possibly a World War II veteran with commando training. As Masuto pries into the past, the aged murderer takes deadly steps to cover up his long-forgotten crime. The detective finds himself locked in a game of cat and mouse with a brilliant and ruthless killer. This ebook features an illustrated biography of Howard Fast including rare photos from the author\u0026rsquo;s estate.\u003c/div\u003e',
    active: true,
    image:
      'https://s3.amazonaws.com/orim-book-covers/9781453235256-book-cover.jpg'
  },
  {
    _id: { $oid: '58e71650e1799d0f58a9f372' },
    primary_isbn: '9781626366671',
    title: 'Zombie, Ohio',
    authors: [
      {
        role: 1,
        firebrand_role: 'author',
        short_bio:
          "Scott Kenemore is the author of the successful horror/humor books The Zen of Zombie and Z.E.O. Zombie, Ohio is his first novel. Danny Campbell's regional acting credits include the Actors Theatre of Louisville, the Utah Shakespearean Festival, the Vermont Stage, Stage West, the Mint Theatre in New York City, and six years with the Independent Shakespeare Company in Los Angeles. His favorite roles include Falstaff, Bottom, Launce, and the Porter. He has appeared in CBS's The Guardian, the recent films A Pool, a Fool, and a Duel and Greater Than Gravity, and over twenty-five commercials. He is also a member of the adjunct faculty in the theatre arts department at Santa Monica College. An AudioFile Earphones Award winner, Danny has recently narrated the audiobook Once a Spy by Keith Thomson, and he read the part of David Foster Wallace in Mike Lipsky's Although of Course You End Up Becoming Yourself.  ",
        firebrand_id: 32987310,
        display_name: 'Scott Kenemore',
        first_name: 'Scott',
        last_name: 'Kenemore',
        slug: 'scott-kenemore'
      }
    ],
    bookkey: '32987304',
    isbns: ['9781626366671'],
    price: '16.99',
    amazon_rank: 256428,
    publisher: 'Skyhorse Publishing',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eThis clever horror thriller offers \u0026ldquo;\u003c/B\u003e\u003cB\u003ea darkly humorous depiction of one zombie\u0026#39;s struggle for enlightenment and redemption.\u0026rdquo;\u0026mdash;\u003cI\u003ePublishers Weekly\u003c/I\u003e\u003c/B\u003e\u003cBR /\u003e  \u003cBR /\u003e When Peter Mellor, a college professor in the rural town of Gant, Ohio, gets into in an automobile accident during a zombie outbreak, he comes to with a slight case of amnesia. What\u0026rsquo;s worse, he\u0026rsquo;s also dead. With society crumbling around him and violence escalating into daily life, Peter quickly learns that being a zombie isn\u0026rsquo;t all fun and brains.\u003cBR /\u003e  \u003cBR /\u003e Humans\u0026mdash;generally unsympathetic\u0026mdash;try to kill him at nearly every opportunity. His old friends are loath to associate with him. And he finds himself getting \u0026ldquo;hungry\u0026rdquo; at the most inconvenient times. And though a large part of his skull is missing, Peter is still able to decipher the most troubling aspect of his new condition: his accident was no accident at all. Faced with the harrowing mystery of his death, Peter must solve his own murder. Battling the avenging \u0026ldquo;breathers\u0026rdquo; and the inevitability of his own rotting flesh, Peter better act fast\u0026mdash;while the odds of success are still on the dead.\u003cBR /\u003e  \u003cBR /\u003e \u0026ldquo;A delicious slice of undead Americana\u0026rdquo; (Jonathan Maberry, \u003cI\u003eNew York Times\u003c/I\u003e bestselling author of \u003cI\u003ePatient Zero\u003c/I\u003e), \u003cI\u003eZombie, Ohio\u003c/I\u003e is an outstanding blend of action and witty insight for fans of \u003cI\u003eShaun of the Dead\u003c/I\u003e.\u003cBR /\u003e  \u003cBR /\u003e \u0026ldquo;George Romero, director of the original \u003cI\u003eNight of the Living Dead\u003c/I\u003e and its sequels, should snap up the rights to this novel\u0026hellip;combines humor with horror in a way that is guaranteed to make any zombie fan stand up and shout, \u0026ldquo;Braaaaaains!\u0026rdquo;\u0026mdash;\u003cI\u003eBooklist\u003c/I\u003e\u003c/div\u003e',
    active: false,
    image: 'orim-book-covers.s3.amazonaws.com/9781626366671-book-cover.jpg',
    genre: 'Science Fiction \u0026 Fantasy'
  },
  {
    _id: { $oid: '58e6f01ae1799d0f58a9d3e0' },
    primary_isbn: '9781480451087',
    title: 'The Black Widow Spider Mystery',
    authors: [
      {
        role: 1,
        short_bio:
          'Gertrude Chandler Warner (1890–1979) was an American author of children’s books, most notably the nineteen original titles in the Boxcar Children Mysteries series. Warner was raised in Putnam, Connecticut, across the street from a railroad station, which later inspired her to write about children living in a boxcar. In 1918, she began what would become a thirty-two-year career teaching first and third grade at the Israel Putnam School. She died in Putnam on August 30, 1979, when she was eighty-nine years old. But the Boxcar Children live on: To this day, talented authors contribute new stories to the series, which now includes over one hundred twenty books.',
        firebrand_id: 8748376,
        display_name: 'Gertrude Chandler Warner',
        first_name: 'Gertrude',
        last_name: 'Warner',
        slug: 'gertrude-chandler-warner'
      }
    ],
    bookkey: '13940473',
    isbns: ['9781480451087'],
    price: '4.99',
    amazon_rank: 0,
    publisher: 'Albert Whitman \u0026 Company',
    primary_bisacs: ['Juvenile Fiction'],
    description:
      '\u003cdiv\u003eSomeone is building a large, fancy house down the street from the Aldens\u0026rsquo;\u0026mdash;a house shielded by a tall stone wall. The only way to approach the house is through an iron gate decorated with huge black widow spiders! Benny is certain the new neighbors must be hiding something . . . but what could it be? The Boxcar Children are determined to investigate.?\u003c/div\u003e',
    active: false,
    image: 'book-assets.openroadmedia.com/9781480451087-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6ee3ce1799d0f58a9cde2' },
    primary_isbn: '9781497614277',
    title: 'Diamonds and Pearls',
    authors: [
      {
        _id: { $oid: '58e6ee3cafbe421347a119fa' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 16164896,
        display_name: 'Maggie Davis',
        first_name: 'Maggie',
        last_name: 'Davis',
        slug: 'maggie-davis'
      }
    ],
    bookkey: '16164911',
    isbns: ['9781497614277'],
    price: '4.99',
    amazon_rank: 923781,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003eIt was better than her wildest dreams. When Francesca found out she was the heiress to one of the world\u0026rsquo;s largest fortunes, all her fantasies came true. Wealth put the world at her fingertips. Suddenly fancy cars, stunning jewels, luxurious clothes, and exotic travel were the norm. Even love came knocking at her door. But in the midst of the passion and bliss, a dark secret lurked in the background. Would she risk everything to uncover it?\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497614277-book-cover.jpg'
  },
  {
    _id: { $oid: '58e70198e1799d0f58a9ea83' },
    primary_isbn: '9781504020152',
    title: '9 Powerful Practices of Really Great Mentors',
    authors: [
      {
        _id: { $oid: '58e70198cb576013666e85aa' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 23813649,
        display_name: "Vincent D. O'Connell",
        first_name: 'Vincent',
        last_name: "O'Connell",
        slug: 'vincent-oconnell'
      },
      {
        _id: { $oid: '58e70198cb576013666e85ab' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 23813627,
        display_name: 'Stephen E. Kohn',
        first_name: 'Stephen',
        last_name: 'Kohn',
        slug: 'stephen-kohn'
      }
    ],
    bookkey: '23813538',
    isbns: ['9781504020152'],
    price: '9.99',
    amazon_rank: 1423852,
    publisher: 'Career Press',
    primary_bisacs: ['Business \u0026 Economics'],
    description:
      '\u003cdiv\u003e\u003cB\u003eA practical guide for managers written by a top executive coach and human resources consultant.\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e Most companies around the globe clearly believe that people should have the opportunity to achieve as much as their initiative and native talent can justify, but too many managers still lack the wherewithal to effectively groom junior employees who have the potential to climb the corporate ladder. The support of a mentor is an integral part of any effort to maximize someone\u0026rsquo;s full potential. A mentor-prot\u0026eacute;g\u0026eacute; relationship has many unique features, which both sides of the relationship need to understand and appreciate. Serving in the role of mentor involves providing highly individualized guidance from someone with the appropriate background, life, and work experiences and, importantly, an avid interest in helping others reach their life and career goals.\u003cBR /\u003e\u003cBR /\u003e From two high-profile experts with experience in HR management, leadership development, coaching, and training, this is a hands-on guidebook for those who want to build competence and confidence in the next generation\u0026mdash;benefiting their mentees as individuals as well as their organizations, and enjoying the rewards and satisfaction of a productive relationship with a prot\u0026eacute;g\u0026eacute;.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781504020152-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6ee00e1799d0f58a9cc92' },
    primary_isbn: '9781497641402',
    title: 'Martian Summer',
    authors: [
      {
        role: 1,
        short_bio:
          'Andrew Kessler is the former creative director at Campfire. He co-produced Mars: The Quest for Life on the Discovery Channel and holds a degree in mathematics from the University of California, Berkeley.',
        firebrand_id: 10045858,
        display_name: 'Andrew Kessler',
        first_name: 'Andrew',
        last_name: 'Kessler',
        slug: 'andrew-kessler'
      }
    ],
    bookkey: '16590583',
    isbns: ['9781497641402'],
    price: '9.99',
    amazon_rank: 675368,
    publisher: 'Open Road Media',
    primary_bisacs: ['Science', 'Biography \u0026 Autobiography'],
    description:
      '\u003cdiv\u003e\u003cB\u003eA space enthusiast goes inside mission control with a motley crew of rocket scientists in this \u0026ldquo;fascinating journey of discovery peppered with humor\u0026rdquo; (\u003cI\u003ePublishers Weekly\u003c/I\u003e).\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e The \u003cI\u003ePhoenix \u003c/I\u003eMars mission was the first man-made probe ever sent to the Martian arctic. Its purpose was to find out how climate change could turn a warm, wet planet (read: Earth) into a cold, barren desert (read: Mars). Along the way, \u003cI\u003ePhoenix\u003c/I\u003e discovered a giant frozen ocean trapped beneath the north pole of Mars, exotic food for aliens, and liquid water, and laid the foundation for NASA\u0026rsquo;s current exploration of Mars using the \u003cI\u003eCuriosity\u003c/I\u003e rover.\u003cBR /\u003e\u003cBR /\u003e This is not science fiction. It\u0026rsquo;s fact. And for the luckiest fanboy in fandom, it was the best vacation ever. Andrew Kessler spent the summer of 2008 in NASA\u0026rsquo;s mission control with one hundred thirty of the world\u0026rsquo;s best planetary scientists and engineers as they carried out this ambitious operation. He came back with a story of human drama about modern-day pioneers battling NASA politics, temperamental robots, and the bizarre world of daily life in mission control.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497641402-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '10/25/2016',
        date: { $date: '2016-10-25T04:00:00.000Z' },
        expiration_date: { $date: '2016-10-25T04:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 441,
        ebb_only: false
      }
    ]
  },
  {
    _id: { $oid: '58e6f86ae1799d0f58a9e1fe' },
    primary_isbn: '9781480471962',
    title: 'Down Among the Dead Men',
    authors: [
      {
        role: 1,
        short_bio:
          'Simon R. Green is the New York Times–bestselling author of Blue Moon Rising, Beyond the Blue Moon, the Adventures of Hawk \u0026amp; Fisher, the Novels of the Nightside, the Secret Histories Novels, and the Ghost Finders Novels. He is a resident of Bradford-on-Avon in England.',
        firebrand_id: 15303695,
        display_name: 'Simon R. Green',
        first_name: 'Simon',
        last_name: 'Green',
        slug: 'simon-r-green'
      }
    ],
    bookkey: '15377185',
    isbns: ['9781480471962'],
    price: '9.99',
    amazon_rank: 306221,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cb\u003eIn a fort on the edge of civilization, an ancient evil has awoken\u003c/b\u003e\u003cBR\u003eTen years after the Demon War, the wounds of the Forest Kingdom are finally beginning to heal. Deep in the Darkwood, on the border between two long-feuding territories, a fort has been erected to keep the peace. But a month ago, the soldiers inside stopped speaking to the outside world. Have they come under attack, or is something more sinister at work?\u003cBR\u003eLed by the adventure-hungry warrior Duncan MacNeil, a party of Rangers is sent to investigate. With a witch, a swordsman, and a powerful eight-fingered woman at his side, MacNeil steps into the deserted fort\u0026mdash;and discovers a massacre. The gory scene suggests that the soldiers turned on one other, but the witch has an alternate theory. Beneath this newly built fort, she senses an ancient evil, a power older than the Kingdom itself, about to trap them in the dark.\u003c/div\u003e',
    active: true,
    image:
      'https://s3.amazonaws.com/orim-book-covers/9781480471962-book-cover.jpg',
    genre: 'Science Fiction \u0026 Fantasy',
    ebb_newsletter_data: [
      {
        readable_date: '11/10/2017',
        date: { $date: '2017-11-10T05:00:00.000Z' },
        expiration_date: { $date: '2017-11-10T05:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 51,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6f598e1799d0f58a9de73' },
    primary_isbn: '9781497683747',
    title: "Selkirk's Island",
    authors: [
      {
        role: 1,
        short_bio:
          'Diana Souhami is the author of many highly acclaimed books: Selkirk’s Island, winner of the 2001 Whitbread Biography Award; The Trials of Radclyffe Hall, shortlisted for the James Tait Black Prize for Biography and winner of the Lambda Literary Award; the bestselling Mrs. Keppel and Her Daughter, winner of the Lambda Literary Award and a New York Times Notable Book of 1997; Natalie and Romaine; Gertrude and Alice; Greta and Cecil; Gluck: Her Biography; and others. She lives in London and Devon. ',
        firebrand_id: 19875671,
        display_name: 'Diana Souhami',
        first_name: 'Diana',
        last_name: 'Souhami',
        slug: 'diana-souhami'
      }
    ],
    bookkey: '19966892',
    isbns: ['9781497683747'],
    price: '17.99',
    amazon_rank: 440495,
    publisher: 'Open Road Media',
    primary_bisacs: ['Biography \u0026 Autobiography'],
    description:
      '\u003cdiv\u003e\u003cB\u003eWinner of the Whitbread Biography Award: The true story of the shipwrecked Scottish buccaneer who inspired Daniel Defoe\u0026rsquo;s novel.\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e This action-filled biography follows Alexander Selkirk, an eighteenth-century Scottish buccaneer who sailed the South Seas plundering for gold. But an ill-fated expedition in 1703 led to shipwreck on remote Juan Fern\u0026aacute;ndez Island off the coast of Chile. Selkirk, the ship\u0026rsquo;s master, was accused of inciting mutiny and abandoned on the uninhabited island with nothing but his clothing, his pistol, a knife, and a Bible. Each day he searched the sea for a ship that would rescue him and prayed for help that seemed never to come.\u003cBR /\u003e  \u003cBR /\u003e In solitude and silence Selkirk gradually learned to adapt. He killed seals and goats for food and used their skin for clothing. He learned how to build a house, forage for food, create stores, plant seeds, light a fire, and tame cats. Then one day, a ship with wooden sails appeared on the horizon. The crew was greeted by a bearded savage, incoherent and fierce. Selkirk had been marooned for four years and four months. Now he was about to return to the world of men.\u003cBR /\u003e  \u003cBR /\u003e The story of a verdant, mysterious archipelago and its famous castaway is both a parable about nature and a remarkable account of the survival of a man cut off from civilization.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497683747-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '2/14/2016',
        date: { $date: '2016-02-14T05:00:00.000Z' },
        expiration_date: { $date: '2016-02-14T05:00:00.000Z' },
        original_price: '$14.99',
        promo_price: '$2.99',
        total_sales: 73,
        ebb_only: true
      },
      {
        readable_date: '7/13/2017',
        date: { $date: '2017-07-13T04:00:00.000Z' },
        expiration_date: { $date: '2017-07-13T04:00:00.000Z' },
        original_price: '$14.99',
        promo_price: '$2.99',
        total_sales: 90,
        ebb_only: true
      },
      {
        readable_date: '1/17/2018',
        date: { $date: '2018-01-17T05:00:00.000Z' },
        expiration_date: { $date: '2018-01-17T05:00:00.000Z' },
        original_price: '$17.99',
        promo_price: '$2.99',
        total_sales: 0,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6eddee1799d0f58a9ca6c' },
    primary_isbn: '9781453245682',
    title: 'The Gift Shop',
    authors: [
      {
        role: 1,
        short_bio:
          'Edgar Award–winning Charlotte Armstrong (1905–1969) was one of the finest American authors of classic mystery and suspense. The daughter of an inventor, Armstrong was born in Vulcan, Michigan, and attended Barnard College, in New York City. After college she worked at the New York Times and the magazine Breath of the Avenue, before marrying and turning to literature in 1928. For a decade she wrote plays and poetry, with work produced on Broadway and published in the New Yorker. In the early 1940s, she began writing suspense. Success came quickly. Her first novel, Lay On, MacDuff! (1942) was well received, spawning a three-book series. Over the next two decades, she wrote more than two dozen novels, winning critical acclaim and a dedicated fan base. The Unsuspected (1945) and Mischief (1950) were both made into films, and A Dram of Poison (1956) won the Edgar Award for best novel. She died in California in 1969.    ',
        firebrand_id: 11124822,
        display_name: 'Charlotte Armstrong',
        first_name: 'Charlotte',
        last_name: 'Armstrong',
        slug: 'charlotte-armstrong'
      }
    ],
    bookkey: '11157957',
    isbns: ['9781453245682'],
    price: '9.99',
    amazon_rank: 617229,
    publisher: 'MysteriousPress.com/Open Road',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eEdgar Award Finalist: A dying fraternity brother draws a wealthy playboy into a bizarre conspiracy.\u003c/B\u003e  Bernie staggers off the airplane from Honolulu, a lei around his neck and blood seeping from the wound in his chest. He stumbles to the terminal gift shop, and demands the cashier point him to a payphone. As his life seeps away, Bernie calls Harry Fairchild, his old fraternity brother. Dying or not, he has a job to do. Harry is a playboy, the scion of an oil-rich family known throughout California. Bernie was in Honolulu working for Harry\u0026rsquo;s father, and he has a message to give the old man before he expires. Baffled, Harry races to the airport, arriving just as Bernie is being taken to the hospital, where he dies on the operating table. Somehow Harry\u0026rsquo;s father is mixed up in the murder, and Harry is going to find out how, even if it means risking a knife to his own gut.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453245682-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '7/13/2016',
        date: { $date: '2016-07-13T04:00:00.000Z' },
        expiration_date: { $date: '2016-07-13T04:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 188,
        ebb_only: true
      },
      {
        readable_date: '6/30/2017',
        date: { $date: '2017-06-30T04:00:00.000Z' },
        expiration_date: { $date: '2017-06-30T04:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 157,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6ee60e1799d0f58a9ce8f' },
    primary_isbn: '9781497602205',
    title: 'Sybille',
    authors: [
      {
        role: 1,
        short_bio:
          '\n\nMARION MEADE is the author of Dorothy Parker: What Fresh Hell Is This? and Bobbed Hair and Bathtub Gin: Writers Running Wild in the Twenties. She has also written biographies of Woody Allen, Buster Keaton, Eleanor of Aquitaine, Madame Blavatsky, and Victoria Woodhull, as well as two novels about medieval France.',
        firebrand_id: 16158178,
        display_name: 'Marion Meade',
        first_name: 'Marion',
        last_name: 'Meade',
        slug: 'marion-meade'
      }
    ],
    bookkey: '16192531',
    isbns: ['9781497602205'],
    price: '9.99',
    amazon_rank: 1162274,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eIn thirteenth-century France, a female poet endures the chaos of the Albigensian Crusade in this novel by the author of \u003cI\u003eEleanor of Aquitaine\u003c/I\u003e.\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e A holy war is sweeping France, razing cities and destroying the peaceful lives of those considered heretics.\u003cBR /\u003e\u003cBR /\u003e Sybille d\u0026rsquo;Astarac, born to pampered luxury, is a gifted female troubadour. But her poems grow dark as the Catholic crusade seeks to eradicate her sect. In the face of massacre, can Sybille survive the Inquisition? Will her love songs?\u003cBR /\u003e\u003cBR /\u003e A work of stunning historical fiction, \u003cI\u003eSybille\u003c/I\u003e displays Marion Meade\u0026#39;s pitch-perfect understanding of strong women facing the harsh realities of life in medieval times. As Robin Morgan, author of \u003cI\u003eThe Anatomy of Freedom\u003c/I\u003e, writes, this book is \u0026ldquo;an inspiration for women and an illumination for all readers.\u0026rdquo;\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497602205-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '2/10/2017',
        date: { $date: '2017-02-10T05:00:00.000Z' },
        expiration_date: { $date: '2017-02-10T05:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 80,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6ef7ae1799d0f58a9d1ec' },
    primary_isbn: '9781453256268',
    title: 'A Promise Is a Promise',
    authors: [
      {
        role: 1,
        short_bio:
          "Robert Munsch is a world-renowned storyteller and the author of almost 60 books for children. He was born in Pittsburgh, Pennsylvania and studied to be a Jesuit priest before deciding to work with children instead. He taught in a variety of nursery schools and daycare centers while he earned an MA in Early Childhood Education. In 1975, Munsch and his wife moved to Guelph, Ontario. Since his first picture book, Mud Puddle, was published in 1979, Munsch's award-winning books have become a staple on the bookshelves of families worldwide.",
        firebrand_id: 11304567,
        display_name: 'Robert Munsch',
        first_name: 'Robert',
        last_name: 'Munsch',
        slug: 'robert-munsch'
      },
      {
        role: 1,
        short_bio: '',
        firebrand_id: 11360435,
        display_name: 'Michael Kusugak',
        first_name: 'Michael',
        last_name: 'Kusugak',
        slug: 'michael-kusugak'
      },
      {
        role: 1,
        short_bio: '',
        firebrand_id: 11360436,
        display_name: 'Vladyana Krykorka',
        first_name: 'Vladyana',
        last_name: 'Krykorka',
        slug: 'vladyana-krykorka'
      }
    ],
    bookkey: '11360364',
    isbns: ['9781453256268'],
    price: '7.99',
    amazon_rank: 662554,
    publisher: 'Annick Press',
    primary_bisacs: ['Juvenile Fiction'],
    description:
      '\u003cdiv\u003eWhen Allashua disobeys her parents and goes fishing on the sea ice, she  has to use her wits to escape and to further trick the Qallupilluit when  she promises to bring her brothers and sisters back to them.\u003cBR\u003e\u003cBR\u003eThis fixed-layout ebook, which preserves the design and layout of the original print book, features read-along narration by the author as well as music and sound effects.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453256268-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6ede7e1799d0f58a9cb0d' },
    primary_isbn: '9781453266045',
    title: 'Murder in E Minor',
    authors: [
      {
        role: 1,
        short_bio:
          'Robert Goldsborough (b. 1937) is an American author best known for continuing Rex Stout’s famous Nero Wolfe series. Born in Chicago, he attended Northwestern University and upon graduation went to work for the Associated Press, beginning a lifelong career in journalism that would include long periods at the Chicago Tribune and Advertising Age. While at the Tribune, Goldsborough began writing mysteries in the voice of Rex Stout, the creator of iconic sleuths Nero Wolfe and Archie Goodwin. Goldsborough’s first novel starring Wolfe, Murder in E Minor (1986), was met with acclaim from both critics and devoted fans, winning a Nero Award from the Wolfe Pack. Nine more Wolfe mysteries followed, including Death on Deadline (1987) and Fade to Black (1990). Stop the Presses! (2016) is his most recent novel.',
        firebrand_id: 11596974,
        display_name: 'Robert Goldsborough',
        first_name: 'Robert',
        last_name: 'Goldsborough',
        slug: 'robert-goldsborough'
      }
    ],
    bookkey: '11624437',
    isbns: ['9781453266045'],
    price: '6.99',
    amazon_rank: 143840,
    publisher: 'MysteriousPress.com/Open Road',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eIconic sleuth Nero Wolfe returns to track down the murderer of a New York Symphony Orchestra conductor in this Nero Award\u0026ndash;winning mystery.\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e Ever since disgraced associate Orrie Cather\u0026rsquo;s suicide, armchair detective Nero Wolfe has relished retirement in his Manhattan brownstone on West Thirty-Fifth Street. Two years after Cather\u0026rsquo;s death, only a visit from Maria Radovich\u0026mdash;and the urging of Wolfe\u0026rsquo;s prize assistant, Archie Goodwin\u0026mdash;could draw the eccentric and reclusive genius back into business. Maria\u0026rsquo;s uncle, New York Symphony Orchestra conductor Milan Stevens, formerly known as Milos Stefanovic, spent his youth alongside Wolfe as a fellow freedom fighter in the mountains of Montenegro. And now that the maestro has been receiving death threats, Wolfe can\u0026rsquo;t turn his back on the compatriot who once saved his life.\u003cBR /\u003e\u003cBR /\u003e Though her uncle has dismissed the menacing letters, Maria fears they\u0026rsquo;re more than the work of a harmless crank. But before Wolfe can attack the case, Stevens is murdered. The accused is the orchestra\u0026rsquo;s lead violinist, whose intimate relationship with Maria hit more than a few sour notes in her uncle\u0026rsquo;s professional circle. But Wolfe knows that when it comes to murder, nothing is so simple\u0026mdash;especially when there are so many suspects, from newspaper critics and ex-lovers to an assortment of shady musicians.\u003cBR /\u003e\u003cBR /\u003e Now, in this award-winning novel that carries on the great tradition of Rex Stout, the irascible and immovable Nero Wolfe is back in the game, listening for clues and ready to go to war to find a killer.\u003cBR /\u003e\u003cBR /\u003e Murder in E Minor \u003cI\u003eis the 48th book in the Nero Wolfe Mysteries, but you may enjoy reading the series in any order.\u003c/I\u003e\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453266045-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '1/30/2016',
        date: { $date: '2016-01-30T05:00:00.000Z' },
        expiration_date: { $date: '2016-01-30T05:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 196,
        ebb_only: true
      },
      {
        readable_date: '9/20/2016',
        date: { $date: '2016-09-20T04:00:00.000Z' },
        expiration_date: { $date: '2016-09-20T04:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 250,
        ebb_only: true
      },
      {
        readable_date: '5/25/2017',
        date: { $date: '2017-05-25T04:00:00.000Z' },
        expiration_date: { $date: '2017-05-25T04:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 261,
        ebb_only: true
      },
      {
        readable_date: '7/24/2017',
        date: { $date: '2017-07-24T04:00:00.000Z' },
        expiration_date: { $date: '2017-07-24T04:00:00.000Z' },
        original_price: '$6.99',
        promo_price: '$1.99',
        total_sales: 230,
        ebb_only: true
      },
      {
        readable_date: '12/7/2017',
        date: { $date: '2017-12-07T05:00:00.000Z' },
        expiration_date: null,
        original_price: '$6.99',
        promo_price: '$1.99',
        total_sales: 0,
        ebb_only: false
      }
    ]
  },
  {
    _id: { $oid: '58e71650e1799d0f58a9f369' },
    primary_isbn: '9781628723540',
    title: 'The Dance of Time',
    authors: [
      {
        role: 1,
        firebrand_role: 'author',
        short_bio:
          'Michael Judge has been an actor, playwright, screenwriter, folklorist, and congressional historian and guide, as well as editor of the Senate newsletter, the Inkwell. He lives with his wife in Washington, DC.  ',
        firebrand_id: 32987205,
        display_name: 'Michael Judge',
        first_name: 'Michael',
        last_name: 'Judge',
        slug: 'michael-judge'
      }
    ],
    bookkey: '32987199',
    isbns: ['9781628723540'],
    price: '14.99',
    amazon_rank: 387546,
    publisher: 'Skyhorse Publishing',
    primary_bisacs: ['History', 'Social Science', 'Reference'],
    description:
      '\u003cdiv\u003e\u003cB\u003eA journey through history and legends, myths and superstitions, religion and astronomy\u0026mdash;and how they\u0026rsquo;ve shaped our views of time itself.\u003c/B\u003e\u003cBR /\u003e  \u003cBR /\u003e Three streams of history created our Western calendar\u0026mdash;first from the Sumerians, then from the Celtic and Germanic peoples in the North, and finally from Palestine with the rise of Christianity. This compendium reveals fascinating facts about our attempts to measure and define time and how the days and months came to be, including:\u003cul\u003e\u003cli\u003eThe ancient Romans left sixty days of winter out of their calendar, considering these two months a dead time of lurking terror and therefore better left unnamed\u003c/li\u003e\u003cli\u003eThe Romans had a horror of even numbers, hence the tendency for months with an odd number of days\u003c/li\u003e\u003cli\u003eRobed and bearded Celtic druids stand behind our New Year\u0026rsquo;s figure of Father Time\u003c/li\u003e\u003cli\u003eThursday is Thor\u0026rsquo;s day, and Friday belongs to his faithful wife, Freya, queen of the Norse gods\u003c/li\u003e\u003cli\u003eThe name Easter may derive from the Anglo-Saxon goddess of spring, Eostre\u0026mdash;whose consort was a hare \u003c/li\u003e\u003c/ul\u003eMichael Judge teases out the contributions of these cultures to the shape of the calendar, to the days and holidays, and to associated lore. In them, he finds glimpses of a way of seeing before the mechanical time of clocks, when the rhythms of man and woman matched those of earth and sky.\u003cBR /\u003e  \u003c/div\u003e',
    active: false,
    image: 'orim-book-covers.s3.amazonaws.com/9781628723540-book-cover.jpg'
  },
  {
    _id: { $oid: '58e70174e1799d0f58a9ea11' },
    primary_isbn: '9781504016612',
    title: 'The Tragedy of Z',
    authors: [
      {
        _id: { $oid: '58e6ed71afbe421347a10e57' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 10812428,
        display_name: 'Ellery Queen',
        first_name: 'Ellery',
        last_name: 'Queen',
        slug: 'ellery-queen'
      }
    ],
    bookkey: '23363762',
    isbns: ['9781504016612'],
    price: '7.99',
    amazon_rank: 101655,
    publisher: 'MysteriousPress.com/Open Road',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eInspector Thumm\u0026rsquo;s daughter, Patience, investigates a political murder with the help of actor Drury Lane\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e Patience Thumm has just traveled the world. She turned heads in London, sipped absinthe in Tunis, and debated philosophy on the Left Bank of Paris. When she returns home to New York with a smuggled copy of \u003cI\u003eLady Chatterley\u0026rsquo;s Lover\u003c/I\u003e in her bag, her father, the NYPD\u0026rsquo;s Inspector Thumm, is quite unprepared to handle her. At first, it seems they have nothing in common\u0026mdash;but the two soon discover a shared appetite for murder.\u003cBR /\u003e  \u003cBR /\u003e When a corrupt senator is stabbed to death in his study, Patience can\u0026rsquo;t resist hunting for the killer. With the help of her father\u0026rsquo;s old friend Drury Lane, the legendary Shakespearean actor, she will find that all the exotic cities of the world can\u0026rsquo;t offer anything as exciting as a New York homicide.  \u003cBR /\u003e\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781504016612-book-cover.jpg'
  },
  {
    _id: { $oid: '596f06fe30d596ed7e9060d8' },
    primary_isbn: '9781504047524',
    title: 'Three Science Fiction Thrillers',
    authors: [
      {
        role: 1,
        short_bio:
          'Michael Swanwick has received the Hugo, Nebula, World Fantasy, and Theodore Sturgeon awards for his work. His short fiction has appeared in Omni, Penthouse, Asimov’s, High Times, and numerous other publications, and many pieces have been reprinted in best-of-the-year anthologies. He has written nine novels, among them In the Drift, Stations of the Tide, the New York Times Notable Book The Iron Dragon’s Daughter, Jack Faust, and, most recently, Chasing the Phoenix. Swanwick lives in Philadelphia with his wife, Marianne Porter, and their son, Sean.  ',
        firebrand_id: 22402619,
        display_name: 'Michael Swanwick',
        first_name: 'Michael',
        last_name: 'Swanwick',
        slug: 'michael-swanwick'
      }
    ],
    bookkey: '35082694',
    isbns: ['9781504047524'],
    price: '19.99',
    amazon_rank: 150977,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eThree excursions through time, outer space, and imaginary worlds from \u0026ldquo;one of the most intellectually astute SF writers of his generation\u0026rdquo; (\u003cI\u003eThe\u003c/I\u003e\u003cI\u003e Washington Post\u003c/I\u003e). \u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e Michael Swanwick is a legend in the science fiction and fantasy universe, having won five Hugos, a Nebula, a World Fantasy Award, and many more honors for his mind-bending work. This trio of acclaimed sci-fi thrillers showcases the versatility of an author who can build a world, foresee a future, and alter reality.\u003cBR /\u003e  \u003cBR /\u003e\u003cI\u003eBones of the Earth\u003c/I\u003e: A remarkable scientific breakthrough presented to humankind by an enigmatic future race enables a team of paleontologists to travel back in time to study dinosaurs in their natural prehistoric habitat. But the greatest discovery in history threatens to foment terrorism and create dangerous time paradoxes that could alter tomorrow\u0026rsquo;s world in this Hugo and Nebula Award\u0026ndash;nominated novel.\u003cBR /\u003e  \u003cBR /\u003e\u003cI\u003eIn the Drift\u003c/I\u003e: On an alternate Earth, the meltdown at Pennsylvania\u0026rsquo;s Three Mile Island nuclear power plant created a radioactive wasteland and caused the collapse of the US government. A century later, the mutants, monsters, and untouchables of the no-man\u0026rsquo;s-land called \u0026ldquo;the Drift\u0026rdquo; are descending on the city of Philadelphia.\u003cBR /\u003e  \u003cBR /\u003e\u003cI\u003eVacuum Flowers\u003c/I\u003e: In this futuristic cyberpunk thriller, Rebel Elizabeth Mudlark is a recorded personality owned by a corporate giant. When Rebel\u0026rsquo;s personality is uploaded to an unsuspecting persona tester and burned into her brain, she escapes the corporation by hijacking her host\u0026rsquo;s body and embarking on a mad dash to freedom across the solar system.\u003cBR /\u003e  \u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781504047524-book-cover.jpg',
    genre: 'Science Fiction \u0026 Fantasy',
    ebb_newsletter_data: [
      {
        readable_date: '2/10/2018',
        date: { $date: '2018-02-10T05:00:00.000Z' },
        expiration_date: { $date: '2018-02-10T05:00:00.000Z' },
        original_price: '$19.99',
        promo_price: '$3.99',
        total_sales: 4,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6ee28e1799d0f58a9cd5b' },
    primary_isbn: '9781453264928',
    title: 'The House on the Borderland',
    authors: [
      {
        _id: { $oid: '58e6ee28afbe421347a1183b' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 17198714,
        display_name: 'William Hope Hodgson',
        first_name: 'William',
        last_name: 'Hodgson',
        slug: 'william-hope-hodgson'
      }
    ],
    bookkey: '11581771',
    isbns: ['9781453264928'],
    price: '0.99',
    amazon_rank: 0,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003e\u0026ldquo;A classic of the first water.\u0026rdquo; \u0026mdash;H. P. Lovecraft\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003eIn rural Ireland, two travelers stumble upon the ruins of a lakeside home. Inside, they discover a diary detailing the terrible final days of a man known only as the Recluse. A scholar who bought the house for its isolation, the Recluse is plagued by strange sounds and terrible hallucinations soon after he moves in. He dreams of an eerie \u0026ldquo;Plain of Silence,\u0026rdquo; where a jade-green version of the house is surrounded by ominous mountains populated with mythical beasts and gargantuan monsters. Exploring a nearby ravine known locally as the Pit, the Recluse and his loyal dog, Pepper, are attacked by a creature that appears to be half human and half swine. A fantasy reunion with his long-lost lover proves that the house has powers beyond the Recluse\u0026rsquo;s comprehension. And just when he thinks that the horror is finally over, the real nightmare begins.\u003cBR /\u003e\u003cBR /\u003eDripping with tension and atmosphere, \u003cI\u003eThe House on the Borderland \u003c/I\u003eis a landmark of supernatural horror and one of the scariest stories ever told.\u003cBR /\u003e \u003cBR /\u003eThis ebook has been professionally proofread to ensure accuracy and readability on all devices.\u003cBR /\u003e\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453264928-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '10/21/2016',
        date: { $date: '2016-10-21T04:00:00.000Z' },
        expiration_date: { $date: '2016-10-21T04:00:00.000Z' },
        original_price: '$0.99',
        promo_price: '$0.00',
        total_sales: 3,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6f17fe1799d0f58a9d6b9' },
    primary_isbn: '9781497653894',
    title: 'Conformation Faults',
    authors: [
      {
        role: 1,
        short_bio:
          'Bonnie Bryant is the author of over one hundred forty books about horses, including the Saddle Club series and its spinoffs, the Pony Tails series and the Pine Hollow series. Bryant did not know very much about horses before writing the first Saddle Club book in 1986, so she found herself learning right along with the characters she created. She has also written novels and movie novelizations under her married name, Bonnie Bryant Hiller. Bryant was born and raised in New York City, where she still lives today.',
        firebrand_id: 17759961,
        display_name: 'Bonnie Bryant',
        first_name: 'Bonnie',
        last_name: 'Bryant',
        slug: 'bonnie-bryant'
      }
    ],
    bookkey: '17870712',
    isbns: ['9781497653894'],
    price: '6.99',
    amazon_rank: 782346,
    publisher: 'Open Road Media',
    primary_bisacs: ['Young Adult Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eSecrets are threatening to ruin everything\u0026mdash;can Stevie, Carole, and Alex\u0026rsquo;s friendship survive?\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003eLisa Atwood and her boyfriend, Alex Lake, are finally back on track\u0026mdash;even if she\u0026rsquo;s still keeping some secrets. Carole Hanson\u0026rsquo;s slipping grades could take her away from her beloved Pine Hollow Stables unless she does something drastic. Callie Forester, the congressman\u0026rsquo;s daughter who recently moved to Willow Creek with her brother, Scott, has things she doesn\u0026rsquo;t want folks back home in Washington to know. When someone close to her betrays her confidence, Callie doesn\u0026rsquo;t know how she\u0026rsquo;ll ever be able to trust anyone again. And now a terrible fight could end Lisa and Carole\u0026rsquo;s relationship for good. Stevie Lake refuses to take sides . . . until she\u0026rsquo;s caught up in a tangled web of lies and deception and has to choose between Lisa and her twin brother, Alex.\u003cBR /\u003e\u003cBR /\u003eCan their bonds survive the fallout? \u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497653894-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6ee6de1799d0f58a9cecb' },
    primary_isbn: '9781497642652',
    title: 'The Marcus Device',
    authors: [
      {
        _id: { $oid: '58e6ee6dafbe421347a11d8c' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 18125333,
        display_name: 'Ib Melchior',
        first_name: 'Ib',
        last_name: 'Melchior',
        slug: 'ib-melchior'
      }
    ],
    bookkey: '18265880',
    isbns: ['9781497642652', '9781497661462'],
    price: '9.99',
    amazon_rank: 3302785,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003eOur top-secret weapon is missing. And America\u0026rsquo;s top test pilot is missing too. Full of a fierce, obsessive will to live, Tom Darby is about to test-fire the USA\u0026rsquo;s ultimate weapon\u0026mdash;when something goes tragically wrong. His F-15 fighter explodes in a ball of fire. He ejects into the killing heat of Death Valley. Crazed by injuries, he becomes a wild beast running for his life from unseen enemies\u0026mdash;and from his rescuers. Even from his beautiful wife. American teams want him. So do sinister East German agents, headed by an ex-Nazi. Because they believe he possesses . . . \u003cI\u003eThe Marcus Device\u003c/I\u003e\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497642652-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6eebbe1799d0f58a9cf12' },
    primary_isbn: '9781480420564',
    title: "Don't Sneeze at the Wedding",
    authors: [
      {
        _id: { $oid: '58e6edc9afbe421347a111c9' },
        role: 3,
        firebrand_role: 'illustrator',
        firebrand_id: 12920315,
        display_name: 'Martha Avilés',
        first_name: 'Martha',
        last_name: 'Avilés',
        slug: 'martha-aviles'
      }
    ],
    bookkey: '12920517',
    isbns: ['9781480420564', '9781480420601'],
    price: '6.99',
    amazon_rank: 1071621,
    publisher: 'Kar-Ben Publishing',
    primary_bisacs: ['Juvenile Fiction'],
    description:
      '\u003cdiv\u003eAnna is excited to be the flower girl at her aunt\u0026amp;rsquo;s wedding, but that morning she wakes up and . . . \u0026amp;ldquo;AH-CHOO!\u0026amp;rdquo; \u003cBR\u003e\u003cBR\u003e\u0026amp;ldquo;Don\u0026amp;rsquo;t sneeze at the wedding!\u0026amp;rdquo; everyone warns her, but will their remedies work?\u003cBR\u003eThis fixed-layout ebook, which preserves the design and layout of the original print book, features read-along narration.\u003c/div\u003e',
    active: false,
    image: 'book-assets.openroadmedia.com/9781480420564-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6f080e1799d0f58a9d4bb' },
    primary_isbn: '9781480478107',
    title: 'Elan, Son of Two Peoples',
    authors: [
      {
        _id: { $oid: '58e6eeb9afbe421347a12353' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 12795881,
        display_name: 'Heidi Hyde',
        first_name: 'Heidi',
        last_name: 'Hyde',
        slug: 'heidi-smith-hyde'
      },
      {
        _id: { $oid: '58e6f080afbe421347a14121' },
        role: 3,
        firebrand_role: 'illustrator',
        firebrand_id: 15652459,
        display_name: 'Mikela Prevost',
        first_name: 'Mikela',
        last_name: 'Prevost',
        slug: 'mikela-prevost'
      }
    ],
    bookkey: '15652373',
    isbns: ['9781480478107'],
    price: '6.99',
    amazon_rank: 1887317,
    publisher: 'Kar-Ben Publishing',
    primary_bisacs: ['Juvenile Fiction'],
    description:
      '\u003cdiv\u003e\u0026amp;ldquo;Always remember you are the son of two proud nations,\u0026amp;rdquo; Elan\u0026amp;rsquo;s parents tell him when he turns 13. After celebrating his Bar Mitzvah in San Francisco, Elan, with his Jewish father and Native American mother, travels to New Mexico, where he takes part in a Pueblo manhood ceremony. Based on a true story.\u003cBR /\u003e\u003cBR /\u003eThis fixed-layout ebook, which preserves the design and layout of the original print book, features read-along narration.\u003c/div\u003e',
    active: false,
    image: 'book-assets.openroadmedia.com/9781480478107-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6f3d8e1799d0f58a9dbd3' },
    primary_isbn: '9781497627383',
    title: 'Trapped',
    authors: [
      {
        _id: { $oid: '58e6ee03afbe421347a1160d' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 16157180,
        display_name: 'James Alan Gardner',
        first_name: 'James',
        last_name: 'Gardner',
        slug: 'james-gardner'
      }
    ],
    bookkey: '16194497',
    isbns: ['9781497627383'],
    price: '4.99',
    amazon_rank: 303430,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003eLife on Old Earth is simple. Under the rule of the Spark Lords, most chaos has been brought under control. Five unsatisfied teachers out for a night of drinking is nothing out of the ordinary . . . until they find one of their students has been murdered by an unknown alien organism. When it is discovered that the murdered student\u0026rsquo;s boyfriend has gone missing, these misfits find themselves tangled in an unofficial homicide investigation that uncovers things they had never imagined. The hunt for a murderer unveils a horrifying conspiracy that may involve everyone from the Spark Lords to the League of Peoples . . . and a force more sinister than anything they could have imagined.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497627383-book-cover.jpg',
    genre: 'Science Fiction \u0026 Fantasy'
  },
  {
    _id: { $oid: '58e6f121e1799d0f58a9d5ca' },
    primary_isbn: '9781453296141',
    title: 'Thingy Things Volume 2',
    authors: [
      {
        role: 1,
        short_bio:
          'Chris Raschka (b. 1959) is an author and illustrator of picture books. He was born in Pennsylvania and raised outside of Chicago, Illinois. He began painting as a child but was also interested in becoming a doctor, so he got a college degree in biology and applied to medical school. On the first day of class, though, he changed his mind. Raschka began to write and draw professionally; his early books include the Caldecott Honor winner Yo! Yes? (1993), The Blushful Hippopotamus (1996),and Arlene Sardine (1998). He has won acclaim for his striking, minimalist style and his ability to tell a story with just one or two dozen words. An accomplished violist, Raschka has also written many books about music, including John Coltrane’s Giant Steps (2002), Simple Gifts (1998), and Charlie Parker Played Be Bop (1992). He has won Caldecott medals for The Hello, Goodbye Window (2005) and A Ball for Daisy (2011), an entirely wordless book.',
        firebrand_id: 11615028,
        display_name: 'Chris Raschka',
        first_name: 'Chris',
        last_name: 'Raschka',
        slug: 'chris-raschka'
      }
    ],
    bookkey: '12400512',
    isbns: ['9781453296141'],
    price: '6.99',
    amazon_rank: 470780,
    publisher: 'Open Road Media',
    primary_bisacs: ['Juvenile Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eFour animals have no choice but to be themselves\u0026mdash;even if it means being silly!\u003c/B\u003e What is Doggy Dog? Is he a cat? Is he a potato? Is he a lampshade? No! He is a dog! Goosey Goose is a goose, and that means she is trouble. Mess with her and you will see just how tough a goose can be. Lamby Lamb is very sweet\u0026mdash;until you try to make her put on her clothes. How do you make Lamby Lamb get dressed? Trick her! We love Snaily Snail no matter what. We love her when she\u0026rsquo;s here; we love her when she\u0026rsquo;s there. We love her every day\u0026mdash;and you will too! In these succinct, quirky stories from master illustrator Chris Raschka, four silly animals learn that it\u0026rsquo;s important to be themselves.\u003cBR /\u003e\u003cBR /\u003e This fixed-layout ebook, which preserves the design and layout of the original print book, features read-along narration.\u003cBR /\u003e    \u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453296141-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6f49fe1799d0f58a9dcd7' },
    primary_isbn: '9781453250556',
    title: 'Pious Deception',
    authors: [
      {
        _id: { $oid: '58e6f49fcb576013666dd8fc' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 11226127,
        display_name: 'Susan Dunlap',
        first_name: 'Susan',
        last_name: 'Dunlap',
        slug: 'susan-dunlap'
      }
    ],
    bookkey: '11233266',
    isbns: ['9781453250556'],
    price: '7.99',
    amazon_rank: 94486,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eFormer medical examiner Kiernan O\u0026rsquo;Shaughnessy investigates a scandalous suicide in a Catholic church\u003c/B\u003e\u003cBR /\u003eQuick-witted, precise, and comfortable with corpses, Kiernan O\u0026rsquo;Shaughnessy was perfectly suited to life as a medical examiner. In her four years with the coroner\u0026rsquo;s office, she never had one unhappy shift until the day they let her go. Enraged and adrift, she made her way to La Jolla, California, to set up a high-class private investigation service for medically suspicious deaths. She works only the cases she wants, and charges a steep enough fee that she can afford a cherry red Triumph and a former NFL player as a houseman. Her latest client is one of the biggest moneymakers on the planet: the Roman Catholic Church. A troubled young priest is found hanged in Mission San Leo in Phoenix, Arizona. Hoping to avoid scandal, the bishop bypasses the police, and hires Kiernan to determine whether the death was an accident or a suicide. They ask her to be quiet, but the secrets she uncovers will make her want to sing louder than any church choir.\u003cBR /\u003e\u003cBR /\u003eThis ebook features an illustrated biography of Susan Dunlap including rare images from the author\u0026rsquo;s personal collection.\u003cBR /\u003e\u003cBR /\u003e\u003cB\u003e\u003cI\u003ePious Deception\u003c/I\u003e is the 1st book in the Kiernan O\u0026#39;Shaughnessy Mysteries, but you may enjoy reading the series in any order.\u003c/B\u003e\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453250556-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '5/6/2016',
        date: { $date: '2016-05-06T04:00:00.000Z' },
        expiration_date: { $date: '2016-05-06T04:00:00.000Z' },
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 65,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6f3c2e1799d0f58a9dbba' },
    primary_isbn: '9781497612259',
    title: 'Ascending',
    authors: [
      {
        role: 1,
        short_bio:
          'James A. Gardner is the author of seven science fiction novels and one collection of short stories. Gardner lives in Kitchener, Ontario, Canada.',
        firebrand_id: 16157180,
        display_name: 'James Alan Gardner',
        first_name: 'James',
        last_name: 'Gardner',
        slug: 'james-alan-gardner'
      }
    ],
    bookkey: '16157195',
    isbns: ['9781497612259'],
    price: '4.99',
    amazon_rank: 410661,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003eFour years after Festina Ramos left Melaquin, the \u0026ldquo;planet of no return,\u0026rdquo; Uclodda Unorr arrives. Unorr is a hired smuggler tasked with gathering evidence of misconduct of the Technocracy\u0026rsquo;s Outward Fleet. Much to his surprise he discovers that Oar, a resident of the planet and last of her kind, is still alive. Though Oar\u0026rsquo;s glass-like body is indestructible, her mind grows weak and will soon fall victim to \u0026ldquo;apathetic hibernation.\u0026rdquo; Along with her old friend Admiral Festina Ramos, Oar must reveal the true history of Melaquin and expose the ugly deeds of the Outward Fleet before her weary mind surrenders.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497612259-book-cover.jpg',
    genre: 'Science Fiction \u0026 Fantasy'
  },
  {
    _id: { $oid: '5a70299a2ad4b3e3d0ae274d' },
    amazon_rank: 0,
    active: false,
    title: 'Among the Wonderful',
    price: '14.99',
    bookkey: '40444340',
    publisher: 'Steerforth',
    description: '',
    authors: [
      {
        role: 1,
        short_bio: '',
        firebrand_id: 40504691,
        display_name: 'Stacy Carlson',
        first_name: 'Stacy',
        last_name: 'Carlson',
        slug: 'stacy-carlson'
      }
    ],
    isbns: ['9781586421878'],
    primary_isbn: '9781586421878',
    primary_bisacs: ['Fiction']
  },
  {
    _id: { $oid: '58e6f65ce1799d0f58a9df37' },
    primary_isbn: '9781480422049',
    title: "Chip Crockett's Christmas Carol",
    authors: [
      {
        role: 1,
        short_bio:
          'Elizabeth Hand (b. 1957) is an award-winning author whose science fiction and fantasy novels include the Winterlong series, Waking the Moon, Black Light, Last Summer at Mars Hill, and Glimmering. Her novels and short stories have won the Nebula, World Fantasy, and Shirley Jackson awards, among others. Hand was born in California and raised in Yonkers and Pound Ridge, New York; she now divides her time between London and the coast of Maine. Over the years she has been a regular contributor to the Washington Post, the Village Voice, the Los Angeles Times, and the Magazine of Fantasy and Science Fiction, among many others.',
        firebrand_id: 11792060,
        display_name: 'Elizabeth Hand',
        first_name: 'Elizabeth',
        last_name: 'Hand',
        slug: 'elizabeth-hand'
      }
    ],
    bookkey: '12936266',
    isbns: ['9781480422049'],
    price: '5.99',
    amazon_rank: 362995,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cb\u003eThe father of an autistic child dreams of a Christmas miracle in this moving short novel nominated for the World Fantasy Award\u0026mdash;proceeds to be donated to Autism Speaks\u003c/b\u003e\u003cBR\u003eWhen Brendan touches his four-year-old son, Peter screams and pulls away. He suffers from a form of autism known as Pervasive Developmental Disorder and has no idea how much his father wants to make him smile. Their relationship is tortured, but Christmas is coming, and a miracle might come with it.\u003cBR\u003eAn unlikely harbinger of the holidays arrives in the form of Tony Kemper, Brendan\u0026rsquo;s childhood friend who\u0026rsquo;s never quite gotten over his glory days as a 1970s punk sensation. Broke, unemployed, and homeless, Tony has recently become obsessed with the long-canceled Chip Crockett television show, a beloved memory from when they were kids. Not a minute of footage remains of Chip, but these three boys are about to discover that when an entertainer is truly great, his magic will last forever.\u003cBR\u003ePreviously serialized online, this is the first time \u003ci\u003eChip Crockett\u0026rsquo;s Christmas Carol\u003c/i\u003e has been published in ebook form. Elizabeth Hand will donate all proceeds from this book to Autism Speaks in honor of special education teacher Anne Marie Murphy, who was killed in the Sandy Hook shooting. The two attended the same high school, where Murphy was a friend of Hand\u0026rsquo;s younger sister.\u003c/div\u003e',
    active: true,
    image:
      'https://s3.amazonaws.com/orim-book-covers/9781480422049-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '12/12/2016',
        date: { $date: '2016-12-12T05:00:00.000Z' },
        expiration_date: { $date: '2016-12-12T05:00:00.000Z' },
        original_price: '$5.99',
        promo_price: '$1.99',
        total_sales: 64,
        ebb_only: true
      }
    ],
    genre: 'Science Fiction \u0026 Fantasy'
  },
  {
    _id: { $oid: '5a72cc8e2ad4b3e3d0ae27f7' },
    amazon_rank: 0,
    active: false,
    title: 'Deadly Secrets',
    price: '20.99',
    bookkey: '40520160',
    publisher: 'Open Road Media',
    description: '',
    authors: [
      {
        role: 1,
        short_bio:
          'Richard Hammer is the author of more than twenty fiction and nonfiction books, as well as numerous short stories, articles, and essays for major publications worldwide. He has won two Edgar Awards for Best Fact Crime, for The Vatican Connection (1982) and The CBS Murders (1987), and was a finalist for the Pulitzer Prize and the National Book Award for The Court-Martial of Lt. Calley (1971). Both the New York Times and the Washington Post named One Morning in the War (1970) and The Court-Martial of Lt. Calley one of the ten best books of the respective years in which they were published. Hammer’s first book, Between Life and Death (1969), explored the case that led to the landmark Supreme Court decision in Brady v. Maryland and its repercussions. He wrote and narrated the Academy Award–winning documentary Interviews with My-Lai Veterans (1970), and has been involved in many TV films and motion pictures. Before becoming a full-time freelance writer, he wrote for the New York Times and its Week in Review section, where he covered the war in Vietnam, the civil rights struggle, and most other major stories of the times. A native of Hartford, Connecticut, Hammer attended Mount Hermon School, earned degrees from Syracuse University and Trinity College, and did postgraduate work at Columbia University. He and his wife currently reside in New York City.',
        firebrand_id: 28602981,
        display_name: 'Richard Hammer',
        first_name: 'Richard',
        last_name: 'Hammer',
        slug: 'richard-hammer'
      }
    ],
    isbns: ['9781504052283'],
    primary_isbn: '9781504052283',
    primary_bisacs: ['True Crime', 'Biography \u0026 Autobiography', 'Religion']
  },
  {
    _id: { $oid: '58e6f86be1799d0f58a9e201' },
    primary_isbn: '9781480473812',
    title: 'Lightfall',
    authors: [
      {
        _id: { $oid: '58e6edd6afbe421347a11281' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 15415368,
        display_name: 'Paul Monette',
        first_name: 'Paul',
        last_name: 'Monette',
        slug: 'paul-monette'
      }
    ],
    bookkey: '15527124',
    isbns: ['9781480473812'],
    price: '14.99',
    amazon_rank: 2004930,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eIn the village of Pitts Landing, true evil can linger for centuries\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003eIt all started with the desperate urging of an internal voice, born from a pulse-pounding nightmare: \u003cI\u003eRun.\u003c/I\u003e With that, Iris Ammons felt impelled to leave behind her husband, her children, her job, and her idyllic life. Her motive was never clear to her, just a notion that her entire life had become unfamiliar and that she had to get to the West Coast and the mystical village of Pitts Landing.\u003cBR /\u003e\u003cBR /\u003eSimilarly focused on the town is its devilishly charismatic cult leader Michael Roman. Michael cuts a bloody swath through his followers in order to get to the secret at the heart of the village.\u003cBR /\u003e\u003cBR /\u003eAs the coincidences pile up and the omens stack on top of one another like the bodies of Michael\u0026rsquo;s disciples, he and Iris find themselves at the center of a mystery that stretches back for generations and has effects that could be felt for centuries to come.\u003cBR /\u003e\u003cBR /\u003e\u003cI\u003eLightfall \u003c/I\u003eis an erotic horror epic from gifted National Book Award winner Paul Monette, a master of combining thrills with intense emotion, no matter what the genre.\u003cBR /\u003e\u003cBR /\u003eThis ebook features an illustrated biography of Paul Monette including rare images and never-before-seen documents from the Paul Monette papers of the UCLA Library Special Collections.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781480473812-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6f293e1799d0f58a9d99c' },
    primary_isbn: '9781497654143',
    title: 'Track Record',
    authors: [
      {
        role: 1,
        short_bio:
          'Bonnie Bryant is the author of over one hundred forty books about horses, including the Saddle Club series and its spinoffs, the Pony Tails series and the Pine Hollow series. Bryant did not know very much about horses before writing the first Saddle Club book in 1986, so she found herself learning right along with the characters she created. She has also written novels and movie novelizations under her married name, Bonnie Bryant Hiller. Bryant was born and raised in New York City, where she still lives today.',
        firebrand_id: 17759961,
        display_name: 'Bonnie Bryant',
        first_name: 'Bonnie',
        last_name: 'Bryant',
        slug: 'bonnie-bryant'
      }
    ],
    bookkey: '17872510',
    isbns: ['9781497654143'],
    price: '6.99',
    amazon_rank: 1057297,
    publisher: 'Open Road Media',
    primary_bisacs: ['Young Adult Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eA broken heart mends faster when you go back to what makes you the happiest\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e Carole is back at Pine Hollow full time, spending as many hours as she can with the horses she loves. There\u0026rsquo;s no better place to heal than the stable.\u003cBR /\u003e  \u003cBR /\u003e While Stevie is busy training for eventing, Callie is trying to figure out what to do about George. Is she imagining things, or is he stalking her? And now that Lisa and Alex have officially broken up, Callie finds that her relationship with Scott isn\u0026rsquo;t exactly easy either. It seems like the girls have a better track record with their horses at the stable than with the boys outside of it.\u003cBR /\u003e\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497654143-book-cover.jpg'
  },
  {
    _id: { $oid: '59ca917f2ad4b3e3d0adf837' },
    title: 'Call the Nurse',
    authors: [{ role: 1, display_name: 'Mary MacLeod' }],
    publisher: 'Skyhorse',
    primary_isbn: '9781611459173',
    image: 'book-assets.openroadmedia.com/Call the Nurse_9781611459173_FC.jpg',
    sale_dlp: '1.99',
    price: '14.99',
    partner_title: true
  },
  {
    _id: { $oid: '59f974802ad4b3e3d0ae0efc' },
    amazon_rank: 186513,
    active: true,
    title: 'Let Us Now Praise Famous Men',
    price: '17.99',
    bookkey: '38522456',
    publisher: 'Houghton Mifflin Harcourt',
    description:
      '\u003cdiv\u003e\u003cB\u003eThis portrait of poverty-stricken Southern tenant farmers during the Great Depression has become one of the most influential books of the past century.\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e In the summer of 1936, Pulitzer Prize\u0026ndash;winning writer James Agee and photographer Walker Evans set out on assignment for \u003cI\u003eFortune\u003c/I\u003e magazine to explore the daily lives of white sharecroppers in the South. Their journey would prove an extraordinary collaboration\u0026mdash;and a watershed literary event.\u003cBR /\u003e  \u003cBR /\u003e\u003cI\u003eLet Us Now Praise Famous Men\u003c/I\u003e was published to enormous critical acclaim. An unsparing record in words and pictures of this place, the people who shaped the land, and the rhythm of their lives, it would eventually be recognized by the New York Public Library as one of the most influential books of the twentieth century\u0026mdash;and serve as an inspiration to artists from composer Aaron Copland to David Simon, creator of \u003cI\u003eThe Wire\u003c/I\u003e. With an additional sixty-four archival photos in this edition, \u003cI\u003eLet Us Now Praise Famous Men\u003c/I\u003e remains as relevant and important as when it was first published over seventy-seven years ago.\u003cBR /\u003e  \u003cBR /\u003e \u0026ldquo;One of the most brutally revealing records of an America that was ignored by society\u0026mdash;a class of people whose level of poverty left them as spiritually, mentally, and physically worn as the land on which they toiled. Time has done nothing to decrease this book\u0026rsquo;s power.\u0026rdquo; \u0026mdash;\u003cI\u003eLibrary Journal\u003c/I\u003e\u003c/div\u003e',
    authors: [
      {
        role: 1,
        short_bio: '',
        firebrand_id: 38522467,
        display_name: 'Walker Evans',
        first_name: 'Walker',
        last_name: 'Evans',
        slug: 'walker-evans'
      },
      {
        role: 0,
        short_bio:
          'James Agee (1909-1955) was a poet, screenwriter, and journalist who won the Pulitzer Prize for his novel A DEATH IN THE FAMILY.',
        firebrand_id: 38522469,
        display_name: 'James Agee',
        first_name: 'James',
        last_name: 'Agee',
        slug: 'james-agee'
      }
    ],
    isbns: ['9780547526393'],
    primary_isbn: '9780547526393',
    primary_bisacs: ['Photography', 'History'],
    image:
      'https://s3.amazonaws.com/orim-book-covers/9780547526393-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6edd9e1799d0f58a9ca15' },
    primary_isbn: '9781453229262',
    title: 'Calamity Town',
    authors: [
      {
        role: 1,
        short_bio:
          'Ellery Queen was a pen name created and shared by two cousins, Frederic Dannay (1905–1982) and Manfred B. Lee (1905–1971), as well as the name of their most famous detective. Born in Brooklyn, they spent forty-two years writing, editing, and anthologizing under the name, gaining a reputation as the foremost American authors of the Golden Age “fair play” mystery. Although eventually famous on television and radio, Queen’s first appearance came in 1928, when the cousins won a mystery-writing contest with the book that would eventually be published as The Roman Hat Mystery. Their character was an amateur detective who uses his spare time to assist his police inspector uncle in solving baffling crimes. Besides writing the Queen novels, Dannay and Lee cofounded Ellery Queen’s Mystery Magazine, one of the most influential crime publications of all time. Although Dannay outlived his cousin by nine years, he retired Queen upon Lee’s death. ',
        firebrand_id: 10812428,
        display_name: 'Ellery Queen',
        first_name: 'Ellery',
        last_name: 'Queen',
        slug: 'ellery-queen'
      }
    ],
    bookkey: '10812558',
    isbns: ['9781453229262'],
    price: '9.99',
    amazon_rank: 198889,
    publisher: 'MysteriousPress.com/Open Road',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cb\u003eLooking for trouble, Ellery Queen descends on a small town\u003c/b\u003eAt the tail end of the long summer of 1940, there is nowhere in the country more charming than Wrightsville. The Depression has abated, and for the first time in years the city is booming. There is hope in Wrightsville, but Ellery Queen has come looking for death. The mystery author is hoping for fodder for a novel, and he senses the corruption that lurks beneath the apple pie fa\u0026ccedil;ade. He rents a house owned by the town\u0026rsquo;s first family, whose three daughters star in most of the local gossip. One is fragile, left at the altar three years ago and never recovered. Another is engaged to the city\u0026rsquo;s rising political star, an upright man who\u0026rsquo;s already boring her. And then there\u0026rsquo;s Lola, the divorced, bohemian black sheep. Together, they make a volatile combination. Once he sees the ugliness in Wrightsville, Queen sits back\u0026mdash;waiting for the crime to come to him.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453229262-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '1/16/2017',
        date: { $date: '2017-01-16T05:00:00.000Z' },
        expiration_date: { $date: '2017-01-16T05:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 371,
        ebb_only: true
      },
      {
        readable_date: '9/18/2017',
        date: { $date: '2017-09-18T04:00:00.000Z' },
        expiration_date: { $date: '2017-09-18T04:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 215,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6f8f2e1799d0f58a9e31b' },
    primary_isbn: '9781504004213',
    title: 'Mr. Apology',
    authors: [
      {
        role: 1,
        firebrand_role: 'author',
        short_bio:
          'Campbell Armstrong (1944–2013) was an international bestselling author best known for his thriller series featuring British counterterrorism agent Frank Pagan, and his quartet of Glasgow Novels, featuring detective Lou Perlman. Two of these, White Rage and Butcher, were nominated for France’s Prix du Polar. Armstrong’s novels Assassins \u0026amp; Victims and The Punctual Rape won Scottish Arts Council Book of the Year Awards. Born in Glasgow and educated at the University of Sussex, Armstrong worked as a book editor in London and taught creative writing at universities in the United States.  ',
        firebrand_id: 21211353,
        display_name: 'Campbell Armstrong',
        first_name: 'Campbell',
        last_name: 'Armstrong',
        slug: 'campbell-armstrong'
      }
    ],
    bookkey: '21192693',
    isbns: ['9781504004213'],
    price: '7.99',
    amazon_rank: 1000136,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eIn international bestselling author Campbell Armstrong\u0026rsquo;s tense, sophisticated thriller, an art project gone wrong draws a painter into the world of a serial killer\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e All around himself, Harrison sees New York City sinking into chaos. Graffiti, robbery, murder, and rape fill the news\u0026mdash;crimes committed by desperate people who saw no other option than to hurt someone. As a human being, Harrison is sickened by it. As an artist, he sees an opportunity. After years of getting no recognition for his painting, Harrison is about to quit making art when he has the idea for the Mr. Apology hotline. He posts handbills asking criminals to call in and confess their crimes\u0026mdash;anonymously, of course\u0026mdash;so he can turn their guilt into his art. But what starts as a clever idea soon takes a deadly turn.\u003cBR /\u003e  \u003cBR /\u003e When a man calls in to say he\u0026rsquo;s planning on killing someone, Harrison isn\u0026rsquo;t sure whether to believe it. But when a killing spree grips the city, this starving artist has no doubt that the final target will be Mr. Apology himself.\u003cBR /\u003e\u003cBR /\u003e\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781504004213-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '10/16/2017',
        date: { $date: '2017-10-16T04:00:00.000Z' },
        expiration_date: { $date: '2017-10-16T04:00:00.000Z' },
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 0,
        ebb_only: true
      },
      {
        readable_date: '10/16/2017',
        date: { $date: '2017-10-16T04:00:00.000Z' },
        expiration_date: { $date: '2017-10-16T04:00:00.000Z' },
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 41,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6fd63e1799d0f58a9e8ce' },
    primary_isbn: '9781480461499',
    title: 'The Shadewell Shenanigans',
    authors: [
      {
        _id: { $oid: '58e6ee2eafbe421347a118c9' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 14531779,
        display_name: 'David Lee Stone',
        first_name: 'David',
        last_name: 'Stone',
        slug: 'david-lee-stone'
      }
    ],
    bookkey: '14596201',
    isbns: ['9781480461499'],
    price: '6.99',
    amazon_rank: 2514983,
    publisher: 'Open Road Media',
    primary_bisacs: ['Juvenile Fiction'],
    description:
      '\u003cdiv\u003e\u003cb\u003eIn the third book of the Illmoor Chronicles, three competitive mercenaries embark on a perilous quest to compete for a princess\u0026rsquo;s hand in marriage\u0026mdash;but stumble instead into a dark and murderous plot\u003c/b\u003e\u003cBR\u003eGroan is a hulking mountain of muscle. Gape is his similarly large but slightly smarter half-brother. Gordo is Groan\u0026rsquo;s partner, a dwarf who is absolutely deadly with an axe. Together, they have roved the lands of Illmoor, often thieving and occasionally lending a helping hand to the kingdom\u0026rsquo;s ragged towns. But Groan and Gordo have ended up on the rulers\u0026rsquo; bad side too often, and now the king of Phlegm has enlisted the help of Duke Modeset to eradicate them. The royals create a grand tournament whose prize is the princess\u0026mdash;a competition the warriors cannot resist\u0026mdash;and then usher the men off on a series of deadly missions that they could not possibly survive. The hazardous adventure sends them around the kingdom, battling foes of all shapes and sizes, until the final confrontation that will change the future of Illmoor forever.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781480461499-book-cover.jpg',
    genre: 'Science Fiction \u0026 Fantasy'
  },
  {
    _id: { $oid: '58e6f1bae1799d0f58a9d761' },
    primary_isbn: '9781453201008',
    title: 'Leaving Ireland',
    authors: [
      {
        role: 1,
        short_bio:
          'Ann Moore was born in England and grew up in the Pacific Northwest region of Washington State. An award-winning author, Moore holds a master of arts from Western Washington University. Her trilogy of historical novels—Gracelin O’Malley, Leaving Ireland, and ’Til Morning Light—has been published internationally and enjoys a wide readership of enthusiastic fans. Moore and her family live in Bellingham, Washington.',
        firebrand_id: 17661643,
        display_name: 'Ann Moore',
        first_name: 'Ann',
        last_name: 'Moore',
        slug: 'ann-moore'
      }
    ],
    bookkey: '8572006',
    isbns: ['9781453201008'],
    price: '8.99',
    amazon_rank: 189253,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eGracelin O\u0026rsquo;Malley leaves her beloved homeland for a new life in America in the second captivating novel in Ann Moore\u0026rsquo;s acclaimed Irish historical trilogy\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e Forced to flee Ireland, Gracelin O\u0026rsquo;Malley boards a coffin ship bound for America, taking her young daughter with her on the arduous transatlantic voyage. In New York, Gracelin struggles to adapt to a strange new world and to the harsh realities of immigrant life in a city teeming with crime, corruption, and anti-Irish prejudice. As she tries to make a life for herself and her daughter, she reunites with her brother, Sean . . . and a man she thought she\u0026rsquo;d never see again. When her friendship with a runaway slave sweeps her into the volatile abolitionist movement, Gracelin gains entr\u0026eacute;e to the drawing rooms of the wealthy and powerful. Still, the injustice all around her threatens the future of those she loves, and once again, she must do the unthinkable.\u003cBR /\u003e\u003cBR /\u003e This sweeping novel of the Irish immigrant experience in 1840s America brings a long-ago world to vibrant life and continues a remarkable heroine\u0026rsquo;s bold, dramatic journey through extraordinary times.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453201008-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '3/17/2017',
        date: { $date: '2017-03-17T04:00:00.000Z' },
        expiration_date: { $date: '2017-03-17T04:00:00.000Z' },
        original_price: '$8.99',
        promo_price: '$1.99',
        total_sales: 182,
        ebb_only: true
      },
      {
        readable_date: '9/24/2017',
        date: { $date: '2017-09-24T04:00:00.000Z' },
        expiration_date: { $date: '2017-09-24T04:00:00.000Z' },
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 117,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6f225e1799d0f58a9d8d3' },
    primary_isbn: '9781480457768',
    title: 'About Three Bricks Shy of a Load',
    authors: [
      {
        role: 1,
        short_bio:
          'Roy Blount Jr. is the author of twenty-three books. The first, About Three Bricks Shy of a Load,was expanded into About Three Bricks Shy . . . and the Load Filled Up. It is often called one of the best sports books of all time. His subsequent works have taken on a range of subjects, from Duck Soup, to Robert E. Lee, to what cats are thinking, to how to savor New Orleans, to what it’s like being married to the first woman president of the United States. Blount is a panelist on NPR’s Wait Wait . . . Don’t Tell Me!, an ex-president of the Authors Guild, a usage consultant for the American Heritage Dictionary, a New York Public Library Literary Lion, and a member of both the Fellowship of Southern Writers and the band the Rock Bottom Remainders. In 2009, Blount received the University of North Carolina’s Thomas Wolfe Prize. The university cited “his voracious appetite for the way words sound and for what they really mean.” Time places Blount “in the tradition of the great curmudgeons like H. L. Mencken and W. C. Fields.” Norman Mailer has said, “Page for page, Roy Blount is as funny as anyone I’ve read in a long time.” Garrison Keillor told the Paris Review, “Blount is the best. He can be literate, uncouth, and soulful all in one sentence.” Blount’s essays, articles, stories, and verses have appeared in over one hundred and fifty publications, including the New Yorker, the New York Times, Esquire, theAtlantic, Sports Illustrated, the Oxford American, and Garden \u0026amp; Gun. He comes from Decatur, Georgia, and lives in western Massachusetts.',
        firebrand_id: 14352286,
        display_name: 'Roy Blount Jr.',
        first_name: 'Roy',
        last_name: 'Blount',
        slug: 'roy-blount-jr'
      }
    ],
    bookkey: '14378204',
    isbns: ['9781480457768'],
    price: '7.99',
    amazon_rank: 317366,
    publisher: 'Open Road Media',
    primary_bisacs: [
      'Sports \u0026 Recreation',
      'Biography \u0026 Autobiography'
    ],
    description:
      '\u003cdiv\u003e\u003ca\u003e\u003cB\u003eNow celebrating its fortieth anniversary, Roy Blount Jr.\u0026rsquo;s classic account of the 1973 Pittsburgh Steelers\u0026mdash;a team on the cusp of once-in-a-generation greatness \u003c/B\u003e\u003c/a\u003e\u003cBR /\u003e The Pittsburgh Steelers of the 1970s are mentioned in any conversation about the greatest dynasties in NFL history. A year before Pittsburgh\u0026rsquo;s first Super Bowl victory launched a decade of domination, Roy Blount Jr. spent a season traveling with the team, recording the ups and downs, both large and small, in the lives of men who would soon reach the pinnacle of success in their sport. He covers everything from the birth of the \u0026ldquo;Steel Curtain\u0026rdquo; defense to the unique connection the people of Pittsburgh had with their hard-nosed team.\u003cBR /\u003e Interspersed with vivid depictions of players like Terry Bradshaw, \u0026ldquo;Mean\u0026rdquo; Joe Greene, and Ernie \u0026ldquo;Fats\u0026rdquo; Holmes, as well as the team owners, the Rooney clan, \u003cI\u003eAbout Three Bricks Shy\u003c/I\u003e \u003cI\u003eof a Load \u003c/I\u003eharks back to a bygone era when offensive linemen could weigh about the same as the backs they blocked for, when the highest-paying team\u0026rsquo;s highest-paid player\u0026mdash;Bradshaw\u0026mdash;made $400,000, and when one team was able to win four Super Bowls in six years\u0026mdash;a feat that remains unrivaled today.\u003cBR /\u003e Uproariously funny and brilliantly written, \u003cI\u003eAbout Three Bricks Shy of a Load \u003c/I\u003ewas named one of the Top 100 Sports Books of All Time by \u003cI\u003eSports Illustrated\u003c/I\u003e. \u003cBR /\u003e\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781480457768-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '2/20/2016',
        date: { $date: '2016-02-20T05:00:00.000Z' },
        expiration_date: { $date: '2016-02-20T05:00:00.000Z' },
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 118,
        ebb_only: true
      },
      {
        readable_date: '8/31/2017',
        date: { $date: '2017-08-31T04:00:00.000Z' },
        expiration_date: { $date: '2017-08-31T04:00:00.000Z' },
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 146,
        ebb_only: true
      },
      {
        readable_date: '1/31/2018',
        date: { $date: '2018-01-31T05:00:00.000Z' },
        expiration_date: { $date: '2018-01-31T05:00:00.000Z' },
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 11,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6f22ce1799d0f58a9d8e5' },
    primary_isbn: '9781453275405',
    title: "Chicken Soup for the Tea Lover's Soul",
    authors: [
      {
        _id: { $oid: '58e6ed09afbe421347a10b72' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 11795228,
        display_name: 'Mark Hansen',
        first_name: 'Mark',
        last_name: 'Hansen',
        slug: 'mark-hansen'
      },
      {
        _id: { $oid: '58e6ed09afbe421347a10b71' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 11795227,
        display_name: 'Jack Canfield',
        first_name: 'Jack',
        last_name: 'Canfield',
        slug: 'jack-canfield'
      },
      {
        _id: { $oid: '58e6edf6afbe421347a114ee' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 11808954,
        display_name: 'Patricia Lorenz',
        first_name: 'Patricia',
        last_name: 'Lorenz',
        slug: 'patricia-lorenz'
      }
    ],
    bookkey: '11808985',
    isbns: ['9781453275405'],
    price: '7.99',
    amazon_rank: 0,
    publisher: 'Chicken Soup for the Soul Publishing',
    primary_bisacs: ['Cooking'],
    description:
      '\u003cdiv\u003eIs enjoying a cup of tea your favorite part of the day? Is the brewing of a \u0026ldquo;cuppa\u0026rdquo; a ritual that centers and calms you? If so, \u003ci\u003eChicken Soup for the Tea Lover\u0026rsquo;s Soul\u003c/i\u003e will help you reconnect with yourself in the silent intimacy and introspection experienced while sipping tea. It\u0026rsquo;s the perfect accompaniment to that English breakfast, delightful Darjeeling, French vanilla, spicy chai, or comforting chamomile. \u003cBR\u003e\u003cBR\u003eLearn about tea\u0026rsquo;s ancient history and discover the many choices available, from the most exclusive to the tried-and-true favorites. Included are tips on buying, storing, and preparing tea, and even a few ideas on how to host a tea party. You\u0026rsquo;ll also discover the best-tasting and most popular teas, the proper way to steep tea, the health benefits of tea, the difference between black and green teas, and much more.\u003cBR\u003e\u003cBR\u003eNothing soothes the soul like a cup of tea and a good book, so curl up and wash away the tensions and troubles of your day.  \u003cBR\u003e\u003c/div\u003e',
    active: false,
    image: 'book-assets.openroadmedia.com/9781453275405-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6ee27e1799d0f58a9cd58' },
    primary_isbn: '9781453263679',
    title: 'Dawn',
    authors: [
      {
        role: 1,
        short_bio:
          'Octavia E. Butler (1947–2006) was a bestselling and award-winning author, considered one of the best science fiction writers of her generation. She received both the Hugo and Nebula awards, and in 1995 became the first author of science fiction to receive a MacArthur Fellowship. She was also awarded the prestigious PEN Lifetime Achievement Award in 2000. Her first novel, Patternmaster (1976), was praised both for its imaginative vision and for Butler’s powerful prose, and spawned four prequels, beginning with Mind of My Mind (1977) and finishing with Clay’s Ark (1984). Although the Patternist series established Butler among the science fiction elite, it was Kindred (1979), a story of a black woman who travels back in time to the antebellum South, that brought her mainstream success. In 1985, Butler won Nebula and Hugo awards for the novella “Bloodchild,” and in 1987 she published Dawn, the first novel of the Xenogenesis trilogy, about a race of aliens who visit earth to save humanity from itself. Fledgling (2005) was Butler’s final novel. She died at her home in 2006.',
        firebrand_id: 11532005,
        display_name: 'Octavia E. Butler',
        first_name: 'Octavia',
        last_name: 'Butler',
        slug: 'octavia-e-butler'
      }
    ],
    bookkey: '11548540',
    isbns: ['9781453263679'],
    price: '11.99',
    amazon_rank: 1946,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eAn alien race calls on one woman to revive mankind after Earth\u0026rsquo;s apocalypse in this science fiction classic from the award-winning author of \u003cI\u003eParable of the Sower\u003c/I\u003e.\u003c/B\u003e\u003cBR /\u003e  Lilith Iyapo has just lost her husband and son when atomic fire consumes Earth\u0026mdash;the last stage of the planet\u0026rsquo;s final war. Hundreds of years later Lilith awakes, deep in the hold of a massive alien spacecraft piloted by the Oankali\u0026mdash;who arrived just in time to save humanity from extinction. They have kept Lilith and other survivors asleep for centuries, as they learned whatever they could about Earth. Now it is time for Lilith to lead them back to her home world, but life among the Oankali on the newly resettled planet will be nothing like it was before. The Oankali survive by genetically merging with primitive civilizations\u0026mdash;whether their new hosts like it or not. For the first time since the nuclear holocaust, Earth will be inhabited. Grass will grow, animals will run, and people will learn to survive the planet\u0026rsquo;s untamed wilderness. But their children will not be human. Not exactly.\u003cBR /\u003e\u003cBR /\u003e Featuring strong and compelling characters and exploring complex themes of gender and species, Octavia E. Butler presents a powerful, postapocalyptic interplanetary epic, as well as a ray of hope for humanity. \u003cI\u003eThis ebook features an illustrated biography of Octavia E. Butler including rare images from the author\u0026rsquo;s estate. \u003c/I\u003e\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453263679-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '2/4/2016',
        date: { $date: '2016-02-04T05:00:00.000Z' },
        expiration_date: { $date: '2016-02-29T05:00:00.000Z' },
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 251,
        ebb_only: false
      },
      {
        readable_date: '4/27/2016',
        date: { $date: '2016-04-27T04:00:00.000Z' },
        expiration_date: { $date: '2016-04-28T04:00:00.000Z' },
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 251,
        ebb_only: true
      },
      {
        readable_date: '8/23/2016',
        date: { $date: '2016-08-23T04:00:00.000Z' },
        expiration_date: { $date: '2016-08-23T04:00:00.000Z' },
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 2,
        ebb_only: false
      },
      {
        readable_date: '2/3/2017',
        date: { $date: '2017-02-03T05:00:00.000Z' },
        expiration_date: { $date: '2017-02-03T05:00:00.000Z' },
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 220,
        ebb_only: true
      },
      {
        readable_date: '7/17/2017',
        date: { $date: '2017-07-17T04:00:00.000Z' },
        expiration_date: null,
        original_price: '$8.99',
        promo_price: '$1.99',
        total_sales: 145,
        ebb_only: false
      },
      {
        readable_date: '9/9/2017',
        date: { $date: '2017-09-09T04:00:00.000Z' },
        expiration_date: null,
        original_price: '$8.99',
        promo_price: '$1.99',
        total_sales: 129,
        ebb_only: false
      },
      {
        readable_date: '12/27/2017',
        date: { $date: '2017-12-27T05:00:00.000Z' },
        expiration_date: null,
        original_price: '$11.99',
        promo_price: '$1.99',
        total_sales: 0,
        ebb_only: false
      }
    ],
    genre: 'Science Fiction \u0026 Fantasy',
    amazon_reviews_iframe: {
      url:
        'https://www.amazon.com/reviews/iframe?akid=AKIAIO6ZO7NXRZIL2M4A\u0026alinkCode=xm2\u0026asin=B008HALOEQ\u0026atag=httpwwwopen01-20\u0026exp=2017-10-25T18%3A31%3A47Z\u0026summary=1\u0026truncate=250\u0026v=2\u0026sig=7V2aNqdwXadLIK1Ec5uBAGXits76Bnc9SOY57k%252BY8nU%253D',
      updated: { $date: '2017-10-24T18:31:47.408Z' }
    }
  },
  {
    _id: { $oid: '58e6ee04e1799d0f58a9ccba' },
    primary_isbn: '9781497621640',
    title: 'A Place Among the Fallen',
    authors: [
      {
        _id: { $oid: '58e6ee04afbe421347a11620' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 16170384,
        display_name: 'Adrian Cole',
        first_name: 'Adrian',
        last_name: 'Cole',
        slug: 'adrian-cole'
      }
    ],
    bookkey: '16184483',
    isbns: ['9781497621640'],
    price: '4.99',
    amazon_rank: 1427683,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u0026quot;Remarkably fine fantasy...Adrian Cole has a magic touch.\u0026quot; --Roger Zelazny\u003cBR /\u003e\u003cBR /\u003eA PLACE AMONG THE FALLEN\u003cBR /\u003eBook One of The Omaran Saga\u003cBR /\u003e\u003cBR /\u003eOmara\u0026#39;s people shun all belief in the power of gods and magic, and the Deliverers, led by Simon Wargallow, pledge to put to death all heretics. When Korbillian flees his magical land of Ternannoc in the midst of a catastrophic destruction, he takes refuge on Omara and begins a quest to save this planet from its inevitable fate--the same as that of Ternannoc. Battles erupt in the clashes between destruction and salvation, from the fishing village of Sundhaven to the plateau of Xennidhum. Death becomes life for the people, and life is on its way toward death.\u003cBR /\u003e\u003cBR /\u003eDon\u0026#39;t miss the entire quartet, including THRONE OF FOOLS, THE KING OF LIGHT AND SHADOWS, and THE GODS IN ANGER\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497621640-book-cover.jpg',
    genre: 'Science Fiction \u0026 Fantasy'
  },
  {
    _id: { $oid: '58e6f219e1799d0f58a9d8c7' },
    primary_isbn: '9781480459618',
    title: 'The Orange Fish',
    authors: [
      {
        role: 1,
        short_bio:
          'Carol Shields (1935–2003) was born in Oak Park, Illinois. She studied at Hanover College, the University of Exeter in England, and the University of Ottawa. In 1957, she married Donald Shields and moved to Canada permanently. She taught at the University of Ottawa, the University of British Columbia, and the University of Manitoba, and served as chancellor of the University of Winnipeg. She wrote ten novels and three short story collections, in addition to poetry, plays, criticism, and a biography of Jane Austen. Her novel The Stone Diaries won the Pulitzer Prize, the Governor General’s Award, and the National Book Critics Circle Award; it was also shortlisted for the Booker Prize. Shields was further recognized with a Canada Council Major Award, two Canadian National Magazine Awards, the Canadian Authors Association Award, and countless other prizes and honors.',
        firebrand_id: 14461307,
        display_name: 'Carol Shields',
        first_name: 'Carol',
        last_name: 'Shields',
        slug: 'carol-shields'
      }
    ],
    bookkey: '14488619',
    isbns: ['9781480459618'],
    price: '14.99',
    amazon_rank: 959061,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cb\u003eWinner of the Marian Engel Award:\u003c/b\u003e \u003cb\u003ePassion, longing, regret, and transformation infuse these twelve tales by one of our most \u0026ldquo;shrewd and skillful\u0026rdquo; storytellers (\u003ci\u003eChicago Tribune\u003c/i\u003e)\u003c/b\u003e\u003cBR\u003e\u0026ldquo;Milk Bread Beer Ice\u0026rdquo; is a road trip shared by a husband and wife who no longer communicate through meaningful dialogue. Fifty-year-old \u0026ldquo;Hazel\u0026rdquo; is forced to enter an alien workplace after the sudden death of her husband. In \u0026ldquo;Today Is the Day,\u0026rdquo; the village women gather together for their annual ritual of planting blisterlilies. And \u0026ldquo;Family Secrets\u0026rdquo; travels to DeKalb, Illinois, and the First World War, as the narrator searches for a missing year in her mother\u0026rsquo;s life . . . and unearths a surprising connection to Ernest Hemingway.\u003cBR\u003eFrom a group of musicians who discover they share more than classical \u0026ldquo;Chemistry\u0026rdquo; to an unhappily married couple who may get a second chance, this remarkable collection, like the ageless orange fish of the title story, is filled with the wonder and magic of everyday life.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781480459618-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '6/2/2017',
        date: { $date: '2017-06-02T04:00:00.000Z' },
        expiration_date: { $date: '2017-06-02T04:00:00.000Z' },
        original_price: '$14.99',
        promo_price: '$2.99',
        total_sales: 53,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6fccae1799d0f58a9e6c5' },
    primary_isbn: '9781453249376',
    title: 'Shooting Victoria',
    authors: [
      {
        role: 1,
        short_bio:
          'Paul Thomas Murphy earned his BA from Boston College, his MA from McGill University, and his PhD from the University of Colorado. He teaches interdisciplinary writing on Victorian topics at the University of Colorado and sits on the board of the Victorian Interdisciplinary Studies Association of the Western United States. He currently resides in Boulder, Colorado.',
        firebrand_id: 11219292,
        display_name: 'Paul Thomas Murphy',
        first_name: 'Paul Thomas',
        last_name: 'Murphy',
        slug: 'paul-thomas-murphy'
      }
    ],
    bookkey: '11219203',
    isbns: ['9781453249376'],
    price: '18.99',
    amazon_rank: 233036,
    publisher: 'Pegasus Books',
    primary_bisacs: [
      'History',
      'Biography \u0026 Autobiography',
      'Social Science'
    ],
    description:
      '\u003cdiv\u003e\u003cB\u003e\u0026ldquo;A fresh, lively \u0026rdquo; perspective \u003c/B\u003e\u003cB\u003eon Victorian England, as seen through the eight assassination attempts on Queen Victoria \u003c/B\u003e\u003cB\u003e(\u003cI\u003ePublishers Weekly\u003c/I\u003e\u003c/B\u003e, \u003cB\u003estarred review)\u003c/B\u003e\u003cB\u003e.\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e During Queen Victoria\u0026rsquo;s sixty-four years on the British throne, no fewer than eight attempts were made on her life. Seven teenage boys and one man attempted to kill her. Far from letting it inhibit her reign over the empire, Victoria used the notoriety of the attacks to her advantage. Regardless of the traitorous motives\u0026mdash;delusions of grandeur, revenge, paranoia, petty grievances, or a preference of prison to the streets\u0026mdash;they were a golden opportunity for the queen to revitalize the British crown, strengthen the monarchy, push through favored acts of legislation, and prove her pluck in the face of newfound public support. \u0026ldquo;It is worth being shot at,\u0026rdquo; she said, \u0026ldquo;to see how much one is loved.\u0026rdquo;\u003cBR /\u003e  \u003cBR /\u003e Recounting what Elizabeth Barrett marveled at as \u0026ldquo;this strange mania of queen-shooting,\u0026rdquo; and the punishments, unprecedented trials, and fate of these malcontents who were more pitiable than dangerous, Paul Thomas Murphy explores the realities of life in nineteenth-century England\u0026mdash;for both the privileged and the impoverished. From these cloak-and-dagger plots of \u0026ldquo;regicide\u0026rdquo; to Victoria\u0026rsquo;s steadfast courage, \u003cI\u003eShooting Victoria\u003c/I\u003e is thrilling, insightful, and, at times, completely mad historical narrative.\u003cBR /\u003e  \u003cBR /\u003e Whether through film (Jean-Marc Vall\u0026eacute;e\u0026rsquo;s \u003cI\u003eThe Young Victoria\u003c/I\u003e), biography (Julia Baird\u0026rsquo;s \u003cI\u003eVictoria: The Queen\u003c/I\u003e), television (Daisy Goodwin\u0026rsquo;s \u003cI\u003eVictoria\u003c/I\u003e), or revisionist fantasy (Paul Di Filippo\u0026rsquo;s \u003cI\u003eThe Steampunk Trilogy\u003c/I\u003e) there is a strong interest in Victorian England. Now Paul Thomas Murphy approaches this period from an eccentric, entirely new, and unexplored angle, combining legal, social, and political history into a book that is both \u0026ldquo;enlightening [and] great fun\u0026rdquo; (\u003cI\u003eKirkus Reviews\u003c/I\u003e, starred review).\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453249376-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '1/17/2017',
        date: { $date: '2017-01-17T05:00:00.000Z' },
        expiration_date: { $date: '2017-01-17T05:00:00.000Z' },
        original_price: '$18.99',
        promo_price: '$1.99',
        total_sales: 2,
        ebb_only: false
      },
      {
        readable_date: '8/10/2017',
        date: { $date: '2017-08-10T04:00:00.000Z' },
        expiration_date: { $date: '2017-08-10T04:00:00.000Z' },
        original_price: '$18.99',
        promo_price: '$2.99',
        total_sales: 132,
        ebb_only: true
      },
      {
        readable_date: '2/16/2018',
        date: { $date: '2018-02-16T05:00:00.000Z' },
        expiration_date: { $date: '2018-02-16T05:00:00.000Z' },
        original_price: '$18.99',
        promo_price: '$2.99',
        total_sales: 0,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6ed25e1799d0f58a9c80a' },
    primary_isbn: '9781480489998',
    title: 'In High Places',
    authors: [
      {
        role: 1,
        short_bio:
          'Arthur Hailey (1920–2004), the author of eleven novels, many of which became #1 New York Times bestsellers, was born in Luton, England. He served as a pilot and flight lieutenant in the British Royal Air Force during World War II and immigrated to Canada in 1947. While working for a transportation trade magazine, he scored his first writing success with a television drama, and began to write screenplays full-time for various networks during the golden age of live television. His novel-writing career took off in 1959 with the publication of his first novel, The Final Diagnosis, and picked up velocity with Hotel and then Airport, which spent thirty weeks in the number-one spot on the New York Times bestseller list and became a blockbuster film. Hailey’s novels, many of which have been made into films, television series, and miniseries, have been translated into forty languages. They are notable for their suspenseful storylines and authentic depictions of various industries and commercial settings, which Hailey aggressively and meticulously researched.',
        firebrand_id: 15917181,
        display_name: 'Arthur Hailey',
        first_name: 'Arthur',
        last_name: 'Hailey',
        slug: 'arthur-hailey'
      }
    ],
    bookkey: '15937686',
    isbns: ['9781480489998'],
    price: '17.99',
    amazon_rank: 242141,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003e#1 \u003cI\u003eNew York Times\u003c/I\u003e bestselling author Arthur Hailey takes readers into the highest echelons of government as two nations\u0026rsquo; leaders prepare for a third world war\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003eA call from the US president to Canada\u0026rsquo;s prime minister . . . An intimate reception at the Ottawa residence of Her Majesty\u0026rsquo;s governor general . . . The arrival of a ship in Vancouver. Three seemingly unrelated events three thousand miles apart upset the balance of global power and alter the landscape of the free world. As Canada\u0026rsquo;s prime minister, James Howden, works to ensure his nation\u0026rsquo;s survival in a nuclear war, he faces another threat: a lawyer on a crusade for justice and truth. With two nations struggling to keep a lid on an explosive secret, Howden will undergo a crisis of conscience that leaves him fighting for his political life.\u003cBR /\u003e\u003cBR /\u003eAt once an electrifying novel of international politics during the Cold War and a cautionary tale about what can happen when men believe they are above the law, \u003cI\u003eIn High Places\u003c/I\u003e is Arthur Hailey\u0026rsquo;s personal favorite of all his works.\u003cBR /\u003e\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781480489998-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '8/7/2016',
        date: { $date: '2016-08-07T04:00:00.000Z' },
        expiration_date: { $date: '2016-08-07T04:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 322,
        ebb_only: true
      },
      {
        readable_date: '9/13/2017',
        date: { $date: '2017-09-13T04:00:00.000Z' },
        expiration_date: { $date: '2017-09-13T04:00:00.000Z' },
        original_price: '$14.99',
        promo_price: '$1.99',
        total_sales: 1,
        ebb_only: false
      },
      {
        readable_date: '12/20/2017',
        date: { $date: '2017-12-20T05:00:00.000Z' },
        expiration_date: null,
        original_price: '$17.99',
        promo_price: '$1.99',
        total_sales: 0,
        ebb_only: false
      }
    ]
  },
  {
    _id: { $oid: '58e6fcc9e1799d0f58a9e6bb' },
    primary_isbn: '9781453249161',
    title: 'Derby Day',
    authors: [
      {
        role: 1,
        short_bio:
          'D. J. Taylor was born in Norwich in 1960. He is a novelist, critic, and biographer. His Orwell: The Life won the Whitbread Biography of the Year in 2003. His novel Kept: A Victorian Mystery was a Publishers Weekly Best Book of the Year. He lives in England.',
        firebrand_id: 10744204,
        display_name: 'D. J. Taylor',
        first_name: 'D.',
        last_name: 'Taylor',
        slug: 'd-j-taylor'
      }
    ],
    bookkey: '11216283',
    isbns: ['9781453249161'],
    price: '17.99',
    amazon_rank: 698754,
    publisher: 'Pegasus Books',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cb\u003eNominated for the Man Booker Prize, an exquisite tale of romance and rivalry, gambling and greed, from one of England\u0026rsquo;s finest writers\u003c/b\u003e\u003cBR\u003e As the shadows lengthen over the June grass, all England is heading for Epsom Down\u0026mdash;high life and low life, society beauties and Whitechapel street girls, bookmakers and gypsies, hawkers and thieves. Hopes are high, nerves are taut, hats are tossed in the air\u0026mdash;this is Derby Day. For months people have been waiting and plotting for this day. Everyone\u0026rsquo;s eyes are on champion horse Tiberius, on whose performance half a dozen destinies depend. In this rich and exuberant novel, rife with the idioms of Victorian England, the mysteries pile high, propelling us toward the day of the great race, and we wait with bated breath as the story gallops to a finish that no one expects.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453249161-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6edfce1799d0f58a9cc53' },
    primary_isbn: '9781480456440',
    title: 'The Judges of Hades',
    authors: [
      {
        role: 1,
        short_bio:
          'Edward D. Hoch (1930–2008) was a master of the mystery short story. Born in Rochester, New York, he sold his first story, “The Village of the Dead,” to Famous Detective Stories, then one of the last remaining old-time pulps. The tale introduced Simon Ark, a two-thousand-year-old Coptic priest who became one of Hoch’s many series characters. Others included small-town doctor Sam Hawthorne, police detective Captain Leopold, and Revolutionary War secret agent Alexander Swift. By rotating through his stable of characters, most of whom aged with time, Hoch was able to achieve extreme productivity, selling stories to Argosy, Alfred Hitchcock’s Mystery Magazine, and Ellery Queen’s Mystery Magazine, which published a story of his in every issue from 1973 until his death.In all, Hoch wrote nearly one thousand short tales, making him one of the most prolific story writers of the twentieth century. He was awarded the 1968 Edgar Award for “The Oblong Room,” and in 2001 became the first short story writer to be named a Grand Master by the Mystery Writers of America. ',
        firebrand_id: 14263377,
        display_name: 'Edward D. Hoch',
        first_name: 'Edward',
        last_name: 'Hoch',
        slug: 'edward-d-hoch'
      }
    ],
    bookkey: '14292360',
    isbns: ['9781480456440'],
    price: '9.99',
    amazon_rank: 703711,
    publisher: 'MysteriousPress.com/Open Road',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cb\u003eFive classic tales of murderous evil\u0026mdash;and the immortal who was chosen to fight for what is right\u003c/b\u003e\u003cBR\u003eIn a small town near Washington, DC, seventy-three villagers make the spontaneous decision to leap from a cliff to their deaths. They leave no explanation behind, but local rumor suggests they were being manipulated by an ancient, evil power. In a monastery in West Virginia, a monk fears his brothers\u0026mdash;and is finally pushed from the window of one of the towers. And in a town in Westchester County, New York, a self-proclaimed witch casts a spell on a group of female college students.\u003cBR\u003eThese are strange cases, seemingly beyond the grasp of reason\u0026mdash;and perfect fodder for Simon Ark. A Coptic priest of the ancient world, he was condemned after the Crucifixion to live forever, wandering the earth and rooting out evil. And in the small, shadowy corners of small-town America, he will encounter great evil indeed.\u003c/div\u003e',
    active: true,
    image:
      'https://s3.amazonaws.com/orim-book-covers/9781480456440-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6eda1e1799d0f58a9c918' },
    primary_isbn: '9781497657472',
    title: 'Fly Trap',
    authors: [
      {
        role: 1,
        firebrand_role: 'author',
        short_bio:
          'Piers Anthony is one of the world’s most popular fantasy writers, and a New York Times–bestselling author twenty-one times over. His Xanth novels have been read and loved by millions of readers around the world, and he daily receives hundreds of letters from his devoted fans. In addition to the Xanth series, Anthony is the author of many other bestselling works. He lives in Inverness, Florida.',
        firebrand_id: 16160556,
        display_name: 'Piers Anthony',
        first_name: 'Piers',
        last_name: 'Anthony',
        slug: 'piers-anthony'
      }
    ],
    bookkey: '17929415',
    isbns: ['9781497657472'],
    price: '2.99',
    amazon_rank: 664161,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eA thought-provoking tale of female robots and sentient animals by a \u003cI\u003eNew York Times\u003c/I\u003e\u0026ndash;bestselling author.\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e Elasa the robot\u0026rsquo;s friend Mona exchanges to the colony planet to occupy the body of a woman five months pregnant. Even so, she gets more than she bargained for, as she works with a precognitive lamb.\u003c/div\u003e',
    active: true,
    image:
      'https://s3.amazonaws.com/orim-book-covers/9781497657472-book-cover.jpg',
    genre: 'Science Fiction \u0026 Fantasy'
  },
  {
    _id: { $oid: '58e6ed71e1799d0f58a9c8b5' },
    primary_isbn: '9781497619920',
    title: 'Highland Champion',
    authors: [
      {
        role: 1,
        short_bio:
          'Hannah Howell’s first book was published in 1988, and she has since published dozens of captivating romance novels, sometimes under the pseudonym Anna Jennet. She is widely admired for her breathtaking Scottish and English historical romance novels, such as the recent Highland Conqueror. Her website is www.hannahhowell.com.',
        firebrand_id: 16172200,
        display_name: 'Hannah Howell',
        first_name: 'Hannah',
        last_name: 'Howell',
        slug: 'hannah-howell'
      }
    ],
    bookkey: '16172311',
    isbns: ['9781497619920'],
    price: '7.99',
    amazon_rank: 280639,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003eBestselling author Hannah Howell spins a masterful tale of glory, honor, and passion in this sweeping adventure of a proud woman who refuses to believe in love\u0026mdash;and the fiery Scotsman determined to change her mind . . . Liam Cameron is certain he has died and gone to heaven when he opens his eyes to the angel before him. But the pain that wracks his body proves he is still earth-bound. Keira Murray MacKail saved Liam\u0026rsquo;s life\u0026mdash;and he has some enticing ways he would like to thank her. Soon, lust gives way to a feeling much more profound for a woman whose battles he wants to fight . . . though he fears the most difficult one will be for her heart . . . Keira quickly learns that Liam has danger chasing him. As her healing kindness frees him to tell his tale, she confides the trouble that plagues her: She is a laird\u0026rsquo;s widow now responsible for saving a small village pillaged by cruel invaders. But even as Liam makes the crusade to reclaim her lands his own, he will face a far greater challenge to win her trust\u0026mdash;and her love\u0026mdash;for all time . . . \u003cBR /\u003e\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497619920-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6f7afe1799d0f58a9e09b' },
    primary_isbn: '9781497688889',
    title: 'Sky Rider',
    authors: [
      {
        _id: { $oid: '58e6ecf9afbe421347a109e7' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 16158246,
        display_name: 'Nancy Springer',
        first_name: 'Nancy',
        last_name: 'Springer',
        slug: 'nancy-springer'
      }
    ],
    bookkey: '20024886',
    isbns: ['9781497688889', '9781497689121'],
    price: '9.99',
    amazon_rank: 892222,
    publisher: 'Open Road Media',
    primary_bisacs: ['Young Adult Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eEverything changes when a handsome stranger rides off into the night on Dusty\u0026rsquo;s horse\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e There\u0026rsquo;s no way around it: Dusty\u0026rsquo;s horse Tazz needs to be put down. Once a champion jumper, Tazz can barely walk now due to hoof pain. And that\u0026rsquo;s not the only thing that\u0026rsquo;s wrong in Dusty\u0026rsquo;s life. Since her mother\u0026rsquo;s death, Dusty\u0026rsquo;s dad hasn\u0026rsquo;t stopped drinking\u0026mdash;even after his drunk driving put Dusty in the hospital with a now-chronic back injury. \u003cI\u003eWhy don\u0026rsquo;t they just put me down too?\u003c/I\u003e she wonders.\u003cBR /\u003e\u003cBR /\u003e While Dusty is giving Tazz one last grooming, his ears suddenly prick up as a stranger approaches: a young boy with an otherworldly beauty. He offers to take Tazz with him, and the two race off into the distance as though Tazz were in perfect health, with the boy perched on his back. Who could this person be? And what is he doing here?\u003cBR /\u003e\u003cBR /\u003e It\u0026rsquo;s only when Dusty returns to school the next day that she hears about the boy who was killed. When she sees his photo in the newspaper, she knows that he\u0026rsquo;s the mysterious guy who rode off on Tazz. What she doesn\u0026rsquo;t know is that he will soon return.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497688889-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6f1d8e1799d0f58a9d7d7' },
    primary_isbn: '9781497672222',
    title: 'A Voyage to Arcturus',
    authors: [
      {
        role: 1,
        short_bio: '',
        firebrand_id: 18777533,
        display_name: 'David Lindsay',
        first_name: 'David',
        last_name: 'Lindsay',
        slug: 'david-lindsay'
      }
    ],
    bookkey: '16245350',
    isbns: ['9781497672222'],
    price: '0.99',
    amazon_rank: 650536,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eOne of the most original and acclaimed science fiction novels of the twentieth century\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e This landmark work of speculative fiction follows the adventurer Maskull as he travels to Tormance, the lone planet revolving around the double star system Arcturus. Each new land that Maskull visits is ruled by a different philosophy, and he must navigate each in succession as his body changes in response to the varying environments in which he finds himself. Never sure of his surroundings, Maskull must determine what we will and will not do to survive\u0026mdash;a metaphysical inquiry that propels him toward an unforgettable final realization.\u003cBR /\u003e\u003cBR /\u003e A major influence on C. S. Lewis\u0026rsquo;s Space Trilogy, \u003cI\u003eA Voyage to Arcturus\u003c/I\u003e is a surreal and masterful investigation into the meaning of good and evil, the nature of God, and the origins of the universe.\u003cBR /\u003e\u003cBR /\u003e This ebook has been professionally proofread to ensure accuracy and readability on all devices.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497672222-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '9/15/2016',
        date: { $date: '2016-09-15T04:00:00.000Z' },
        expiration_date: { $date: '2016-09-15T04:00:00.000Z' },
        original_price: '$0.99',
        promo_price: '$0.00',
        total_sales: 2,
        ebb_only: true
      },
      {
        readable_date: '3/7/2017',
        date: { $date: '2017-03-07T05:00:00.000Z' },
        expiration_date: { $date: '2017-03-07T05:00:00.000Z' },
        original_price: '$0.99',
        promo_price: '$0.00',
        total_sales: 2,
        ebb_only: true
      },
      {
        readable_date: '8/20/2017',
        date: { $date: '2017-08-20T04:00:00.000Z' },
        expiration_date: { $date: '2017-08-20T04:00:00.000Z' },
        original_price: '$0.99',
        promo_price: '$0.00',
        total_sales: 1,
        ebb_only: true
      },
      {
        readable_date: '1/11/2018',
        date: { $date: '2018-01-11T05:00:00.000Z' },
        expiration_date: { $date: '2018-01-11T05:00:00.000Z' },
        original_price: '$0.99',
        promo_price: '$0.00',
        total_sales: 0,
        ebb_only: true
      }
    ],
    genre: 'Science Fiction \u0026 Fantasy'
  },
  {
    _id: { $oid: '5a8e7c132ad4b3e3d0ae2c73' },
    amazon_rank: 0,
    active: false,
    title: 'The Peter Blauner Collection Volume One',
    price: '35.99',
    bookkey: '40931280',
    publisher: 'Open Road Media',
    description: '',
    authors: [
      {
        role: 1,
        short_bio:
          'Peter Blauner (b. 1959) has spent nearly his entire life in New York City. After graduating from Wesleyan University he took a staff job at New York Magazine, where he found the inspiration for his first book, the Edgar Award–winning Slow Motion Riot, in the men and women who work in the city’s probation department. Since then, he has written five more novels: Casino Moon, the New York Times bestseller The Intruder, Man of the Hour, The Last Good Day, and 2006’s Slipping Into Darkness.',
        firebrand_id: 10046279,
        display_name: 'Peter Blauner',
        first_name: 'Peter',
        last_name: 'Blauner',
        slug: 'peter-blauner'
      }
    ],
    isbns: ['9781504052719'],
    primary_isbn: '9781504052719',
    primary_bisacs: ['Fiction']
  },
  {
    _id: { $oid: '58e70d3ae1799d0f58a9f0b2' },
    primary_isbn: '9781504038362',
    title: 'Hot Flashes',
    authors: [
      {
        role: 1,
        short_bio: '',
        firebrand_id: 27091192,
        display_name: 'Barbara Raskin',
        first_name: 'Barbara',
        last_name: 'Raskin',
        slug: 'barbara-raskin'
      }
    ],
    bookkey: '28578259',
    isbns: ['9781504038362'],
    price: '17.99',
    amazon_rank: 444526,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003e\u003cI\u003eNew York Times\u003c/I\u003e Bestseller: This \u0026ldquo;landmark women\u0026rsquo;s novel\u0026rdquo; about female friendship and women\u0026rsquo;s lib is \u0026ldquo;something akin to Mary McCarthy\u0026rsquo;s \u003cI\u003eThe Group\u003c/I\u003e\u0026rdquo; (\u003cI\u003ePeople\u003c/I\u003e). \u003c/B\u003e\u003cBR /\u003e  \u003cBR /\u003e Diana Sargeant is a menopausal anthropology professor whose hot flashes often produce insights into life, love, and what it means to be a woman. Diana belongs to a generation of A-list females: well-educated jet-setters who overcame their fear of flying in the fifties, became leftist protestors in the sixties, and were glamorous seductresses on birth control in the seventies. But in the eighties, they\u0026rsquo;re middle-aged matrons who are afraid of their own mortality and must come to terms with the fact that even though they obtained everything they desired, they\u0026rsquo;re still unfulfilled.\u003cBR /\u003e  \u003cBR /\u003e When Diana\u0026rsquo;s close friend Sukie Amram suffers a fatal brain hemorrhage, the professor rushes to Washington, DC, to mourn and commemorate the woman she so loved. There, she reunites with her lifelong pals: flashy magazine writer Joanne Ireland and divorced English teacher Elaine Cantor. The three soon discover Sukie\u0026rsquo;s journal, which details her battle with despair after her husband abandoned her for a younger lover. As they read through the details of Sukie\u0026rsquo;s postdivorce anguish, the friends revisit difficult moments in their own pasts and discover themselves anew.\u003cBR /\u003e  \u003cBR /\u003e Called \u0026ldquo;a feminist version of \u003cI\u003eThe Big Chill\u003c/I\u003e\u0026rdquo; by the \u003cI\u003eWashington Post\u003c/I\u003e, \u003cI\u003eHot Flashes\u003c/I\u003e is an irreverent, witty, and emotionally engaging novel about four intelligent, trailblazing women that provides a compelling, honest look at female fears and desire during the late twentieth century.\u003cBR /\u003e  \u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781504038362-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '8/17/2016',
        date: { $date: '2016-08-17T04:00:00.000Z' },
        expiration_date: { $date: '2016-08-17T04:00:00.000Z' },
        original_price: '$14.99',
        promo_price: '$2.99',
        total_sales: 110,
        ebb_only: true
      },
      {
        readable_date: '12/26/2017',
        date: { $date: '2017-12-26T05:00:00.000Z' },
        expiration_date: { $date: '2017-12-26T05:00:00.000Z' },
        original_price: '$17.99',
        promo_price: '$2.99',
        total_sales: 0,
        ebb_only: true
      }
    ],
    tags: [
      {
        _id: '59e8c9182263950011cde71d',
        id: '59e8c9182263950011cde71d',
        name: 'NYT Bestseller'
      }
    ]
  },
  {
    _id: { $oid: '58e70d59e1799d0f58a9f0d1' },
    primary_isbn: '9781504037914',
    title: 'Death in the Secret Garden',
    authors: [
      {
        role: 1,
        short_bio:
          "Richard Forrest (1932–2005) was an American mystery author. Born in New Jersey, he served in the US Army, wrote plays, and sold insurance before he began writing mystery fiction. His debut, Who Killed Mr. Garland's Mistress (1974), was an Edgar Award finalist. He remains best known for his ten novels starring Lyon and Bea Wentworth, a husband-and-wife sleuthing team introduced in A Child’s Garden of Death (1975).",
        firebrand_id: 27121382,
        display_name: 'Richard Forrest',
        first_name: 'Richard',
        last_name: 'Forrest',
        slug: 'richard-forrest'
      }
    ],
    bookkey: '28466844',
    isbns: ['9781504037914'],
    price: '9.99',
    amazon_rank: 1635303,
    publisher: 'MysteriousPress.com/Open Road',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eChildren\u0026rsquo;s book author Lyon Wentworth fights to protect a Vietnam veteran accused of a grisly crime in this chilling psychological thriller.\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e They find her by the river, naked, cold\u0026mdash;and dead. Police chief Rocco Herbert recognizes her as the checkout girl at the Murphysville supermarket, an ordinary citizen of the easygoing Connecticut suburb whose death was anything but easy. In one hand, she clutches a First Cavalry Division shoulder patch, the kind handed out by Spook, a traumatized Vietnam veteran who gives the mementos of his old unit to everyone he meets. Maybe Spook killed her, maybe he didn\u0026rsquo;t, but without Lyon Wentworth\u0026rsquo;s help, he\u0026rsquo;s going to hang.\u003cBR /\u003e  \u003cBR /\u003e A children\u0026rsquo;s book author with a knack for solving impossible crimes, Lyon and his wife, no-nonsense state senator Bea Wentworth, are Spook\u0026rsquo;s only hope. But as the couple digs into the circumstances surrounding the girl\u0026rsquo;s murder, they\u0026rsquo;ll find that Murphysville hides as many grim secrets as the jungles of Vietnam.\u003cBR /\u003e  \u003cBR /\u003e There has never been an amateur sleuth quite like Lyon Wentworth, a hot-air balloonist who solves crimes between writing bestsellers. \u003cI\u003eDeath in the Secret Garden \u003c/I\u003ewill push him closer to the limit than he\u0026rsquo;s ever gone before.\u003cBR /\u003e  \u003cBR /\u003e Death in the Secret Garden\u003cI\u003e is the 9th book in the Lyon and Bea Wentworth Mysteries, but you may enjoy reading the series in any order.\u003c/I\u003e\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781504037914-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6eddee1799d0f58a9ca71' },
    primary_isbn: '9781453245736',
    title: 'The Unsuspected',
    authors: [
      {
        role: 1,
        short_bio:
          'Edgar Award–winning Charlotte Armstrong (1905–1969) was one of the finest American authors of classic mystery and suspense. The daughter of an inventor, Armstrong was born in Vulcan, Michigan, and attended Barnard College, in New York City. After college she worked at the New York Times and the magazine Breath of the Avenue, before marrying and turning to literature in 1928. For a decade she wrote plays and poetry, with work produced on Broadway and published in the New Yorker. In the early 1940s, she began writing suspense. Success came quickly. Her first novel, Lay On, MacDuff! (1942) was well received, spawning a three-book series. Over the next two decades, she wrote more than two dozen novels, winning critical acclaim and a dedicated fan base. The Unsuspected (1945) and Mischief (1950) were both made into films, and A Dram of Poison (1956) won the Edgar Award for best novel. She died in California in 1969.    ',
        firebrand_id: 11124822,
        display_name: 'Charlotte Armstrong',
        first_name: 'Charlotte',
        last_name: 'Armstrong',
        slug: 'charlotte-armstrong'
      }
    ],
    bookkey: '11158275',
    isbns: ['9781453245736'],
    price: '9.99',
    amazon_rank: 434480,
    publisher: 'MysteriousPress.com/Open Road',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cb\u003eA dead girl\u0026rsquo;s closest friend goes undercover to unmask a killer\u003c/b\u003e\u003cBR\u003eWhy did Rosaleen Wright hang herself in a soundproof room? She left an unsigned note, peppered with stiff religious references and no trace of her trademark vitality or wit. The police believe it was suicide, but Rosaleen\u0026rsquo;s best friend, Jane, is suspicious. To prove Rosaleen was murdered, she takes a job with the man who killed her. Luther Grandison, Rosaleen\u0026rsquo;s boss, is a New York theatrical impresario with a lethal charm. To the world at large, he\u0026rsquo;s powerful and charismatic, but Rosaleen\u0026rsquo;s letters to Jane described a greedy man who stole from his adopted daughter when his bank account ran low. Jane thinks Grandison killed her to protect his secret, but to prove it she will have to face down one of the finest murderers Broadway has ever seen.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453245736-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '8/3/2017',
        date: { $date: '2017-08-03T04:00:00.000Z' },
        expiration_date: { $date: '2017-08-03T04:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 137,
        ebb_only: true
      },
      {
        readable_date: '2/9/2018',
        date: { $date: '2018-02-09T05:00:00.000Z' },
        expiration_date: { $date: '2018-02-09T05:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 3,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6eff0e1799d0f58a9d2b8' },
    primary_isbn: '9781453258965',
    title: "Busman's Honeymoon",
    authors: [
      {
        role: 1,
        short_bio:
          'Dorothy L. Sayers (1893–1957) was a British playwright, scholar, and  acclaimed author of mysteries, best known for her books starring the  gentleman sleuth Lord Peter Wimsey. While working as an advertising  copywriter, Sayers began writing Whose Body? (1923), the first  Wimsey mystery, followed by ten sequels and several short stories.  Sayers set the Wimsey novels between the two World Wars, giving them a  realistic tone by incorporating details from contemporary issues such as  advertising, women’s education, and veterans’ health. Sayers also wrote  theological essays and criticism during and after World War II, and in  1949 published the first volume of a translation of Dante’s Divine Comedy.  Although she considered this translation to be her best work, it is for  her elegantly constructed detective fiction that Sayers remains best  remembered. ',
        firebrand_id: 11368077,
        display_name: 'Dorothy L. Sayers',
        first_name: 'Dorothy',
        last_name: 'Sayers',
        slug: 'dorothy-l-sayers'
      }
    ],
    bookkey: '11451367',
    isbns: ['9781453258965'],
    price: '11.99',
    amazon_rank: 58481,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eIn this installment of the \u0026ldquo;literate and delightful\u0026rdquo; Lord Peter Wimsey Mysteries, Harriet Vane\u0026rsquo;s honeymoon with the dapper British detective is marred by murder (\u003cI\u003eChicago Tribune\u003c/I\u003e).\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e It took several near-death experiences for Lord Peter Wimsey to convince Harriet Vane to be his wife, but she has finally relented. When the dapper detective marries Britain\u0026rsquo;s most popular mystery author\u0026mdash;just a few short years after rescuing her from the hangman\u0026rsquo;s noose\u0026mdash;the press could not be more excited. But Lord Peter and his bride have no interest in spending their wedding night surrounded by reporters. They sneak out of their own reception to begin their honeymoon early, out of sight of the world. Unfortunately, for some couples, calamity is inescapable.\u003cBR /\u003e  \u003cBR /\u003e On their 1st morning together, the newlyweds discover the house\u0026rsquo;s caretaker bludgeoned to death in the manor\u0026rsquo;s basement. If they thought finding a few minutes alone was difficult, they\u0026rsquo;re up against even steeper odds. In a house full of suspects, identifying the killer won\u0026rsquo;t be easy.\u003cBR /\u003e  \u003cBR /\u003e Busman\u0026rsquo;s Honeymoon\u003cI\u003e is the 13th book in the Lord Peter Wimsey Mysteries, but you may enjoy the series by reading the books in any order.\u003cBR /\u003e  \u003cBR /\u003e This ebook features an illustrated biography of Dorothy L. Sayers including rare images from the Marion E. Wade Center at Wheaton College.\u003c/I\u003e\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453258965-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '8/18/2016',
        date: { $date: '2016-08-18T04:00:00.000Z' },
        expiration_date: { $date: '2016-08-18T04:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 4,
        ebb_only: false
      },
      {
        readable_date: '12/26/2016',
        date: { $date: '2016-12-26T05:00:00.000Z' },
        expiration_date: { $date: '2016-12-26T05:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 310,
        ebb_only: true
      },
      {
        readable_date: '7/24/2017',
        date: { $date: '2017-07-24T04:00:00.000Z' },
        expiration_date: { $date: '2017-07-24T04:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 322,
        ebb_only: true
      },
      {
        readable_date: '11/1/2017',
        date: { $date: '2017-11-01T04:00:00.000Z' },
        expiration_date: null,
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 206,
        ebb_only: false
      }
    ]
  },
  {
    _id: { $oid: '58e704d3e1799d0f58a9eb80' },
    primary_isbn: '9781504014663',
    title: 'Die Like a Dog',
    authors: [
      {
        _id: { $oid: '58e6fb39cb576013666e30ae' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 22950512,
        display_name: 'Brett Halliday',
        first_name: 'Brett',
        last_name: 'Halliday',
        slug: 'brett-halliday'
      }
    ],
    bookkey: '23139656',
    isbns: ['9781504014663'],
    price: '7.99',
    amazon_rank: 1528526,
    publisher: 'MysteriousPress.com/Open Road',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eMike Shayne goes grave robbing in a pet cemetery to solve the case of a millionaire\u0026rsquo;s murder\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e It\u0026rsquo;s 11:00 am, and Mike Shayne has just poured himself a cognac, when Henrietta Rogell strolls into his office. Normally, Shayne would extend no special favors to a wealthy client, but his checking account is nearly empty, and he\u0026rsquo;s willing to straighten his tie for the sake of a millionaire\u0026mdash;especially when she\u0026rsquo;s come about something as lucrative as murder. Miss Rogell\u0026rsquo;s brother, John, died 2 days before. The coroner ruled it a heart attack, but Henrietta is convinced he was poisoned, and she will pay handsomely for Shayne to prove it.\u003cBR /\u003e  \u003cBR /\u003e His first lead is a murdered dog. Daffy, the beloved Pekinese of John Rogell\u0026rsquo;s young wife, Anita, dropped dead after eating a bowl of soup laced with strychnine. Every member of the family had a reason to want Rogell out of the picture. To find the killer, Shayne will have to disturb the departed\u0026mdash;and dig up the canine victim.\u003cBR /\u003e  \u003cBR /\u003e\u003cI\u003eDie Like a Dog\u003c/I\u003e is the 35th book in the Mike Shayne Mysteries, but you may enjoy reading the series in any order.\u003cBR /\u003e  \u003cBR /\u003e\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781504014663-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6f308e1799d0f58a9da4e' },
    primary_isbn: '9781453237496',
    title: 'Another Eden',
    authors: [
      {
        role: 1,
        short_bio:
          'Patricia Gaffney is the bestselling author of more than a dozen historical romance novels. She studied literature at Marymount College, the University of London, George Washington University, and the University of North Carolina at Chapel Hill before becoming a court reporter. Gaffney lives with her husband in Blue Ridge Summit, Pennsylvania.    ',
        firebrand_id: 10983786,
        display_name: 'Patricia Gaffney',
        first_name: 'Patricia',
        last_name: 'Gaffney',
        slug: 'patricia-gaffney'
      }
    ],
    bookkey: '10997077',
    isbns: ['9781453237496'],
    price: '7.99',
    amazon_rank: 940903,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cb\u003eTrapped in a loveless marriage at the turn of the twentieth century, a British noblewoman finds renewed passion with a young architect \u003c/b\u003e Lady Sara Longford\u0026rsquo;s once-storybook marriage is falling apart. Her husband, Ben Cochrane, a New York entrepreneur, married Sara in the hopes that a high-society English wife would improve his odds of entering New York\u0026rsquo;s uppermost social strata, but so far those ambitions have remained unfulfilled, and the relationship has soured. But things change when Sara meets up-and-coming draftsman Alex McKie, hired to build Cochrane\u0026rsquo;s garish summer home in Newport, Rhode Island. When Cochrane sends Sara away to Newport to oversee the construction, Sara finds herself increasingly drawn to the charming Alex. As their relationship develops, Sara must chose between the safe life she knows and the forbidden love that threatens to destroy everything she holds dear.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453237496-book-cover.jpg'
  },
  {
    _id: { $oid: '59f974802ad4b3e3d0ae0f31' },
    amazon_rank: 467900,
    active: true,
    title: 'The Weather in Berlin',
    price: '14.99',
    bookkey: '38521177',
    publisher: 'Houghton Mifflin Harcourt',
    description:
      '\u003cdiv\u003e\u003cB\u003eA New York Times Notable Book: \u0026ldquo;An elegantly written, strikingly intelligent novel\u0026rdquo; about wrestling with the past and the future in a reunified Germany (\u003cI\u003eNewsday\u003c/I\u003e).\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e Shot in Germany in the late 1960s, Dix Greenwood\u0026rsquo;s first film, \u003cI\u003eSummer, 1921\u003c/I\u003e, is revered as an antiwar classic. Thirty years later and after more than a decade of silence, Dix returns to Berlin on a residency that he hopes will rekindle his genius. He encounters a newly reunited Germany, full of promise yet mired in the past\u0026mdash;much like Dix himself. To this day, he is haunted by the mystery of Jana Sorb, the actress who disappeared during the making of \u003cI\u003eSummer, 1921\u003c/I\u003e and has long since been presumed dead.\u003cBR /\u003e  \u003cBR /\u003e When Jana suddenly reappears in Dix\u0026rsquo;s life, it sets off a cascade of recollections and realizations that will forever change the way he approaches his art . . . and his life. In this tale of Americans abroad, National Book Award and Pulitzer Prize finalist Ward Just turns his keen eye toward the dark underpinnings of nationalism, fame, and artistic integrity, in \u0026ldquo;an elegantly written, strikingly intelligent novel, as knowing about movies, the German enigma, and the vagaries of fame as it is about matters of the heart\u0026rdquo; (\u003cI\u003eNewsday\u003c/I\u003e).\u003cBR /\u003e  \u003cBR /\u003e \u0026ldquo;Ward Just writes the kind of books they say no one writes anymore: smart, well-crafted narratives\u0026mdash;wise to the ways of the world\u0026mdash;that use fiction to show us how we live.\u0026rdquo; \u0026mdash;\u003cI\u003eLos Angeles Times\u003c/I\u003e\u003cBR /\u003e  \u003cBR /\u003e \u0026ldquo;Every so often, a well-established, respected novelist vaults to a new level, demonstrating a mastery of craft that startles even his fans. That\u0026rsquo;s what Ward Just has done in . . . \u0026lsquo;The Weather in Berlin.\u0026rsquo;\u0026rdquo; \u0026mdash;\u003cI\u003eNewsweek\u003c/I\u003e\u003c/div\u003e',
    authors: [
      {
        role: 1,
        short_bio:
          "WARD JUST's novels include Exiles in the Garden, Forgetfulness, the National Book Award finalist Echo House, A Dangerous Friend, winner of the Cooper Prize for fiction from the Society of American Historians, and An Unfinished Season, winner of the Chicago Tribune Heartland Award and a finalist for the 2005 Pulitzer Prize.",
        firebrand_id: 38521188,
        display_name: 'Ward Just',
        first_name: 'Ward',
        last_name: 'Just',
        slug: 'ward-just'
      }
    ],
    isbns: ['9780547710808'],
    primary_isbn: '9780547710808',
    primary_bisacs: ['Fiction'],
    image:
      'https://s3.amazonaws.com/orim-book-covers/9780547710808-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '2/20/2018',
        date: { $date: '2018-02-20T05:00:00.000Z' },
        expiration_date: { $date: '2018-02-20T05:00:00.000Z' },
        original_price: '$14.99',
        promo_price: '$2.99',
        total_sales: 0,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6f8d2e1799d0f58a9e287' },
    primary_isbn: '9781453293836',
    title: 'Thousand Shrine Warrior',
    authors: [
      {
        role: 1,
        short_bio: '',
        firebrand_id: 22321838,
        display_name: 'Jessica Amanda Salmonson',
        first_name: 'Jessica',
        last_name: 'Salmonson',
        slug: 'jessica-amanda-salmonson'
      }
    ],
    bookkey: '12332693',
    isbns: ['9781453293836'],
    price: '7.99',
    amazon_rank: 205289,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eTomoe turns to religion to escape her past, but destiny is not through with her yet\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e The young girl crashes through the underbrush, desperate to escape the cackling soldiers at her back. After catching her in a tryst with a local farm boy, they intend to execute her for her sin. She runs for as long as she can, finally collapsing outside a shrine where a traveling nun sits with her flute. When the soldiers arrive, the nun sets her flute aside, drawing a legendary sword. She kills the men easily and sets the young girl free. Though she tried to avoid it, Tomoe Gozen has shed blood once again.\u003cBR /\u003e  \u003cBR /\u003e After countless battles and endless wandering, this legendary samurai has renounced Bushido and taken the oaths of a wandering nun. But though she disguises herself as a mendicant, trouble will find her still. Tomoe must engage in one last fight\u0026mdash;this time for the sake of her soul.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453293836-book-cover.jpg',
    genre: 'Science Fiction \u0026 Fantasy',
    ebb_newsletter_data: [
      {
        readable_date: '1/3/2018',
        date: { $date: '2018-01-03T05:00:00.000Z' },
        expiration_date: { $date: '2018-01-03T05:00:00.000Z' },
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 0,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6f04be1799d0f58a9d467' },
    primary_isbn: '9781497627741',
    title: 'Night Life',
    authors: [
      {
        role: 1,
        short_bio:
          'Ray Garton is the author of sixty books, including horror novels such as the Bram Stoker Award–nominated Live Girls, Crucifax, Lot Lizards, and The Loveliest Dead; thrillers like Sex and Violence in Hollywood, Murder Was My Alibi, and Trade Secrets; and seven short story collections. He has also written several movie and TV tie-ins and a number of young adult novels under the name Joseph Locke. In 2006, he received the Grand Master of Horror Award. He lives in northern California with his wife.',
        firebrand_id: 16157882,
        display_name: 'Ray Garton',
        first_name: 'Ray',
        last_name: 'Garton',
        slug: 'ray-garton'
      }
    ],
    bookkey: '16181761',
    isbns: ['9781497627741'],
    price: '6.99',
    amazon_rank: 892463,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cI\u003eNight Life\u003c/I\u003e, a brilliant sequel to the classic novel of vampires reimagined \u003cI\u003eLive Girls\u003c/I\u003e.\u003cBR /\u003e\u003cBR /\u003eWhen Ray Garton\u0026rsquo;s \u003cI\u003eLive Girls\u003c/I\u003e was published in 1987, it changed the face of vampire fiction. The gritty, urban story of Davey Owen\u0026rsquo;s dark seduction and reluctant transformation into a creature of the undead has become a classic of the genre.\u003cBR /\u003e\u003cBR /\u003eIn \u003cI\u003eNight Life\u003c/I\u003e, nearly two decades after battling the vampires of the Midnight Club in New York City, Davey is a marked man. He lives a quiet life in Los Angeles with the love of his life, Casey Thorne. The vampires he did not destroy back then have been hunting him ever since, eager to take their revenge\u0026mdash;and now they have found him. For what he did to them, they are determined to make him pay with his last drop of blood. With the help of old friends and new allies, Davey and Casey must face the bloodthirsty nightmare of their past. This time, they may not have a future.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497627741-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '12/2/2016',
        date: { $date: '2016-12-02T05:00:00.000Z' },
        expiration_date: { $date: '2016-12-02T05:00:00.000Z' },
        original_price: '$6.99',
        promo_price: '$1.99',
        total_sales: 51,
        ebb_only: false
      }
    ]
  },
  {
    _id: { $oid: '58e6f99de1799d0f58a9e3b5' },
    primary_isbn: '9781504003087',
    title: 'The Weather in the Streets',
    authors: [
      {
        role: 1,
        short_bio:
          'Rosamond Lehmann (1901–1990) was born on the day of Queen Victoria’s funeral, in Buckinghamshire, England, the second of four children. In 1927, a few years after graduating from the University of Cambridge, she published her first novel, Dusty Answer, to critical acclaim and instantaneous celebrity. Lehmann continued to write and publish between 1930 and 1976, penning works including The Weather in the Streets, The Ballad and the Source, and the short memoir The Swan in the Evening. Lehmann was made a Commander of the Order of the British Empire (CBE) in 1982 and remains one of the most distinguished novelists of the twentieth century.',
        firebrand_id: 22061059,
        display_name: 'Rosamond Lehmann',
        first_name: 'Rosamond',
        last_name: 'Lehmann',
        slug: 'rosamond-lehmann'
      }
    ],
    bookkey: '21086674',
    isbns: ['9781504003087'],
    price: '17.99',
    amazon_rank: 508533,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eIn 1930s England, an encounter on a train leads to an illicit affair, in this novel of \u0026ldquo;spare, poetic prose\u0026rdquo; by the author of \u003cI\u003eInvitation to the Waltz\u003c/I\u003e (Joyce Carol Oates).\u003c/B\u003e\u003cBR /\u003e  \u003cBR /\u003e Just ten years ago, Olivia Curtis attended her first dance. Now she is divorced and living with her cousin in London. When she gets a call notifying her that her father is gravely ill, she makes preparations to return to Tulverton, in the English countryside\u0026mdash;and on the railway journey home, she runs into Rollo Spencer, her girlhood crush.\u003cBR /\u003e  \u003cBR /\u003e He and Olivia once shared a fleeting, magical moment on a moonlit terrace that she has never forgotten. Now, fate has thrown them together again, and in spite of the fact that Rollo is married, they embark on a clandestine affair.\u003cBR /\u003e  \u003cBR /\u003e\u003cI\u003eThe Weather in the Streets \u003c/I\u003echarts the tempestuous course of Olivia and Rollo\u0026rsquo;s forbidden relationship, from the first throes of passion through the toll of their deception on Olivia as she confronts the harsh reality of being the other woman. A novel ahead of its time that touched on a variety of taboo subjects, it is an enduring classic by an author who \u0026ldquo;has always written brilliantly of women in love\u0026rdquo; (Margaret Drabble).\u003cBR /\u003e  \u003c/div\u003e',
    active: true,
    image:
      'https://s3.amazonaws.com/orim-book-covers/9781504003087-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '8/12/2016',
        date: { $date: '2016-08-12T04:00:00.000Z' },
        expiration_date: { $date: '2016-08-12T04:00:00.000Z' },
        original_price: '$14.99',
        promo_price: '$2.99',
        total_sales: 127,
        ebb_only: true
      },
      {
        readable_date: '6/17/2017',
        date: { $date: '2017-06-17T04:00:00.000Z' },
        expiration_date: { $date: '2017-06-17T04:00:00.000Z' },
        original_price: '$14.99',
        promo_price: '$2.99',
        total_sales: 96,
        ebb_only: true
      },
      {
        readable_date: '12/28/2017',
        date: { $date: '2017-12-28T05:00:00.000Z' },
        expiration_date: { $date: '2017-12-28T05:00:00.000Z' },
        original_price: '$17.99',
        promo_price: '$2.99',
        total_sales: 0,
        ebb_only: true
      },
      {
        readable_date: '1/28/2018',
        date: { $date: '2018-01-28T05:00:00.000Z' },
        expiration_date: { $date: '2018-01-28T05:00:00.000Z' },
        original_price: '$17.99',
        promo_price: '$2.99',
        total_sales: 0,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e70f33e1799d0f58a9f1c3' },
    primary_isbn: '9781504039482',
    title: 'The Haze',
    authors: [
      {
        role: 1,
        short_bio:
          'Though a native of Kentucky, James W. Hall (b. 1947) has lived most of his life in Florida, where he established himself as one of the foremost authors of crime in the Sunshine State. Originally a poet, he began writing crime fiction in the mid-1980s, publishing his first novel, Under Cover of Daylight, in 1986. A murder mystery starring a Key West fisherman named Thorn, it was a well-received beginning to a series that has, to date, yielded twelve books, most recently Dead Last. Besides the Thorn books, Hall has written stories and novels of life in South Florida, as well Hot Damn!, a collection of essays. He teaches writing at Florida International University, and lives with his wife Evelyn. They divide their time between the Florida Keys and the mountains of North Carolina. ',
        firebrand_id: 10687921,
        display_name: 'James W. Hall',
        first_name: 'James',
        last_name: 'Hall',
        slug: 'james-w-hall'
      }
    ],
    bookkey: '28793135',
    isbns: ['9781504039482'],
    price: '2.99',
    amazon_rank: 442162,
    publisher: 'MysteriousPress.com/Open Road',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eAn aging mobster finds trouble in a nursing home in the latest caper from an Edgar Award\u0026ndash;winning author. \u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e Back in the day, Little Mo Connor was a hired gun for Slick Dickey Scalini, taking down opponents without discretion, always with the same signature kill: three shots to the head, one shot to the heart. Now he\u0026rsquo;s living out his last days hidden away in an anonymous facility, surrounded by other seniors. Haunted by his past, his dementia comes as something of a blessing . . . though he can\u0026rsquo;t always remember what it is he wants to forget\u0026mdash;he\u0026rsquo;s always mixing up the memories from his own life with those from books he\u0026rsquo;s read and movies he\u0026rsquo;s seen. A lover of crime novels from the pulp paperback era, Little Mo relishes lurid tales\u0026mdash;the more violent the better.\u003cBR /\u003e  \u003cBR /\u003e Take, for example, his most recent acquisition: a novel in which he and his trusty .38 snubnose are the stars. It tells the story of a former hit man in love with Varla, a geriatric serial killer who convinces him that murdering his grown daughter is the only way to escape the captivity of their nursing home. But as the plot of the novel begins to play out in Little Mo\u0026rsquo;s waking life, he must struggle to separate fact from fiction before they meet in a deadly conclusion.\u003cBR /\u003e  \u003cBR /\u003e Hailed a \u0026ldquo;master of suspense\u0026rdquo; by the \u003cI\u003eNew York Times Book Review\u003c/I\u003e, author of the Thorn Mysteries James W. Hall now presents one of the most unusual and enthralling novellas in the Bibliomystery series. \u003cI\u003eThe Haze \u003c/I\u003eis a treat for book lovers and mystery buffs alike.\u003cBR /\u003e\u003cBR /\u003e\u003cI\u003eThe Bibliomysteries are a series of short tales about deadly books, by top mystery authors.\u003c/I\u003e\u003c/div\u003e',
    active: true,
    image:
      'https://s3.amazonaws.com/orim-book-covers/9781504039482-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '12/28/2017',
        date: { $date: '2017-12-28T05:00:00.000Z' },
        expiration_date: { $date: '2017-12-28T05:00:00.000Z' },
        original_price: '$2.99',
        promo_price: '$1.99',
        total_sales: 0,
        ebb_only: true
      },
      {
        readable_date: '1/29/2018',
        date: { $date: '2018-01-29T05:00:00.000Z' },
        expiration_date: { $date: '2018-01-29T05:00:00.000Z' },
        original_price: '$2.99',
        promo_price: '$1.99',
        total_sales: 0,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e70e97e1799d0f58a9f178' },
    primary_isbn: '9781504040082',
    title: 'The Wreck of the Mary Deare',
    authors: [
      {
        role: 1,
        short_bio:
          'Hammond Innes (1913–1998) was the British author of over thirty novels, as well as children’s and travel books. Born Ralph Hammond Innes in Horsham, Sussex, he was educated at the Cranbrook School in Kent. He left in 1931 to work as a journalist at the Financial News. The Doppelganger, his first novel, was published in 1937. Innes served in the Royal Artillery in World War II, eventually rising to the rank of major. A number of his books were published during the war, including Wreckers Must Breathe (1940), The Trojan Horse (1940), and Attack Alarm (1941), which was based on his experiences as an anti-aircraft gunner during the Battle of Britain. Following his demobilization in 1946, Innes worked full-time as a writer, achieving a number of early successes. His novels are notable for their fine attention to accurate detail in descriptions of place, such as Air Bridge (1951), which is set at RAF stations during the Berlin Airlift. Innes’s protagonists were often not heroes in the typical sense, but ordinary men suddenly thrust into extreme situations by circumstance. Often, this involved being placed in a hostile environment—for example, the Arctic, the open sea, deserts—or unwittingly becoming involved in a larger conflict or conspiracy. Innes’s protagonists are forced to rely on their own wits rather than the weapons and gadgetry commonly used by thriller writers. An experienced yachtsman, his great love and understanding of the sea was reflected in many of his novels. Innes went on to produce books on a regular schedule of six months for travel and research followed by six months of writing. He continued to write until just before his death, his final novel being Delta Connection (1996). At his death, he left the bulk of his estate to the Association of Sea Training Organisations to enable others to experience sailing in the element he loved.',
        firebrand_id: 28949619,
        display_name: 'Hammond Innes',
        first_name: 'Hammond',
        last_name: 'Innes',
        slug: 'hammond-innes'
      }
    ],
    bookkey: '29448672',
    isbns: ['9781504040082'],
    price: '9.99',
    amazon_rank: 413637,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eThis thrilling nautical mystery begins with an empty ship coasting through the dark and unfolds into a courtroom drama.\u003c/B\u003e\u003cBR /\u003e  \u003cBR /\u003e On a cold, foggy night, a little sailboat called the \u003cI\u003eSea Witch\u003c/I\u003e is cruising calmly through the dark when a freighter suddenly rears out of the mist on a collision course. The crew of the small craft leaps into action, straining the \u003cI\u003eSea Witch\u003c/I\u003e\u0026rsquo;s sails to the limit, barely getting her out of the way. John Sands, captain of the \u003cI\u003eSea Witch\u003c/I\u003e, catches a glimpse of the great ship as it passes by: Her name is \u003cI\u003eMary Deare\u003c/I\u003e, and her crew is nowhere to be seen.\u003cBR /\u003e  \u003cBR /\u003e A salvage expert, Sands sees a payday in the abandoned, drifting hulk. He finds one man aboard the \u003cI\u003eMary Deare\u003c/I\u003e, the first officer, who has driven himself half-mad trying to sail the freighter on his own. Getting the ship safely to port and unraveling the mystery of why it was abandoned will push Sands to his breaking point\u0026mdash;and reveal the true nature of greed on the high seas.\u003cBR /\u003e  \u003cBR /\u003e The inspiration for a film of the same name starring Gary Cooper and Charlton Heston, this incredible nautical adventure is a chilling story of maritime justice, and the terrible things that happen when the order is given to abandon ship.\u003cBR /\u003e  \u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781504040082-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '10/27/2016',
        date: { $date: '2016-10-27T04:00:00.000Z' },
        expiration_date: { $date: '2016-10-27T04:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 215,
        ebb_only: true
      },
      {
        readable_date: '5/4/2017',
        date: { $date: '2017-05-04T04:00:00.000Z' },
        expiration_date: { $date: '2017-05-04T04:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 229,
        ebb_only: true
      },
      {
        readable_date: '10/17/2017',
        date: { $date: '2017-10-17T04:00:00.000Z' },
        expiration_date: null,
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 0,
        ebb_only: false
      },
      {
        readable_date: '10/17/2017',
        date: { $date: '2017-10-17T04:00:00.000Z' },
        expiration_date: null,
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 137,
        ebb_only: false
      }
    ]
  },
  {
    _id: { $oid: '58e6f6bee1799d0f58a9dfb8' },
    primary_isbn: '9781453239407',
    title: 'Three James Herriot Classics',
    authors: [
      {
        role: 1,
        short_bio: '',
        firebrand_id: 10776585,
        display_name: 'James Herriot',
        first_name: 'James',
        last_name: 'Herriot',
        slug: 'james-herriot'
      }
    ],
    bookkey: '11035156',
    isbns: ['9781453239407'],
    price: '39.99',
    amazon_rank: 51702,
    publisher: 'Open Road Media',
    primary_bisacs: ['Biography \u0026 Autobiography', 'Pets', 'Medical'],
    description:
      '\u003cdiv\u003e\u003cB\u003eJames Herriot\u0026rsquo;s timeless bestselling series is a delightfully fun look at a country veterinarian and the creatures that populate a charming English town\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e Perhaps better than any other writer, James Herriot reveals the ties that bind us to the natural world. Collected here are three of his masterpieces\u0026mdash;\u003cI\u003eAll Creatures Great and Small\u003c/I\u003e, \u003cI\u003eAll Things Bright and Beautiful\u003c/I\u003e, and \u003cI\u003eAll Things Wise and Wonderful\u0026mdash;\u003c/I\u003ewhich have been winning over animal lovers everywhere for almost fifty years. From his night visits to drafty barns during freezing northern England winters, to the beautiful vitality of rural life in the summertime, to the colorful menagerie of animals\u0026mdash;and their owners\u0026mdash;that pass through his office, Herriot vividly evokes the daily challenges and joys that come with being a veterinarian.\u003cBR /\u003e  \u003cBR /\u003e Witty and heartwarming, this collection of whimsical, dramatic, and touching anecdotes reveals the ties that bind us to the animals in our lives. This edition features a new introduction from the author\u0026rsquo;s son and bonus archival photos.\u003cBR /\u003e  \u003c/div\u003e',
    active: true,
    image: 'orim-book-covers.s3.amazonaws.com/9781453239407-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '3/28/2016',
        date: { $date: '2016-03-28T04:00:00.000Z' },
        expiration_date: { $date: '2016-03-28T04:00:00.000Z' },
        original_price: '29.99',
        promo_price: '3.99',
        total_sales: 8,
        ebb_only: false
      },
      {
        readable_date: '11/24/2016',
        date: { $date: '2016-11-24T05:00:00.000Z' },
        expiration_date: { $date: '2016-11-24T05:00:00.000Z' },
        original_price: '$29.99',
        promo_price: '$3.99',
        total_sales: 396,
        ebb_only: true
      },
      {
        readable_date: '4/20/2017',
        date: { $date: '2017-04-20T04:00:00.000Z' },
        expiration_date: null,
        original_price: '$39.99',
        promo_price: '$3.99',
        total_sales: 311,
        ebb_only: false
      },
      {
        readable_date: '4/21/2017',
        date: { $date: '2017-04-21T04:00:00.000Z' },
        expiration_date: null,
        original_price: '$39.99',
        promo_price: '$3.99',
        total_sales: 117,
        ebb_only: false
      },
      {
        readable_date: '11/27/2017',
        date: { $date: '2017-11-27T05:00:00.000Z' },
        expiration_date: { $date: '2017-11-27T05:00:00.000Z' },
        original_price: '$39.99',
        promo_price: '$3.99',
        total_sales: 392,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6f221e1799d0f58a9d8d0' },
    primary_isbn: '9781497621909',
    title: 'Child of the Dawn',
    authors: [
      {
        role: 1,
        short_bio: '',
        firebrand_id: 16160852,
        display_name: 'Clare Coleman',
        first_name: 'Clare',
        last_name: 'Coleman',
        slug: 'clare-coleman'
      }
    ],
    bookkey: '16160867',
    isbns: ['9781497621909'],
    price: '7.99',
    amazon_rank: 1056178,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003eIn the third volume of the Ancient Tahiti series, Tepua returns to her heart\u0026#39;s home only to discover that a stranger has come, overthrowing traditions and deposing the high chief. All who would oppose him have been driven away or killed and war has found a home in Tahiti. Tepua, though, is carrying the seed of a new beginning, a child she has been forbidden to bear\u0026mdash;and she will do whatever she must to protect the child and the future of her people.\u003cBR /\u003e\u003cBR /\u003e\u003cI\u003eChild of the Dawn\u003c/I\u003e is a must-read for fans of Jean M. Auel\u0026#39;s \u003cI\u003eThe Clan of the Cave Bear\u003c/I\u003e, Linda Lay Shuler\u0026#39;s \u003cI\u003eShe Who Remembers\u003c/I\u003e, and other novels set among pre-historic cultures.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497621909-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6edefe1799d0f58a9cb85' },
    primary_isbn: '9781453289419',
    title: 'The French Powder Mystery',
    authors: [
      {
        _id: { $oid: '58e6ed71afbe421347a10e57' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 10812428,
        display_name: 'Ellery Queen',
        first_name: 'Ellery',
        last_name: 'Queen',
        slug: 'ellery-queen'
      }
    ],
    bookkey: '20565176',
    isbns: ['9781453289419', '9781497697614'],
    price: '7.99',
    amazon_rank: 156446,
    publisher: 'MysteriousPress.com/Open Road',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e \u003cb\u003eA corpse in a department store window offers a gruesome puzzle for Ellery Queen\u003c/b\u003e\u003cp\u003e\u003c/p\u003eThe windows of French\u0026rsquo;s department store are one of New York\u0026rsquo;s great attractions. Year-round, their displays show off the finest in fashion, art, and home d\u0026eacute;cor, and tourists and locals alike make a point of stopping to see what\u0026rsquo;s on offer. One afternoon, as the board debates a merger upstairs, a salesgirl begins a demonstration in one of the windows, showing off French\u0026rsquo;s new Murphy bed. A crowd gathers to watch the bed lower from the wall after a single touch of a button. But as the bed opens, people run screaming. Out tumbles a woman\u0026mdash;crumpled, bloody, and dead. The victim was Mrs. French, wife of the company president, and finding her killer will turn this esteemed store upside down. Only one detective has the soft touch necessary\u0026mdash;debonair intellectual Ellery Queen. As Queen and his police inspector father dig into French\u0026rsquo;s secrets, they find their killer is more serious than any window shopper.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453289419-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '1/16/2017',
        date: { $date: '2017-01-16T05:00:00.000Z' },
        expiration_date: { $date: '2017-01-16T05:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 344,
        ebb_only: true
      },
      {
        readable_date: '8/10/2017',
        date: { $date: '2017-08-10T04:00:00.000Z' },
        expiration_date: null,
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 187,
        ebb_only: false
      }
    ]
  },
  {
    _id: { $oid: '58e6f8b5e1799d0f58a9e249' },
    primary_isbn: '9781497698369',
    title: 'Jamintha',
    authors: [
      {
        role: 1,
        short_bio:
          'Jennifer Wilde is the pseudonym under which Tom E. Huff (1938–1990) wrote his groundbreaking New York Times–bestselling historical romance novels, including the Marietta Danver Trilogy (Love’s Tender Fury, Love Me, Marietta, and When Love Commands). Huff also wrote classic Gothic romances as Edwina Marlow, Beatrice Parker, Katherine St. Clair, and T. E. Huff. A native of Texas who taught high school English before pursuing a career as a novelist, Huff was honored with a Career Achievement Award from Romantic Times in 1988.',
        firebrand_id: 20570442,
        display_name: 'Jennifer Wilde',
        first_name: 'Jennifer',
        last_name: 'Wilde',
        slug: 'jennifer-wilde'
      }
    ],
    bookkey: '20572985',
    isbns: ['9781497698369'],
    price: '4.99',
    amazon_rank: 868498,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eA woman travels to a remote island on the edge of the moors to unravel the truth about a past she can\u0026rsquo;t remember in master of suspense Jennifer Wilde\u0026rsquo;s spellbinding Gothic romance\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e Jane Danver has no memory of her first seven years at her family\u0026rsquo;s ancestral estate on the isolated island of Danmoor. Now eighteen, she has been summoned home by her guardian to the place that still lives in her nightmares and fills her with terror.\u003cBR /\u003e\u003cBR /\u003e Tyrannical Charles Danver instills fear in the local villagers. His ne\u0026rsquo;er-do-well son, Brence, both frightens and attracts Jane, and the mysterious French housekeeper spies on her. Jane has only one ally: mysterious Jamintha, who believes that something is dangerously amiss at the mansion.\u003cBR /\u003e\u003cBR /\u003e As Jane\u0026rsquo;s memory starts to return\u0026mdash;with the help of handsome, dedicated Dr. Gavin Clark\u0026mdash;she journeys back to a time and place that have left their mark on her forever. But deadly \u003ca\u003eperil\u003c/a\u003e waits within the ruins of the house\u0026rsquo;s west wing\u0026mdash;an evil that could keep Jane from ever leaving Danver Hall again.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497698369-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6f4d3e1799d0f58a9dd24' },
    primary_isbn: '9781453283523',
    title: 'The Bait',
    authors: [
      {
        role: 1,
        short_bio:
          'Dorothy Uhnak (1930–2006) was the bestselling, award-winning author of nine novels and one work of nonfiction. Policewoman, a memoir about her life as a New York City transit police detective, was written while Uhnak was still in uniform. The Bait (1968), her first novel, won the Edgar Award for Best First Mystery Novel. She went on to hit the bestseller lists with novels including Law and Order (1973) and The Investigation (1977). Uhnak has been credited with paving the way for authors such as Sue Grafton, Sara Paretsky, Patricia Cornwell, and many others who write crime novels and police procedurals with strong heroines. Her books have been translated into fifteen languages.   ',
        firebrand_id: 11792496,
        display_name: 'Dorothy Uhnak',
        first_name: 'Dorothy',
        last_name: 'Uhnak',
        slug: 'dorothy-uhnak'
      }
    ],
    bookkey: '11934940',
    isbns: ['9781453283523'],
    price: '7.99',
    amazon_rank: 115092,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cb\u003eIn this Edgar Award\u0026ndash;winning debut novel, a dedicated cop becomes the ultimate prey when a serial killer gets out on bail\u003c/b\u003e\u003cBR\u003eIt begins when New York Police Department Detective Second-Grade Christie Opara arrests a man on the subway for indecent exposure. Within hours, Murray Rogoff, a burly giant, his crazed stare concealed behind thick glasses, is out on bail. Soon after, the body of a young dancer is found stashed behind the stairway of a Bronx apartment building. The girl was brutally raped and strangled, and a clue links her with two previous murders. The killer takes a signature trophy: a hacked-off lock of the victim\u0026rsquo;s hair. A few days later, Christie starts to get strange, late-night phone calls. Although Rogoff never spoke when he was in lock-up, the detective\u0026rsquo;s instincts tell her that Rogoff\u0026rsquo;s the serial killer they\u0026rsquo;re hunting. With the reluctant approval of her boss, Assistant District Attorney Casey Reardon, Christie prepares to become the bait of a deadly psychopath.This ebook features an illustrated biography of Dorothy Uhnak including rare images from the author\u0026rsquo;s estate.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453283523-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '5/4/2016',
        date: { $date: '2016-05-04T04:00:00.000Z' },
        expiration_date: { $date: '2016-05-04T04:00:00.000Z' },
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 157,
        ebb_only: true
      },
      {
        readable_date: '8/10/2016',
        date: { $date: '2016-08-10T04:00:00.000Z' },
        expiration_date: { $date: '2016-08-10T04:00:00.000Z' },
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 296,
        ebb_only: true
      },
      {
        readable_date: '5/31/2017',
        date: { $date: '2017-05-31T04:00:00.000Z' },
        expiration_date: { $date: '2017-05-31T04:00:00.000Z' },
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 98,
        ebb_only: true
      },
      {
        readable_date: '11/28/2017',
        date: { $date: '2017-11-28T05:00:00.000Z' },
        expiration_date: { $date: '2017-11-28T05:00:00.000Z' },
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 68,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6f9cae1799d0f58a9e3d2' },
    primary_isbn: '9781504010320',
    title: 'Report on Probability A',
    authors: [
      {
        role: 1,
        short_bio:
          'Brian W. Aldiss was born in Norfolk, England, in 1925. Over a long and distinguished writing career, he published award-winning science fiction (two Hugo Awards, a Nebula Award, and the John W. Campbell Memorial Award); bestselling popular fiction, including the three-volume Horatio Stubbs saga and the four-volume the Squire Quartet; experimental fiction such as Report on Probability A and Barefoot in the Head; and many other iconic and pioneering works, including the Helliconia Trilogy. He edited many successful anthologies and published groundbreaking nonfiction, including a magisterial history of science fiction (Billion Year Spree, later revised and expanded as Trillion Year Spree). Among his many short stories, perhaps the most famous was “Super-Toys Last All Summer Long,” which was adapted for film by Stanley Kubrick and produced and directed after Kubrick’s death by Steven Spielberg as A.I. Artificial Intelligence. Brian W. Aldiss passed away in 2017 at the age of 92. ',
        firebrand_id: 16157484,
        display_name: 'Brian W. Aldiss',
        first_name: 'Brian',
        last_name: 'Aldiss',
        slug: 'brian-w-aldiss'
      }
    ],
    bookkey: '22555194',
    isbns: ['9781504010320'],
    price: '7.99',
    amazon_rank: 787836,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eAn unending chain of surveillance crosses countless dimensions in this brilliant, disturbing, and groundbreaking \u0026ldquo;antinovel\u0026rdquo; by one of science fiction\u0026rsquo;s greatest practitioners\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e Mr. Mary and his wife are being observed from at least three vantage points as they go about their mundane home lives. G, the former gardener, watches them from a garden shed. Mr. Mary\u0026rsquo;s dismissed secretary, S, watches them from the top room of a brick outhouse in the back. The chauffeur, C, who no longer drives, watches the Marys from the garage. Each observer must file a report with his superiors in another continuum, pausing in his surveillance only long enough to eat identical meals alone at the deserted caf\u0026eacute; across the street. But the watchers are themselves being observed by others who are, in turn, being watched across vast and infinite dimensional planes in an attempt to unravel the mysteries of the world known as Probability A.\u003cBR /\u003e  \u003cBR /\u003e This brilliant, experimental work by Grand Master Brian W. Aldiss is a perplexing and devastatingly haunting masterwork of speculative fiction, considered by many to be the greatest work in the long, prolific career of a true giant of the genre. Thought-provoking, confounding, and stylistically brilliant, \u003cI\u003eReport on Probability A \u003c/I\u003ewill burn its way into the reader\u0026rsquo;s mind and memory.\u003cBR /\u003e\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781504010320-book-cover.jpg',
    genre: 'Science Fiction \u0026 Fantasy'
  },
  {
    _id: { $oid: '58e6f59de1799d0f58a9dea3' },
    primary_isbn: '9781497691124',
    title: 'Beyond Good and Evil',
    authors: [
      {
        _id: { $oid: '58e6f59dcb576013666dec66' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 20056648,
        display_name: 'Friedrich Nietzsche',
        first_name: 'Friedrich',
        last_name: 'Nietzsche',
        slug: 'friedrich-nietzsche'
      }
    ],
    bookkey: '20056563',
    isbns: ['9781497691124'],
    price: '0.99',
    amazon_rank: 202107,
    publisher: 'Open Road Media',
    primary_bisacs: ['Philosophy'],
    description:
      '\u003cdiv\u003e\u003cB\u003eFriedrich Nietzsche\u0026rsquo;s trailblazing, incendiary book sets dogmatic philosophy and traditional morality alight\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e One of the most important works in philosophical history, \u003cI\u003eBeyond Good and Evil \u003c/I\u003econsists of 296 sections and a final \u0026ldquo;aftersong.\u0026rdquo; Therein, Nietzsche articulates his views on philosophy, philosophers, morality, religion, society, people, and culture. As challenging as it is rewarding, \u003cI\u003eBeyond Good and Evil\u003c/I\u003e will command you, confront you, and provoke you into reconsidering your perception of the modern world.\u003cBR /\u003e  \u003cBR /\u003e This ebook has been professionally proofread to ensure accuracy and readability on all devices.\u003cBR /\u003e\u003cBR /\u003e\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497691124-book-cover.jpg'
  },
  {
    _id: { $oid: '59cdf2fb2ad4b3e3d0adf8ee' },
    primary_isbn: '9781504046930',
    title: 'The Golden Unicorn',
    authors: [
      {
        role: 1,
        short_bio: '',
        firebrand_id: 31124009,
        display_name: 'Phyllis A. Whitney',
        first_name: 'Phyllis',
        last_name: 'Whitney',
        slug: 'phyllis-a-whitney'
      }
    ],
    bookkey: '34112462',
    isbns: ['9781504046930'],
    price: '7.99',
    amazon_rank: 46170,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eFrom a \u003cI\u003eNew York Times\u003c/I\u003e\u0026ndash;bestselling author: A young woman\u0026rsquo;s search for her biological parents uncovers a secret history of murder and conspiracy.\u003c/B\u003e\u003cBR /\u003e  \u003cBR /\u003e When her adoptive parents die in a train crash in Italy, writer Courtney Marsh becomes more determined than ever to find her roots. She was mysteriously abandoned when she was just an infant, and she never knew the truth about her biological parents. The only clues to her past are a golden unicorn pendant she\u0026rsquo;s had all her life and a tattered newspaper clipping about an artist who hailed from one of the most prominent yet reclusive East Hampton families.\u003cBR /\u003e  \u003cBR /\u003e Now, under the guise of a reporter, Courtney has arrived at the Rhodes\u0026rsquo;s mansion on the dunes. She may be uncertain of her heritage, but she\u0026rsquo;s as sure as the bracing ocean winds that this family is hiding something. Only the handsome son-in-law of the Rhodes clan, whose marriage is on the rocks, is particularly forthcoming\u0026mdash;especially as he grows more intimately fond of the lovely and inquisitive young guest. But the more Courtney discovers, the more she has to fear\u0026mdash;because hers is a legacy of murder that has yet to play its final hand.\u003cBR /\u003e  \u003cBR /\u003e\u003cI\u003eThe Golden Unicorn\u003c/I\u003e is a novel of buried family secrets in the New York art world from \u0026ldquo;a superb and gifted storyteller\u0026rdquo; (Mary Higgins Clark).\u003cBR /\u003e  \u003cBR /\u003e\u003cI\u003eThis ebook features an illustrated biography of Phyllis A. Whitney including rare images from the author\u0026rsquo;s estate.\u003c/I\u003e\u003cBR /\u003e  \u003c/div\u003e',
    active: true,
    image:
      'https://s3.amazonaws.com/orim-book-covers/9781504046930-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '1/1/2018',
        date: { $date: '2018-01-01T05:00:00.000Z' },
        expiration_date: { $date: '2018-01-01T05:00:00.000Z' },
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 0,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6ee22e1799d0f58a9cd2b' },
    primary_isbn: '9781497658653',
    title: 'Murder in Little Egypt',
    authors: [
      {
        role: 1,
        short_bio:
          'Darcy O’Brien is the author of the novels A Way of Life, Like Any Other, which won the Ernest Hemingway Award for Best First Novel in 1978, and The Silver Spooner, as well as the nonfiction bestseller Two of a Kind: The Hillside Stranglers. He died in 1998.',
        firebrand_id: 17932933,
        display_name: "Darcy O'Brien",
        first_name: 'Darcy',
        last_name: "O'Brien",
        slug: 'darcy-obrien'
      }
    ],
    bookkey: '17932925',
    isbns: ['9781497658653'],
    price: '9.99',
    amazon_rank: 73083,
    publisher: 'Open Road Media',
    primary_bisacs: ['True Crime', 'Biography \u0026 Autobiography', 'History'],
    description:
      '\u003cdiv\u003e\u003cB\u003eJohn Dale Cavaness was a much-admired Illinois doctor\u0026mdash;and the cold-blooded killer of his own son.\u003c/B\u003e\u003cBR /\u003e  \u003cBR /\u003e Fusing the narrative power of an award-winning novelist and the detailed research of an experienced investigator, author Darcy O\u0026rsquo;Brien unfolds the story of Dr. John Dale Cavaness, the southern Illinois physician and surgeon charged with the murder of his son Sean in December 1984. Outraged by the arrest of the skilled medical practitioner who selflessly attended to their needs, the people of Little Egypt, as the natives call their region, rose to his defense.\u003cBR /\u003e But during the subsequent trial, a radically different, disquieting portrait of Dr. Cavaness would emerge. Throughout the three decades that he enjoyed the admiration and respect of his community, Cavaness was privately terrorizing his family, abusing his employees, and making disastrous financial investments. As more and more grisly details of the Cavaness case come to stark Midwestern light in O\u0026rsquo;Brien\u0026rsquo;s chilling account, so too does the hidden gothic underside of rural America and its heritage of violence and blood.\u003cBR /\u003e  \u003cBR /\u003e \u0026ldquo;A meticulous account . . . An implicit indictment of a culture that condones and encourages violent behavior in men.\u0026rdquo; \u0026mdash;\u003cI\u003eThe New York Times Book Review\u003c/I\u003e\u003cBR /\u003e  \u003cBR /\u003e \u0026ldquo;A fascinating story, and Darcy O\u0026rsquo;Brien does a great job of structuring it for suspense.\u0026rdquo; \u0026mdash;\u003cI\u003eThe Washington Post\u003c/I\u003e\u003cBR /\u003e  \u003cBR /\u003e \u0026ldquo;Riveting.\u0026rdquo;\u0026mdash;\u003cI\u003ePublishers Weekly\u003c/I\u003e\u003cBR /\u003e  \u003cBR /\u003e \u0026ldquo;A terrifying story of family violence and the community that honored the perpetrator.\u0026rdquo; \u0026mdash;\u003cI\u003eKirkus Reviews \u003c/I\u003e\u003cBR /\u003e  \u003cBR /\u003e \u0026ldquo;Stunning material . . . Handled with justice and fastidiousness by a natural storyteller.\u0026rdquo; \u0026mdash;Seamus Heaney, winner of the Nobel Prize\u003cBR /\u003e  \u003c/div\u003e',
    active: true,
    image:
      'https://s3.amazonaws.com/orim-book-covers/9781497658653-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '5/20/2016',
        date: { $date: '2016-05-20T04:00:00.000Z' },
        expiration_date: { $date: '2016-05-20T04:00:00.000Z' },
        original_price: '$4.99',
        promo_price: '$1.99',
        total_sales: 189,
        ebb_only: false
      },
      {
        readable_date: '1/7/2017',
        date: { $date: '2017-01-07T05:00:00.000Z' },
        expiration_date: { $date: '2017-01-07T05:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 253,
        ebb_only: true
      },
      {
        readable_date: '10/20/2017',
        date: { $date: '2017-10-20T04:00:00.000Z' },
        expiration_date: null,
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 0,
        ebb_only: false
      },
      {
        readable_date: '10/20/2017',
        date: { $date: '2017-10-20T04:00:00.000Z' },
        expiration_date: null,
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 129,
        ebb_only: false
      },
      {
        readable_date: '11/21/2017',
        date: { $date: '2017-11-21T05:00:00.000Z' },
        expiration_date: { $date: '2017-11-21T05:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 158,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '59f974802ad4b3e3d0ae0f4e' },
    amazon_rank: 606414,
    active: true,
    title: "Rameau's Niece",
    price: '14.99',
    bookkey: '38521658',
    publisher: 'Houghton Mifflin Harcourt',
    description:
      '\u003cdiv\u003e\u003cB\u003eA \u0026ldquo;gem of a novel\u0026rdquo; that sends up marriage, academia, and literary stardom, by the \u003cI\u003eNew York Times\u003c/I\u003e\u0026ndash;bestselling author of \u003cI\u003eThey May Not Mean To, But They Do\u003c/I\u003e (\u003cI\u003ePublishers Weekly\u003c/I\u003e).\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e In this delightful novel from an author who \u0026ldquo;has been favored in so many ways by the muse of comedy,\u0026rdquo; we meet Margaret Nathan, the brilliant but forgetful author of an unlikely bestseller (\u003cI\u003eThe New York Review of Books\u003c/I\u003e). Happily married to a benevolently egotistical, slightly dull but sexy professor, Margaret seems blessed\u0026mdash;until she finds herself seduced by an eighteenth-century novel she discovers in the library. Wrapped in its lascivious world, Margaret begins to imitate its protagonist, embarking on a hilarious jaunt around Manhattan in search of renewed passion. Will she find fulfillment through her escapades or settle for her husband? Part romantic comedy, part intellectual parody, \u003cI\u003eRameau\u0026rsquo;s Niece\u003c/I\u003e is wise, affecting, and thoroughly entertaining.\u003c/div\u003e',
    authors: [
      {
        role: 1,
        short_bio:
          'CATHLEEN SCHINE is the author of many novels, including The Three Weissmanns of Westport, andthe internationally best-selling The Love Letter and Alice in Bed, To the Bird House, She Is Me, and The New Yorkers.',
        firebrand_id: 38521669,
        display_name: 'Cathleen Schine',
        first_name: 'Cathleen',
        last_name: 'Schine',
        slug: 'cathleen-schine'
      }
    ],
    isbns: ['9780547548364'],
    primary_isbn: '9780547548364',
    primary_bisacs: ['Fiction'],
    image:
      'https://s3.amazonaws.com/orim-book-covers/9780547548364-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6f379e1799d0f58a9db37' },
    primary_isbn: '9781497621282',
    title: 'Dragon Season',
    authors: [
      {
        _id: { $oid: '58e6f379afbe421347a178fb' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 16165516,
        display_name: 'Michael Cassutt',
        first_name: 'Michael',
        last_name: 'Cassutt',
        slug: 'michael-cassutt'
      }
    ],
    bookkey: '16165538',
    isbns: ['9781497621282', '9781497621299'],
    price: '4.99',
    amazon_rank: 0,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003eAir Force lieutenant Rick Walsh has just gotten off a twelve-hour flight from Guam at the Tucson Airport. All he wants right now is too see his girlfriend Maia and maybe have a short rest before reassignment. What Lieutenant Walsh finds instead is a month-old infant and a mystery that spans two universes.\u003cBR /\u003e\u003cBR /\u003e Maia has disappeared, leaving behind her newborn, Gus, a baby with Walsh\u0026rsquo;s eyes. It seems that a disturbing number of Tucson residents have gone missing as well and the authorities don\u0026rsquo;t have a clue. As Walsh races to track down Maia and her possible kidnappers, a conspiracy unfolds as the search leads him deep into the desert and then on to someplace\u0026hellip;else. What awaits Walsh in this other land proves sinister and dangerous--and it seems to have its eye on our world.\u003cBR /\u003e\u003cBR /\u003e In \u003cI\u003eDragon Season\u003c/I\u003e, author Michael Cassutt weaves classic suspense and modern fantasy into a wild ride that readers won\u0026rsquo;t soon forget. \u003c/div\u003e',
    active: false,
    image: 'book-assets.openroadmedia.com/9781497621282-book-cover.jpg',
    genre: 'Science Fiction \u0026 Fantasy'
  },
  {
    _id: { $oid: '58e70862e1799d0f58a9ecd2' },
    primary_isbn: '9781480443907',
    title: 'Martin Hewitt, Investigator',
    authors: [
      {
        _id: { $oid: '58e70862cb576013666f0c57' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 25047382,
        display_name: 'Arthur Morrison',
        first_name: 'Arthur',
        last_name: 'Morrison',
        slug: 'arthur-morrison'
      }
    ],
    bookkey: '25047274',
    isbns: ['9781480443907'],
    price: '0.99',
    amazon_rank: 581706,
    publisher: 'MysteriousPress.com/Open Road',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003ePerplexing puzzles from the casebook of master sleuth Martin Hewitt \u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e Headquartered in a modest office on the Strand, Martin Hewitt, a stout and genial former law clerk turned private investigator, is every bit the deductive equal of Sherlock Holmes. A true master of disguise with a mind as sharp as a freshly stropped straight razor, Hewitt possesses a familiarity with London\u0026rsquo;s night streets and an easy rapport with members of the lower classes. In his capable hands, clues that were missed, misread, or disregarded by the local constabulary are reshaped to find the irrefutable solution to the most unsolvable of mysteries.\u003cBR /\u003e\u003cBR /\u003e Narrated by Hewitt\u0026rsquo;s dearest friend, the esteemed journalist Mr. Brett, this collection recounts the great detective\u0026rsquo;s most confounding cases. From a troubling series of robberies that occurred at the same residence over the course of several months to a locked-room \u0026ldquo;suicide\u0026rdquo; that was decidedly \u003cI\u003enot\u003c/I\u003e self-inflicted, Hewitt bravely matches wits with England\u0026rsquo;s most diabolical criminals.\u003cBR /\u003e\u003cBR /\u003e This ebook features a new introduction by Otto Penzler and has been professionally proofread to ensure accuracy and readability on all devices.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781480443907-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6f84fe1799d0f58a9e1e5' },
    primary_isbn: '9781453298695',
    title: 'Free Fall',
    authors: [
      {
        role: 1,
        short_bio:
          'Chris Grabenstein is the author of Escape from Mr. Lemoncello’s Library, which has been nominated for twenty-two different state book awards and has already spent six months in the top ten on the New York Times bestseller list. Nickelodeon optioned the book to become a movie. Chris is also the coauthor, with James Patterson, of the #1 bestsellers I Funny, Treasure Hunters, and the House of Robots series. He is the critically acclaimed author of over twenty other books for children and adults, a playwright, screenwriter, and former advertising executive and improvisational comedian. Winner of two Anthony and three Agatha Awards, Chris wrote for Jim Henson’s Muppets and cowrote the CBS TV movie The Christmas Gift starring John Denver. His dog Fred has better credits. Fred starred on Broadway in Chitty Chitty Bang Bang. To find out more about Chris, visit him at www.ChrisGrabenstein.com.',
        firebrand_id: 11217178,
        display_name: 'Chris Grabenstein',
        first_name: 'Chris',
        last_name: 'Grabenstein',
        slug: 'chris-grabenstein'
      }
    ],
    bookkey: '12452831',
    isbns: ['9781453298695'],
    price: '17.99',
    amazon_rank: 285856,
    publisher: 'Pegasus Books',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cb\u003eThe new novel in the award-winning mystery series that \u0026ldquo;moves like lightning\u0026rdquo; (\u003ci\u003eKirkus Reviews\u003c/i\u003e)\u003c/b\u003e \u0026ldquo;I didn\u0026rsquo;t do it!\u0026rdquo; is something cops hear all the time. But when the plea comes from a close friend who\u0026rsquo;s fallen on hard times, it\u0026rsquo;s tougher to ignore, especially for young Officer Danny Boyle. It\u0026rsquo;s the start of another action-packed summer for the wise cracking Boyle and straight-arrow cop (now Chief of Detectives) John Ceepak down the Jersey Shore as they do their best to help Danny\u0026rsquo;s friend, a young nurse who claims she has been falsely accused of aggravated assault by a prestigious Sea Haven doctor. Ceepak\u0026rsquo;s unshakable code of honor is tested when he trusts that the nurse is telling the truth. It\u0026rsquo;s stretched to the limit when one of the nurse\u0026rsquo;s home health care patients turns up dead. Now Ceepak and Danny must answer the hard and horrible question: \u0026ldquo;Did we just help a friend get away with murder?\u0026rdquo; Get ready for another fun and fast-paced page-turner from Anthony and Agatha award\u0026ndash;winner Chris Grabenstein.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453298695-book-cover.jpg'
  },
  {
    _id: { $oid: '58e70b82e1799d0f58a9efa4' },
    primary_isbn: '9781504033275',
    title: 'Pursuit of a Parcel',
    authors: [
      {
        _id: { $oid: '58e6ed44afbe421347a10cd6' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 10689845,
        display_name: 'Patricia Wentworth',
        first_name: 'Patricia',
        last_name: 'Wentworth',
        slug: 'patricia-wentworth'
      }
    ],
    bookkey: '26241078',
    isbns: ['9781504033275'],
    price: '6.99',
    amazon_rank: 231803,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eEnemy forces will stop at nothing to retrieve an incriminating package in this gripping international thriller from the author of the Miss Silver Mysteries\u003c/B\u003e\u003cBR /\u003e  \u003cBR /\u003e Double agent Cornelius Roos is about to become dispensable to the Germans\u0026mdash;until he reveals the existence of a recording that will guarantee the death of a high-ranking Nazi official if it finds its way into the hands of Hermann Goering. So Roos strikes a bargain: If he walks out of Gestapo headquarters alive, he will ensure that the compromising recording never reaches Goering.\u003cBR /\u003e  \u003cBR /\u003e Meanwhile, in the Foreign Intelligence office in England, agent Antony Rossiter is interrogated about Roos, his older, adopted brother. A few days later, Rossiter parachutes into Holland to make contact with Roos. But when a brown paper parcel with Rossiter\u0026rsquo;s name on it is delivered to a British law firm, Rossiter\u0026rsquo;s fianc\u0026eacute;e, Delia Merridew, becomes an innocent pawn in a deadly game of international espionage and cold-blooded murder. Now it\u0026rsquo;s up to Scotland Yard Inspector Ernest Lamb and Detective Frank Abbott to ferret out the truth before a desperate enemy claims another victim.\u003cBR /\u003e  \u003cBR /\u003e\u003cI\u003ePursuit of a Parcel\u003c/I\u003e is the 3rd book in the Ernest Lamb Mysteries, but you may enjoy reading the series in any order.\u003cBR /\u003e  \u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781504033275-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '8/6/2017',
        date: { $date: '2017-08-06T04:00:00.000Z' },
        expiration_date: null,
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 167,
        ebb_only: false
      }
    ]
  },
  {
    _id: { $oid: '58e6ee4ce1799d0f58a9ce1c' },
    primary_isbn: '9781497607743',
    title: 'The Infinity Concerto',
    authors: [
      {
        role: 1,
        short_bio:
          'Greg Bear, author of more than twenty-five books that have been translated into seventeen languages, has won science fiction’s highest honors and is considered the natural heir to Arthur C. Clarke. The recipient of two Hugos and four Nebulas for his fiction, he has been called “the best working writer of hard science fiction” by The Science Fiction Encyclopedia. Many of his novels, such as Darwin’s Radio, are considered to be this generations’ classics. Bear is married to Astrid Anderson, daughter of science fiction great Poul Anderson, and they are the parents of two children, Erik and Alexandria. His recent thriller novel, Quantico, was published in 2007 and the sequel, Mariposa, followed in 2009. He has since published a new, epic science fiction novel, City at the End of Time and a generation starship novel, Hull Zero Three.',
        firebrand_id: 16156842,
        display_name: 'Greg Bear',
        first_name: 'Greg',
        last_name: 'Bear',
        slug: 'greg-bear'
      }
    ],
    bookkey: '16174355',
    isbns: ['9781497607743'],
    price: '17.99',
    amazon_rank: 292672,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eMusic, myth, and magic mix in this tale of a melody not meant for human ears, from the \u003cI\u003eNew York Times\u003c/I\u003e\u0026ndash;bestselling and award-winning author of \u003cI\u003eDarwin\u0026rsquo;s Radio.\u003c/I\u003e\u003c/B\u003e\u003cBR /\u003e  \u003cBR /\u003e Michael Perrin is an aspiring poet, struggling to express the chaotic cadences of his thoughts on paper. He finds a kindred spirit in Arno Waltiri, the film score composer behind several of Michael\u0026rsquo;s favorite classic movies. The maestro\u0026rsquo;s greatest piece, however, was performed in front of a live audience only once. The concerto Opus 45, \u003cI\u003eInfinity\u003c/I\u003e left its listeners entranced, altered to the very core of their souls.\u003cBR /\u003e  \u003cBR /\u003e Waltiri\u0026rsquo;s composition is a song of power. Never meant to be heard by human ears, its melody is as captivating as a siren\u0026rsquo;s call; its notes ring out like a death knell; and its rhythms shake the very foundations of reality.\u003cBR /\u003e  \u003cBR /\u003e The music\u0026rsquo;s otherworldly tones have led Michael through the gate between Earth and the Realm of the Sidhedark, where faeries reign by rule of magic\u0026mdash;and where Michael must find his muse if he\u0026rsquo;s ever to return home.\u003cBR /\u003e  \u003cBR /\u003e\u003cI\u003eThe Infinity Concerto\u003c/I\u003e is a fantasy masterpiece by the Hugo and Nebula Award\u0026ndash;winning author of the Forerunner Saga, \u003cI\u003eEon\u003c/I\u003e, and other imaginative classics.\u003cBR /\u003e  \u003cBR /\u003e\u003cBR /\u003e  \u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497607743-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '1/28/2017',
        date: { $date: '2017-01-28T05:00:00.000Z' },
        expiration_date: { $date: '2017-01-28T05:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 1,
        ebb_only: false
      },
      {
        readable_date: '11/1/2017',
        date: { $date: '2017-11-01T04:00:00.000Z' },
        expiration_date: { $date: '2017-11-01T04:00:00.000Z' },
        original_price: '$17.99',
        promo_price: '$1.99',
        total_sales: 136,
        ebb_only: true
      }
    ],
    genre: 'Science Fiction \u0026 Fantasy'
  },
  {
    _id: { $oid: '58e6f145e1799d0f58a9d670' },
    primary_isbn: '9781453273241',
    title: 'Sirens and Other Daemon Lovers',
    authors: [
      {
        role: 1,
        short_bio:
          'Ellen Datlow, an acclaimed science fiction and fantasy editor, was born and raised in New York City. She has been a short story and book editor for more than thirty years and has edited or coedited several critically acclaimed anthologies of speculative fiction, including the Year’s Best Fantasy and Horror series and Black Thorn, White Rose (1994) with Terri Windling. Datlow has received numerous honors, including multiple Shirley Jackson, Bram Stoker, Hugo, Locus, and World Fantasy Awards, and Life Achievement Awards from the Horror Writers Association and the World Fantasy Association, to name just a few. She resides in New York.  ',
        firebrand_id: 11700785,
        display_name: 'Ellen Datlow',
        first_name: 'Ellen',
        last_name: 'Datlow',
        slug: 'ellen-datlow'
      },
      {
        role: 1,
        short_bio:
          'Terri Windling is a writer and editor of science fiction and fantasy, an essayist on the mythic arts, and a visual artist. She is the author of the bestselling books The Wood Wife (1996) and The Essential Bordertown (1999). Windling has co-edited many collections with renowned editor Ellen Datlow, including the Year’s Best Fantasy and Horror series. Windling has received multiple awards for fantasy and science fiction literature, including the Science Fiction Writers of America’s Solstice Award for outstanding contributions to the speculative fiction field and the Bram Stoker Award. Windling is also a visual artist whose mythic-themed work has appeared across the United States and Europe. She currently resides in Arizona and Devon, England.',
        firebrand_id: 11722084,
        display_name: 'Terri Windling',
        first_name: 'Terri',
        last_name: 'Windling',
        slug: 'terri-windling'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 34933806,
        display_name: 'Storm Constantine',
        first_name: 'Storm',
        last_name: 'Constantine',
        slug: 'storm-constantine'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 34933058,
        display_name: 'Delia Sherman',
        first_name: 'Delia',
        last_name: 'Sherman',
        slug: 'delia-sherman'
      },
      {
        role: 0,
        short_bio:
          'Joyce Carol Oates is the author of over seventy books encompassing novels, poetry, criticism, story collections, plays, and essays. Her novel Them won the National Book Award in Fiction in 1970. Oates has been a member of the American Academy of Arts and Letters for more than three decades and currently holds the Roger S. Berlind Distinguished Professorship at Princeton University.   ',
        firebrand_id: 22008090,
        display_name: 'Joyce Carol Oates',
        first_name: 'Joyce',
        last_name: 'Oates',
        slug: 'joyce-carol-oates'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 25606094,
        display_name: 'Tanith Lee',
        first_name: 'Tanith',
        last_name: 'Lee',
        slug: 'tanith-lee'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 34932336,
        display_name: 'Edward Bryant',
        first_name: 'Edward',
        last_name: 'Bryant',
        slug: 'edward-bryant'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 34933626,
        display_name: 'Garry Kilworth',
        first_name: 'Garry',
        last_name: 'Kilworth',
        slug: 'garry-kilworth'
      },
      {
        role: 0,
        short_bio:
          'Michael Swanwick has received the Hugo, Nebula, World Fantasy, and Theodore Sturgeon awards for his work. His short fiction has appeared in Omni, Penthouse, Asimov’s, High Times, and numerous other publications, and many pieces have been reprinted in best-of-the-year anthologies. He has written nine novels, among them In the Drift, Stations of the Tide, the New York Times Notable Book The Iron Dragon’s Daughter, Jack Faust, and, most recently, Chasing the Phoenix. Swanwick lives in Philadelphia with his wife, Marianne Porter, and their son, Sean.  ',
        firebrand_id: 22402619,
        display_name: 'Michael Swanwick',
        first_name: 'Michael',
        last_name: 'Swanwick',
        slug: 'michael-swanwick'
      },
      {
        role: 0,
        short_bio:
          'Elizabeth Wein (b. 1964) is an author of young adult novels and short stories. After growing up in New York City; England; Jamaica; and Harrisburg, Pennsylvania, she attended Yale University and received her doctorate in folklore at the University of Pennsylvania. While in Philadelphia, Wein learned to ring church bells in the English style known as change ringing, and in 1991, she met her future husband, Tim, at a bell-ringers’ dinner-dance. She and Tim are also private pilots who have flown all over the world. She lives with Tim and their two children in Scotland. ',
        firebrand_id: 13158283,
        display_name: 'Elizabeth Wein',
        first_name: 'Elizabeth',
        last_name: 'Wein',
        slug: 'elizabeth-wein'
      },
      {
        role: 0,
        short_bio:
          'Pat Murphy has won numerous awards for her thoughtful, literary science fiction and fantasy writing, including two Nebula Awards, the Philip K. Dick Award, the World Fantasy Award, the Seiun Award, and the Theodore Sturgeon Memorial Award. She has published eight novels and many short stories. Her works include Rachel in Love; The Falling Woman; The City, Not Long After; Nadya; and Adventures in Time and Space with Max Merriwell, a novel that Publishers Weekly called the “cerebral equivalent of a roller-coaster ride.” Her children’s novel, The Wild Girls, received a Christopher Award in 2008.In addition to writing fiction, Pat writes about science for children and adults. She has authored three science books for adults and more than fifteen science activity books for children. Her science writings have been honored with the American Institute of Physics Science Communication Award, the Science Books and Films Prize for Excellence in Science Books, the Pirelli INTERNETional Award for environmental publishing, and an award from Good Housekeeping.In 1991, with writer Karen Fowler, Pat cofounded the James Tiptree, Jr. Award, an annual literary prize for science fiction or fantasy that expands or explores our understanding of gender roles. This award is funded by grassroots efforts that include auctions and bake sales, harnessing the power of chocolate chip cookies in an ongoing effort to change the world.Pat enjoys looking for and making trouble. Her favorite color is ultraviolet. Her favorite book is whichever one she is working on right now. ',
        firebrand_id: 15743986,
        display_name: 'Pat Murphy',
        first_name: 'Pat',
        last_name: 'Murphy',
        slug: 'pat-murphy'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 34933412,
        display_name: 'Ellen Steiber',
        first_name: 'Ellen',
        last_name: 'Steiber',
        slug: 'ellen-steiber'
      },
      {
        role: 0,
        short_bio:
          'Jane Yolen is a novelist, poet, fantasist, journalist, songwriter, storyteller, folklorist, and children’s book author who has written more than three hundred books. Her accolades include the Caldecott Medal, two Nebula Awards, the World Fantasy Award, three Mythopoeic Awards, the Kerlan Award, two Christopher Awards, and six honorary doctorate degrees from colleges and universities in Massachusetts and New Hampshire. Born and raised in New York City, the mother of three and the grandmother of six, Yolen lives in Massachusetts and St. Andrews, Scotland.   ',
        firebrand_id: 12942172,
        display_name: 'Jane Yolen',
        first_name: 'Jane',
        last_name: 'Yolen',
        slug: 'jane-yolen'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 34935214,
        display_name: 'Dave Smeds',
        first_name: 'Dave',
        last_name: 'Smeds',
        slug: 'dave-smeds'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 10066252,
        display_name: 'Neil Gaiman',
        first_name: 'Neil',
        last_name: 'Gaiman',
        slug: 'neil-gaiman'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 34935226,
        display_name: 'Doris Egan',
        first_name: 'Doris',
        last_name: 'Egan',
        slug: 'doris-egan'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 34935120,
        display_name: 'Melissa Lee Shaw',
        first_name: 'Melissa',
        last_name: 'Shaw',
        slug: 'melissa-lee-shaw'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 34935239,
        display_name: 'Kelley Eskridge',
        first_name: 'Kelley',
        last_name: 'Eskridge',
        slug: 'kelley-eskridge'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 16178666,
        display_name: 'Brian M. Stableford',
        first_name: 'Brian',
        last_name: 'Stableford',
        slug: 'brian-m-stableford'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 34935249,
        display_name: 'Conrad Williams',
        first_name: 'Conrad',
        last_name: 'Williams',
        slug: 'conrad-williams'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 34935262,
        display_name: 'Mark W. Tiedemann',
        first_name: 'Mark',
        last_name: 'Tiedemann',
        slug: 'mark-w-tiedemann'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 34935272,
        display_name: 'Ellen Kushner',
        first_name: 'Ellen',
        last_name: 'Kushner',
        slug: 'ellen-kushner'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 34935284,
        display_name: 'Wendy Froud',
        first_name: 'Wendy',
        last_name: 'Froud',
        slug: 'wendy-froud'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 34933696,
        display_name: 'Bruce Glassco',
        first_name: 'Bruce',
        last_name: 'Glassco',
        slug: 'bruce-glassco'
      }
    ],
    bookkey: '11721931',
    isbns: ['9781453273241'],
    price: '10.99',
    amazon_rank: 191923,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cb\u003eA dangerously seductive collection of tales that\u0026mdash;like the sirens themselves\u0026mdash;are impossible to resist\u003c/b\u003e\u003cBR\u003eSensuality mingles with fantasy in this sultry anthology starring fairies, sphinxes, werewolves, and other beings by masterful storytellers including Joyce Carol Oates, Neil Gaiman, Jane Yolen, Ellen Kushner, and more. \u003ci\u003eSirens and Other Daemon Lovers \u003c/i\u003efeatures a vampire who falls in love with her human prey, an updated Red Riding Hood fantasy, an unsuspecting young man who innocently joins in seductive faerie revelry, and a cat goddess made human. Alluring and charismatic, this collection from master editors Ellen Datlow and Terri Windling will stimulate more than just your imagination. This ebook features illustrated biographies of Ellen Datlow and Terri Windling, including rare photos from the editors\u0026rsquo; personal collections.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453273241-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '5/24/2016',
        date: { $date: '2016-05-24T04:00:00.000Z' },
        expiration_date: { $date: '2016-05-24T04:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 169,
        ebb_only: true
      },
      {
        readable_date: '6/3/2017',
        date: { $date: '2017-06-03T04:00:00.000Z' },
        expiration_date: { $date: '2017-06-03T04:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 233,
        ebb_only: true
      },
      {
        readable_date: '1/17/2018',
        date: { $date: '2018-01-17T05:00:00.000Z' },
        expiration_date: { $date: '2018-01-17T05:00:00.000Z' },
        original_price: '$10.99',
        promo_price: '$1.99',
        total_sales: 0,
        ebb_only: true
      }
    ],
    genre: 'Science Fiction \u0026 Fantasy'
  },
  {
    _id: { $oid: '58e6f0c4e1799d0f58a9d518' },
    primary_isbn: '9781453289013',
    title: 'A White Arrest',
    authors: [
      {
        role: 1,
        short_bio:
          'Ken Bruen (b. 1951) is one of the most prominent Irish crime writers of the last two decades. Born in Galway, he spent twenty-five years traveling the world before he began writing in the mid 1990s. As an English teacher, Bruen worked in South Africa, Japan, and South America, where he once spent a short time in a Brazilian jail. He has two long-running series: one starring a disgraced former policeman named Jack Taylor, the other a London police detective named Inspector Brant. Praised for their sharp insight into the darker side of today’s prosperous Ireland, Bruen’s novels are marked by grim atmosphere and clipped prose. Among the best known are his White Trilogy (1998–2000) and The Guards (2001), the Shamus award-winning first novel in the Jack Taylor series. Along with his wife and daughter, Bruen continues to live and work in Galway. ',
        firebrand_id: 10785878,
        display_name: 'Ken Bruen',
        first_name: 'Ken',
        last_name: 'Bruen',
        slug: 'ken-bruen'
      }
    ],
    bookkey: '12239445',
    isbns: ['9781453289013'],
    price: '9.99',
    amazon_rank: 519802,
    publisher: 'MysteriousPress.com/Open Road',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cb\u003eA pair of rough London cops looks for the high-profile arrest that will erase their sins\u003c/b\u003e\u003cBR\u003eAt sixty-two, Chief Inspector Roberts is nearly too old to be a cop, but he makes up for his age with a ferocity that the younger detectives cannot match. After four decades on the force, he has a daughter who hates him, a wife who cheats, and a bank account that grows emptier every year. At home he is a failure, but on London\u0026rsquo;s darker streets, Roberts is as serious as an earthquake. With his partner, the gleefully brutal Detective Sergeant Brant, Roberts looks for every policeman\u0026rsquo;s dream: the White Arrest, a high-profile success that makes up for all their past failures. And when a bat-wielding lunatic starts lynching drug dealers, Roberts and Brant find the publicity they were looking for. They\u0026rsquo;ll get their arrest\u0026mdash;no matter who they have to pummel through on the way. \u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781453289013-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '1/31/2016',
        date: { $date: '2016-01-31T05:00:00.000Z' },
        expiration_date: { $date: '2016-01-31T05:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 74,
        ebb_only: false
      }
    ]
  },
  {
    _id: { $oid: '59f974802ad4b3e3d0ae0f2b' },
    amazon_rank: 998013,
    active: true,
    title: 'The Practice of Deceit',
    price: '13.99',
    bookkey: '38521547',
    publisher: 'Houghton Mifflin Harcourt',
    description:
      '\u003cdiv\u003e\u003cB\u003eThis smart psychological thriller about a therapist who marries the wrong woman is \u0026ldquo;a lot of wicked fun\u0026rdquo; (Alan Cheuse, NPR\u0026rsquo;s \u003cI\u003eAll Things Considered\u003c/I\u003e).\u003c/B\u003e\u003cBR /\u003e  \u003cBR /\u003e When Eric Lavender meets the attorney Colleen O\u0026rsquo;Brien Golden, his position as one of Manhattan\u0026rsquo;s chic psychotherapists and most eligible bachelors suddenly loses its appeal. The sexy, stylish Colleen lures him to live with her and her young daughter in the exclusive suburb of Scarsdale. To his amazement, Eric is besotted and soon settles into the unexpected bliss of marriage and domesticity with their new baby and his loving stepdaughter. He even becomes a local hero when the police turn to him for help in resolving a hostage crisis.\u003cBR /\u003e  \u003cBR /\u003e But Eric\u0026rsquo;s transformation comes to an abrupt halt when the police knock on his door again\u0026mdash;this time with handcuffs. He and Colleen are caught up in an explosive conflict of interest involving their clients. When Eric discovers that Colleen has gone to extreme lengths to conceal her secret past, she retaliates with horrendous charges against him. Eric must uncover the truth before his children, his career, and his freedom are taken from him forever.\u003cBR /\u003e  \u003cBR /\u003e As she did in her bestseller Almost, Elizabeth Benedict navigates the turbulent waters of love, law, psychology, and ethics with biting wit and penetrating insight. \u003cI\u003eThe Practice of Deceit\u003c/I\u003e is a razor-sharp novel of marriage\u0026mdash;and divorce\u0026mdash;gone awry.\u003c/div\u003e',
    authors: [
      {
        role: 1,
        short_bio:
          'Elizabeth Benedict is the author of Almost, which was selected as a New York Times Notable Book, a Washington Post Book World Book of the Year, a Newsweek Best Fiction Book of the Year, and a Best Book of the Year by National Public Radio’s Fresh Air. She is also the author of three other novels, as well as The Joy of Writing Sex: A Guide for Fiction Writers. She lives in New York City.',
        firebrand_id: 12935837,
        display_name: 'Elizabeth Benedict',
        first_name: 'Elizabeth',
        last_name: 'Benedict',
        slug: 'elizabeth-benedict'
      }
    ],
    isbns: ['9780547561493'],
    primary_isbn: '9780547561493',
    primary_bisacs: ['Fiction'],
    image:
      'https://s3.amazonaws.com/orim-book-covers/9780547561493-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6ed2ce1799d0f58a9c831' },
    primary_isbn: '9781453296660',
    title: 'Sankya',
    authors: [
      {
        _id: { $oid: '58e6ed2cafbe421347a10c95' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 17940452,
        display_name: 'Zakhar Prilepin',
        first_name: 'Zakhar',
        last_name: 'Prilepin',
        slug: 'zakhar-prilepin'
      },
      {
        _id: { $oid: '58e6ed2cafbe421347a10c97' },
        role: 3,
        firebrand_role: 'translator',
        firebrand_id: 13082559,
        display_name: 'Jeff Parker',
        first_name: 'Jeff',
        last_name: 'Parker',
        slug: 'jeff-parker'
      },
      {
        _id: { $oid: '58e6ed2cafbe421347a10c98' },
        role: 3,
        firebrand_role: 'translator',
        firebrand_id: 17940642,
        display_name: 'Alina Ryabovolova',
        first_name: 'Alina',
        last_name: 'Ryabovolova',
        slug: 'alina-ryabovolova'
      },
      {
        _id: { $oid: '58e6ed2cafbe421347a10c96' },
        role: 2,
        firebrand_role: 'introduction by',
        firebrand_id: 17940622,
        display_name: 'Alexey Navalny',
        first_name: 'Alexey',
        last_name: 'Navalny',
        slug: 'alexey-navalny'
      },
      {
        _id: { $oid: '58e6ed2cafbe421347a10c99' },
        role: 3,
        firebrand_role: 'translator',
        firebrand_id: 17940632,
        display_name: 'Mariya Gusev',
        first_name: 'Mariya',
        last_name: 'Gusev',
        slug: 'mariya-gusev'
      }
    ],
    bookkey: '12414915',
    isbns: ['9781453296660'],
    price: '9.99',
    amazon_rank: 0,
    publisher: 'Dzanc Books',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003eSasha \u0026ldquo;Sankya\u0026rdquo; Tishin, and his friends are part of a generation stuck between eras. They don\u0026rsquo;t remember the Soviet Union, but they also don\u0026rsquo;t believe in the promise of opportunity for all in the corrupt, capitalistic new Russia. They belong to an extremist group that wants to build a better Russia by tearing down the existing one. Sasha, alternately thoughtful and na\u0026iuml;ve, violent and tender, dispassionate and romantic, hopeful and hopeless, is torn between the dying village of his youth and the soulless capital, where he and his friends stage rowdy protests and do battle with the police. When they go too far, Sasha finds himself testing the elemental force of the protest movement in Russia and in himself.\u003c/div\u003e',
    active: false,
    image: 'book-assets.openroadmedia.com/9781453296660-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6ecf5e1799d0f58a9c6c5' },
    primary_isbn: '9781480499454',
    title: 'The King',
    authors: [
      {
        _id: { $oid: '58e6ece2afbe421347a10845' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 16157314,
        display_name: 'John Norman',
        first_name: 'John',
        last_name: 'Norman',
        slug: 'john-norman'
      }
    ],
    bookkey: '16175723',
    isbns: ['9781480499454'],
    price: '11.99',
    amazon_rank: 427424,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003eTo recruit his legion of space barbarians, the giant gladiator Otto must win their fierce loyalty, world by world, in lethal combat against monsters, men, aliens, and the beautiful, murderous slaves\u0026mdash;while Imperial conspirators plot Otto\u0026rsquo;s assassination and an evil warlord\u0026rsquo;s brutal army prepares to unleash genocidal horror across the stars. \u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781480499454-book-cover.jpg',
    genre: 'Science Fiction \u0026 Fantasy'
  },
  {
    _id: { $oid: '58e6fbaae1799d0f58a9e5ee' },
    primary_isbn: '9781504007825',
    title: "Puccini's Ghosts",
    authors: [
      {
        role: 1,
        short_bio:
          'Morag Joss’s writing career began in 1996 when her first short story won an award in a national competition. Starting to write, she says, meant “discovering a lifelong ambition I didn’t know I had.” Joss’s first three novels comprise the Sara Selkirk Mysteries, the first of which, Funeral Music, was a finalist for the Dilys Award. Half Broken Things won the Crime Writers’ Association’s Silver Dagger Award and was later adapted into a TV film starring Penelope Wilton, and The Night Following was nominated for the Edgar Award for Best Novel. Some critics describe Joss’s work as psychological suspense and others as literary fiction. She received a PhD from Oxford Brookes University in 2014 and is now at work on her ninth novel, Good to Go.',
        firebrand_id: 21433229,
        display_name: 'Morag Joss',
        first_name: 'Morag',
        last_name: 'Joss',
        slug: 'morag-joss'
      }
    ],
    bookkey: '21537098',
    isbns: ['9781504007825'],
    price: '7.99',
    amazon_rank: 0,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eFor one woman, no matter what has happened through the decades, the music will always linger\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e Burnhead is an inconspicuous town on the Scottish coast, but for Lila Du Cann, it is the setting for an opera that will change her life forever. When Lila returns to Burnhead to bury her father, she thinks back to 1960, when she fell in love for the first time.\u003cBR /\u003e\u003cBR /\u003e Her parents are in a failing marriage. Lila\u0026rsquo;s mother, Fleur, splits time between two hobbies: arguing with her husband about life and money and retreating to her music room to listen to Puccini\u0026rsquo;s \u003cI\u003eTurandot\u003c/I\u003e. Lila\u0026rsquo;s family, however, is thrown a lifeline when her charismatic and flamboyant uncle arrives from London with a hare-brained idea: an amateur staging of \u003cI\u003eTurandot\u003c/I\u003e. With Fleur in the title role and Lila as the slave girl Liu, the production\u0026rsquo;s most intriguing casting is George\u0026rsquo;s handsome young student Joe Foscari as the tenor lead, Prince Calaf. Lila quickly falls for him and hopes that he feels the same about her.\u003cBR /\u003e\u003cBR /\u003e As opening night looms, secrets are exposed, high hopes are torn apart, and Lila\u0026rsquo;s painful coming-of-age brings with it devastating lifelong consequences.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781504007825-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6edb3e1799d0f58a9c934' },
    primary_isbn: '9781480487871',
    title: 'The Bounty Killers',
    authors: [
      {
        _id: { $oid: '58e6ed23afbe421347a10bd9' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 15829225,
        display_name: 'Paul Lederer',
        first_name: 'Paul',
        last_name: 'Lederer',
        slug: 'paul-lederer'
      }
    ],
    bookkey: '15871363',
    isbns: ['9781480487871', '9781480488052'],
    price: '4.99',
    amazon_rank: 2358596,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eOn the run from a bounty hunter, a bank robber searches for mercy\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003eBilly Gillis waits on the street as his cousin Pearly robs the bank. Fresh out of Yuma prison, Pearly has not killed anyone since his release, but with each robbery the cousins pull, the former jailbird inches closer to murder. Young Billy thought he wanted an outlaw\u0026rsquo;s life, but after a few weeks on the run with his cousin, he feels panic creeping in. At twenty years old, he is too young to die.\u003cBR /\u003e\u003cBR /\u003eA gun fires inside the bank, and Pearly races out\u0026mdash;money in his hand and a dead man on the floor behind him. On the run from a murder charge, Billy and the gang ride like mad. Pursuing them is Big Jack Corrigan, a bloodthirsty bounty hunter who puts the \u003cI\u003edead \u003c/I\u003ein \u003cI\u003edead or alive\u003c/I\u003e. After his first taste of outlaw life, Billy Gillis wants to go straight. But Big Jack Corrigan might not give him the chance.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781480487871-book-cover.jpg'
  },
  {
    _id: { $oid: '58e70af1e1799d0f58a9ef23' },
    primary_isbn: '9781504034449',
    title: 'Ill Met in Lankhmar and Ship of Shadows',
    authors: [
      {
        role: 1,
        short_bio:
          'Fritz Leiber (1910–1992) was the highly acclaimed author of numerous science fiction stories and novels, many of which were made into films. He is best known as creator of the classic Lankhmar fantasy series. Leiber has won many awards, including the coveted Hugo and Nebula, and was honored as a lifetime Grand Master by the Science Fiction Writers of America.',
        firebrand_id: 16158112,
        display_name: 'Fritz Leiber',
        first_name: 'Fritz',
        last_name: 'Leiber',
        slug: 'fritz-leiber'
      }
    ],
    bookkey: '26384391',
    isbns: ['9781504034449'],
    price: '5.99',
    amazon_rank: 407043,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eFritz Leiber\u0026rsquo;s iconic sword-and-sorcery adventurers Fafhrd and the Gray Mouser share the pages with drunkard-turned-unlikely-hero Spar in this pairing of award-winning novellas\u003c/B\u003e\u003cBR /\u003e\u003cBR /\u003e Gentleman barbarian Fafhrd, son of a northern Snow Witch, flees his family\u0026rsquo;s homeland to join a foreign lover and escape his mother\u0026rsquo;s control. Cynical thief the Gray Mouser has a mysterious past, but no one doubts his deadly skill at swordsmanship. When the two meet, each recognizes a kindred spirit in the other. No gem dealer\u0026rsquo;s stock is safe and no gambler will go unfleeced while Fafhrd and the Gray Mouser live\u0026mdash;but the deadly chain of events that forges their adventurous partnership means they are truly ill met in Lankhmar.\u003cBR /\u003e  \u003cBR /\u003e Spar has no memory of his early life, no hope for a better future, no concerns other than how to obtain his next drink. A good day is one when he can avoid the abuse of his barkeep boss aboard the \u003cI\u003eWindrush\u003c/I\u003e. But when a mysterious talking cat starts putting ideas into Spar\u0026rsquo;s head, things begin to change. There\u0026rsquo;s a larger universe out there than Spar has ever dreamed of. His destiny beckons\u0026mdash;if only he can escape the ship of shadows.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781504034449-book-cover.jpg',
    genre: 'Science Fiction \u0026 Fantasy'
  },
  {
    _id: { $oid: '58e6ef79e1799d0f58a9d1e2' },
    primary_isbn: '9781453255537',
    title: '50 Below Zero',
    authors: [
      {
        role: 1,
        short_bio:
          "Robert Munsch is a world-renowned storyteller and the author of almost 60 books for children. He was born in Pittsburgh, Pennsylvania and studied to be a Jesuit priest before deciding to work with children instead. He taught in a variety of nursery schools and daycare centers while he earned an MA in Early Childhood Education. In 1975, Munsch and his wife moved to Guelph, Ontario. Since his first picture book, Mud Puddle, was published in 1979, Munsch's award-winning books have become a staple on the bookshelves of families worldwide.",
        firebrand_id: 11304567,
        display_name: 'Robert Munsch',
        first_name: 'Robert',
        last_name: 'Munsch',
        slug: 'robert-munsch'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 11351239,
        display_name: 'Michael Martchenko',
        first_name: 'Michael',
        last_name: 'Martchenko',
        slug: 'michael-martchenko'
      }
    ],
    bookkey: '11351174',
    isbns: ['9781453255537'],
    price: '7.99',
    amazon_rank: 104528,
    publisher: 'Annick Press',
    primary_bisacs: ['Juvenile Fiction'],
    description:
      "\u003cdiv\u003eJason's dad tends to walk in his sleep and ends up in the most unlikely places. On one especially cold night it falls to Jason to find his father and keep him safe.\u003cBR\u003e\u003cBR\u003eThis fixed-layout ebook, which preserves the design and layout of the original print book, features read-along narration by the author as well as music and sound effects.\u003c/div\u003e",
    active: true,
    image: 'book-assets.openroadmedia.com/9781453255537-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '2/5/2016',
        date: { $date: '2016-02-05T05:00:00.000Z' },
        expiration_date: { $date: '2016-02-05T05:00:00.000Z' },
        original_price: '$6.99',
        promo_price: '$1.99',
        total_sales: 34,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6fd55e1799d0f58a9e8a2' },
    primary_isbn: '9781480450639',
    title: 'Part of the Furniture',
    authors: [
      {
        role: 1,
        short_bio:
          'Mary Wesley (1912–2002) was an English novelist. After she published her first novel at age seventy, her books sold more than three million copies, many of them becoming bestsellers. Her beloved books include Jumping the Queue, The Camomile Lawn, Harnessing Peacocks, The Vacillations of Poppy Carew, Not That Sort of Girl, Second Fiddle, A Sensible Life, A Dubious Legacy, An Imaginative Experience, and Part of the Furniture, as well as a memoir, Part of the Scenery.',
        firebrand_id: 13893805,
        display_name: 'Mary Wesley',
        first_name: 'Mary',
        last_name: 'Wesley',
        slug: 'mary-wesley'
      }
    ],
    bookkey: '13935216',
    isbns: ['9781480450639'],
    price: '17.99',
    amazon_rank: 168187,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cb\u003eMary Wesley\u0026rsquo;s bestselling final novel is a heartrending, beautifully told story of a woman who discovers her self-worth\u0026mdash;and finds unexpected love \u003cBR\u003e\u003cBR\u003e\u003c/b\u003eCaught in the middle of an air raid, seventeen-year-old Juno Marlowe is rescued by a frail, elegantly dressed man. His name is Evelyn Copplestone, and he offers Juno shelter and a letter of introduction to his family\u0026rsquo;s Cornwall estate. When Evelyn dies suddenly, Juno, with nowhere else to go, travels to the country to find her benefactor\u0026rsquo;s clan. There, she meets Evelyn\u0026rsquo;s father, Robert, a strong, handsome widower who gives Juno a home and a sense of purpose.\u003cBR\u003eRobert, grieving the death of his son, finds himself irresistibly drawn to Juno. And Juno, who has never known love, discovers a true soul mate in this kind and devoted man.\u003cBR\u003eMary Wesley\u0026rsquo;s last novel is a captivating, life-affirming story of loss and renewal, first love, and second chances. At once realistic and romantic, it will capture your heart and never let go.\u003c/div\u003e',
    active: true,
    image:
      'https://s3.amazonaws.com/orim-book-covers/9781480450639-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '1/11/2017',
        date: { $date: '2017-01-11T05:00:00.000Z' },
        expiration_date: { $date: '2017-01-11T05:00:00.000Z' },
        original_price: '$14.99',
        promo_price: '$2.99',
        total_sales: 194,
        ebb_only: true
      },
      {
        readable_date: '7/26/2017',
        date: { $date: '2017-07-26T04:00:00.000Z' },
        expiration_date: { $date: '2017-07-26T04:00:00.000Z' },
        original_price: '$14.99',
        promo_price: '$2.99',
        total_sales: 172,
        ebb_only: true
      },
      {
        readable_date: '1/31/2018',
        date: { $date: '2018-01-31T05:00:00.000Z' },
        expiration_date: { $date: '2018-01-31T05:00:00.000Z' },
        original_price: '$17.99',
        promo_price: '$2.99',
        total_sales: 6,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6f127e1799d0f58a9d603' },
    primary_isbn: '9781480477025',
    title: 'The Awakening',
    authors: [
      {
        _id: { $oid: '58e6f127afbe421347a14e27' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 15613835,
        display_name: 'Kate Chopin',
        first_name: 'Kate',
        last_name: 'Chopin',
        slug: 'kate-chopin'
      }
    ],
    bookkey: '15616204',
    isbns: ['9781480477025', '9781480477292'],
    price: '1.99',
    amazon_rank: 492587,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cb\u003eKate Chopin\u0026rsquo;s groundbreaking novel of early feminism set against the evocative backdrop of turn-of-the-century New Orleans\u003c/b\u003e\u003cBR\u003eEdna Pontellier is trapped. By her marriage, by her responsibilities to two young sons, by the expectations of Creole society. When she falls in love with the charming and flirtatious Robert Lebrun during a summer on the Louisiana coast, Edna awakens to a new sense of herself, and to the possibility of true independence. Mademoiselle Reisz, a locally renowned musician, offers one example of the self-sufficient, artistic existence Edna might lead. An affair with the notorious womanizer Alc\u0026eacute;e Arobin warns of the passion and danger inherent in living outside the boundaries of convention. Torn between the life that was handed to her and the one she wants to live, Edna makes a shocking decision.\u003cBR\u003eOverwhelmingly criticized in its day for its frank depictions of female sexuality, marriage, and a woman\u0026rsquo;s desire for independence, \u003ci\u003eThe Awakening \u003c/i\u003eis now celebrated as one of the earliest\u0026mdash;and most revolutionary\u0026mdash;feminist novels in American literature.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781480477025-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '5/17/2016',
        date: { $date: '2016-05-17T04:00:00.000Z' },
        expiration_date: { $date: '2016-05-17T04:00:00.000Z' },
        original_price: '$1.99',
        promo_price: '$0.00',
        total_sales: 3,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6f8c1e1799d0f58a9e26d' },
    primary_isbn: '9781480455436',
    title: "Snakes Don't Miss Their Mothers",
    authors: [
      {
        _id: { $oid: '58e6ed2cafbe421347a10c9f' },
        role: 1,
        firebrand_role: 'author',
        firebrand_id: 14243465,
        display_name: 'M. E. Kerr',
        first_name: 'M.',
        last_name: 'Kerr',
        slug: 'm-e-kerr'
      }
    ],
    bookkey: '14271311',
    isbns: ['9781480455436'],
    price: '5.99',
    amazon_rank: 1167725,
    publisher: 'Open Road Media',
    primary_bisacs: ['Juvenile Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eThe residents of Critters animal shelter are all looking for a home\u003c/B\u003e\u003cBR /\u003eThere are many creatures at Critters, an animal-rescue facility, who are waiting for a home. Irving, a twelve-year-old part\u0026ndash;German shorthaired pointer, loves to watch the soaps and has been living at Critters so long he believes it \u003cI\u003eis\u003c/I\u003e his home. Placido, on the other hand, has no problem finding new homes\u0026mdash;but with his bad habits, the cat is always back within twenty-four hours. Goldie the Labrador retriever is new at the shelter, and he\u0026rsquo;s homesick for his last owners. Marshall, the black-and-yellow king snake who never knew his mother, doesn\u0026rsquo;t think he\u0026rsquo;s lovable enough to be adopted. But eleven-year-old Walter Splinter doesn\u0026rsquo;t agree: He wants Marshall to be his.\u003cBR /\u003eFeaturing an array of endearing talking animals, \u003cI\u003eSnakes Don\u0026rsquo;t Miss Their Mothers\u003c/I\u003e is a fun, heartfelt story for every young animal lover.\u003cBR /\u003e\u003cBR /\u003eThis ebook features an illustrated personal history of M. E. Kerr including rare images from the author\u0026rsquo;s collection.\u003cBR /\u003e\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781480455436-book-cover.jpg'
  },
  {
    _id: { $oid: '58e6f670e1799d0f58a9df5a' },
    primary_isbn: '9781480481343',
    title: 'The Path to Awakening',
    authors: [
      {
        role: 1,
        short_bio:
          'Shamar Rinpoche, the 14th Shamarpa Red Hat Lama, has worked to spread the Buddhadharma throughout the world for over thirty years. For many years he taught mainly in Karma Kagyu centers established by H.H. the 16th Karmapa, Chogyam Trungpa Rinpoche, and Kalu Rinpoche, but since 2001 he has been founding his own rime (non-sectarian) centers. His Bodhi Path Buddhist Centers can now be found across Asia, Europe, and North America, and lojong is taught as the principal practice. Shamar Rinpoche is the author of Creating a Transparent Democracy.',
        firebrand_id: 15685637,
        display_name: 'Shamar Rinpoche',
        first_name: 'Shamar',
        last_name: 'Rinpoche',
        slug: 'shamar-rinpoche'
      },
      {
        role: 0,
        short_bio: '',
        firebrand_id: 15704728,
        display_name: 'Lara Braitstein',
        first_name: 'Lara',
        last_name: 'Braitstein',
        slug: 'lara-braitstein'
      }
    ],
    bookkey: '15704633',
    isbns: ['9781480481343'],
    price: '17.99',
    amazon_rank: 312977,
    publisher: 'Delphinium Books',
    primary_bisacs: ['Body, Mind \u0026 Spirit', 'Religion'],
    description:
      '\u003cdiv\u003eMind Training is a comprehensive practice that is suitable for all types of students. It contains the entire path and does not depend on a person\u0026rsquo;s background. Mind Training nurses and cultivates the Buddha Nature, that pure seed of awakening that is at the very heart of every sentient being. It has the power to transform even egotistical self-clinging into selflessness. Put into practice diligently, it is enough to lead you all the way to awakening.\u003cBR\u003eIn \u003ci\u003eThe Path to Awakening\u003c/i\u003e, Shamar Rinpoche gives his own detailed commentary on Chekawa Yeshe Dorje\u0026rsquo;s \u003ci\u003eSeven Points of Mind Training\u003c/i\u003e, a text that has been used for transformative practice in Tibetan Buddhism for close to a thousand years.\u003cBR\u003eClear, accessible, and yet profound, this book is filled with practical wisdom, philosophy, and meditation instructions.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781480481343-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '1/31/2016',
        date: { $date: '2016-01-31T05:00:00.000Z' },
        expiration_date: { $date: '2016-01-31T05:00:00.000Z' },
        original_price: '$14.99',
        promo_price: '$2.99',
        total_sales: 106,
        ebb_only: false
      },
      {
        readable_date: '1/15/2017',
        date: { $date: '2017-01-15T05:00:00.000Z' },
        expiration_date: { $date: '2017-01-15T05:00:00.000Z' },
        original_price: '$14.99',
        promo_price: '$1.99',
        total_sales: 222,
        ebb_only: true
      },
      {
        readable_date: '8/5/2017',
        date: { $date: '2017-08-05T04:00:00.000Z' },
        expiration_date: { $date: '2017-08-05T04:00:00.000Z' },
        original_price: '$14.99',
        promo_price: '$2.99',
        total_sales: 149,
        ebb_only: true
      },
      {
        readable_date: '2/3/2018',
        date: { $date: '2018-02-03T05:00:00.000Z' },
        expiration_date: { $date: '2018-02-03T05:00:00.000Z' },
        original_price: '$17.99',
        promo_price: '$2.99',
        total_sales: 9,
        ebb_only: true
      }
    ],
    amazon_reviews_iframe: {
      url:
        'https://www.amazon.com/reviews/iframe?akid=AKIAIO6ZO7NXRZIL2M4A\u0026alinkCode=xm2\u0026asin=B00HZ9Q91S\u0026atag=httpwwwopen01-20\u0026exp=2017-10-06T19%3A18%3A38Z\u0026summary=1\u0026truncate=250\u0026v=2\u0026sig=bcjAbADjyTt4YsHT%252FXZv7rW7anu4lo0b1fGw9yD5t2E%253D',
      updated: { $date: '2017-10-05T19:18:38.776Z' }
    }
  },
  {
    _id: { $oid: '590048fa30d596ed7e905fd6' },
    primary_isbn: '9781504045148',
    title: 'Snake Eyes',
    authors: [
      {
        role: 1,
        short_bio:
          'Joyce Carol Oates is the author of over seventy books encompassing novels, poetry, criticism, story collections, plays, and essays. Her novel Them won the National Book Award in Fiction in 1970. Oates has been a member of the American Academy of Arts and Letters for more than three decades and currently holds the Roger S. Berlind Distinguished Professorship at Princeton University.   ',
        firebrand_id: 22008090,
        display_name: 'Joyce Carol Oates',
        first_name: 'Joyce',
        last_name: 'Oates',
        slug: 'joyce-carol-oates'
      }
    ],
    bookkey: '32552864',
    isbns: ['9781504045148'],
    price: '9.99',
    amazon_rank: 764001,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003eA \u003c/B\u003e\u003cB\u003eNew Jersey family takes an ex-con into their suburban home in this \u0026ldquo;chilling, nightmarish\u0026rdquo; novel by a #1 \u003cI\u003eNew York Times\u003c/I\u003e\u0026ndash;bestselling author (\u003cI\u003eSan Francisco Chronicle\u003c/I\u003e).\u003c/B\u003e\u003cBR /\u003e  \u003cBR /\u003e Attorney Michael O\u0026rsquo;Meara\u0026rsquo;s dogged belief that Lee Roy Sears was innocent of murder has paid off. The lawyer has not only gotten the convicted inmate released from death row at Connecticut State Prison, but also procured an artist\u0026rsquo;s residency in Mount Orion, New Jersey, for the rehabilitated Vietnam vet upon his parole.\u003cBR /\u003e  \u003cBR /\u003e Sears is adapting nicely. He\u0026rsquo;s selling his sculptures. He\u0026rsquo;s eating well. He has ingratiated himself into Michael\u0026rsquo;s home; is eternally grateful for Michael\u0026rsquo;s benevolent motives, however mysterious their origin; and is thriving on the town\u0026rsquo;s liberal patronage and attention\u0026mdash;especially that of Michael\u0026rsquo;s adulterous wife, Gina.\u003cBR /\u003e  \u003cBR /\u003e But as Michael\u0026rsquo;s picture-perfect family begins to show signs of cracking, his suspicions about Sears become violent obsessions. Now, the dreams and secrets of two men are about to collide in a nightmare. And before long, the lines between guilt and innocence, lies and truth, trust and betrayal are bound to go up in flames.\u003cBR /\u003e  \u003cBR /\u003e\u003cI\u003eSnake Eyes\u003c/I\u003e is in an astute and suspenseful story by the National Book Award\u0026ndash;winning author of \u003cI\u003ethem\u003c/I\u003e, \u003cI\u003eWe Were the Mulvaneys\u003c/I\u003e, \u003cI\u003eThe Gravedigger\u0026rsquo;s Daughter\u003c/I\u003e, and many other acclaimed novels.\u003cBR /\u003e  \u003c/div\u003e',
    active: true,
    image: 'orim-book-covers.s3.amazonaws.com/9781504045148-book-cover.jpg',
    new: false,
    ebb_newsletter_data: [
      {
        readable_date: '7/29/2017',
        date: { $date: '2017-07-29T04:00:00.000Z' },
        expiration_date: { $date: '2017-07-29T04:00:00.000Z' },
        original_price: '$9.99',
        promo_price: '$1.99',
        total_sales: 209,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6f298e1799d0f58a9d9a5' },
    primary_isbn: '9781453246863',
    title: 'Nails',
    authors: [
      {
        role: 1,
        short_bio:
          'Peter Bowen (b. 1945) is an author best known for mystery novels set in the modern American West. When he was ten, Bowen’s family moved to Bozeman, Montana, where a paper route introduced him to the grizzled old cowboys who frequented a bar called The Oaks. Listening to their stories, some of which stretched back to the 1870s, Bowen found inspiration for his later fiction. Following time at the University of Michigan and the University of Montana, Bowen published his first novel, Yellowstone Kelly, in 1987. After two more novels featuring the real-life Western hero, Bowen published Coyote Wind (1994), which introduced Gabriel Du Pré, a mixed-race lawman living in fictional Toussaint, Montana. Bowen has written fourteen novels in the series, in which Du Pré gets tangled up in everything from cold-blooded murder to the hunt for rare fossils. Bowen continues to live and write in Livingston, Montana.',
        firebrand_id: 11138175,
        display_name: 'Peter Bowen',
        first_name: 'Peter',
        last_name: 'Bowen',
        slug: 'peter-bowen'
      }
    ],
    bookkey: '11188404',
    isbns: ['9781453246863'],
    price: '7.99',
    amazon_rank: 110558,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003e\u003cB\u003e\u0026ldquo;Fiddler, father, widower, cowboy and lover, Du Pr\u0026eacute; has the soul of a poet, the eyes of a wise man, and the heart of a comic\u0026rdquo; (\u003cI\u003eThe New York Times Book Review\u003c/I\u003e).\u003c/B\u003e\u003cBR /\u003e  \u003cBR /\u003e Gabriel Du Pr\u0026eacute;\u0026rsquo;s precocious granddaughter, Pallas, has returned from her Washington, DC, boarding school, and trouble seems to have come along for the ride. Du Pr\u0026eacute;\u0026rsquo;s girlfriend\u0026rsquo;s son, Chappie, is also back from serving in Iraq, minus one leg and one eye. As the family tries to help him adjust to civilian life, the town is invaded by a fire-and-brimstone fundamentalist sect, whose preacher is hell-bent on imposing his own beliefs on the easygoing people of Toussaint, where even the most pious prefer to keep God to themselves.\u003cBR /\u003e  \u003cBR /\u003e Du Pr\u0026eacute; is content to ignore the evangelists, until a mountain hike turns up the body of a little girl. Although he has no hard evidence, instinct tells him that the fundamentalists may be to blame. Du Pr\u0026eacute; hunts the countryside for the young girl\u0026rsquo;s killer, wishing as always that the outside world would leave his beloved Montana alone.\u003cBR /\u003e  \u003cBR /\u003e In this \u0026ldquo;admirable, highly original\u0026rdquo; series, \u0026ldquo;Du Pr\u0026eacute;, a M\u0026eacute;tis Indian, ignores the speed limit, smokes hand-rolled cigarettes and drinks whisky like it was water. He also plays fiddle like an angel, takes care of his friends and defends the weak with equal passion\u0026rdquo; (\u003cI\u003ePublishers Weekly\u003c/I\u003e).\u003cBR /\u003e\u003cBR /\u003e\u003cI\u003eNails \u003c/I\u003eis the 13th book in The Montana Mysteries Featuring Gabriel Du Pr\u0026eacute; series, but you may enjoy reading the series in any order.\u003c/div\u003e',
    active: true,
    image: 'orim-book-covers.s3.amazonaws.com/9781453246863-book-cover.jpg',
    ebb_newsletter_data: [
      {
        readable_date: '11/12/2017',
        date: { $date: '2017-11-12T05:00:00.000Z' },
        expiration_date: { $date: '2017-11-12T05:00:00.000Z' },
        original_price: '$7.99',
        promo_price: '$1.99',
        total_sales: 211,
        ebb_only: true
      }
    ]
  },
  {
    _id: { $oid: '58e6ee4ee1799d0f58a9ce2a' },
    primary_isbn: '9781497619265',
    title: 'Land of Enchantment',
    authors: [
      {
        role: 1,
        short_bio:
          'Janet Dailey, who passed away in 2013, was born Janet Haradon in 1944 in Storm Lake, Iowa. She attended secretarial school in Omaha, Nebraska, before meeting her husband, Bill. The two worked together in construction and land development until they “retired” to travel throughout the United States, inspiring Janet to write the Americana series of romances, setting a novel in every state of the Union. In 1974, Janet Dailey was the first American author to write for Harlequin. Her first novel was No Quarter Asked. She has gone on to write approximately ninety novels, twenty-one of which have appeared on the New York Times bestseller list. She won many awards and accolades for her work, appearing widely on radio and television. Today, there are over three hundred million Janet Dailey books in print in nineteen different languages, making her one of the most popular novelists in the world. For more information about Janet Dailey, visit www.janetdailey.com.',
        firebrand_id: 16156138,
        display_name: 'Janet Dailey',
        first_name: 'Janet',
        last_name: 'Dailey',
        slug: 'janet-dailey'
      }
    ],
    bookkey: '16176305',
    isbns: ['9781497619265'],
    price: '5.99',
    amazon_rank: 83824,
    publisher: 'Open Road Media',
    primary_bisacs: ['Fiction'],
    description:
      '\u003cdiv\u003eNothing seemed to be turning out right. \u0026ldquo;Stop trying to kid yourself\u0026mdash;and me,\u0026rdquo; Lije snapped. \u0026ldquo;You\u0026rsquo;re homesick for city life. But I told you before we were married how much this ranch meant to me. I\u0026rsquo;m not going to give it up, even for you.\u0026rdquo;\u003cBR /\u003e\u003cBR /\u003eDiana was hurt. She had loved Lije enough to give up her career; she had really tried hard to adapt to the ranch. And yet that apparently was not enough. Because Lije was not prepared to compromise, there were limits to his love.\u003c/div\u003e',
    active: true,
    image: 'book-assets.openroadmedia.com/9781497619265-book-cover.jpg'
  }
];

export default booksData;
