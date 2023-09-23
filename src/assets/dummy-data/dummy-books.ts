const testData = [
  {
    title: "Building a Second Brain",
    authors: ["Tiago Forte"],
    id: "/books/OL37875109M",
    cover: {
      small:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      medium:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      large:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
    },
  },
  {
    title: "How to Take Smart Notes",
    authors: ["Sönke Ahrens"],
    id: "/books/OL37777396M",
    cover: {
      small:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      medium:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      large:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
    },
  },
  {
    title: "Atomic Habits",
    authors: ["James Clear", "Àlex Guàrdia i Berdiell"],
    id: "/books/OL32336498M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/12886417-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/12886417-M.jpg",
      large: "https://covers.openlibrary.org/b/id/12886417-L.jpg",
    },
  },
  {
    title: "Scaling People",
    authors: ["Claire Hughes Johnson"],
    id: "/books/OL37674315M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/13555875-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/13555875-M.jpg",
      large: "https://covers.openlibrary.org/b/id/13555875-L.jpg",
    },
  },
  {
    title: "The Psychology of Money",
    authors: ["Morgan Housel"],
    id: "/books/OL29412746M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/12824425-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/12824425-M.jpg",
      large: "https://covers.openlibrary.org/b/id/12824425-L.jpg",
    },
  },
  {
    title: "Getting Things Done",
    authors: ["David Allen"],
    id: "/books/OL26211544M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/7892515-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/7892515-M.jpg",
      large: "https://covers.openlibrary.org/b/id/7892515-L.jpg",
    },
  },
  {
    title: "Getting Things Done Workbook",
    authors: ["David Allen"],
    id: "/books/OL28920014M",
    cover: {
      small:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      medium:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      large:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
    },
  },
  {
    title: "Getting Things Done",
    authors: ["David Allen"],
    id: "/books/OL28562873M",
    cover: {
      small:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      medium:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      large:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
    },
  },
  {
    title: "The courage to be disliked",
    authors: ["Ichirō Kishimi", "Fumitake Koga"],
    id: "/books/OL26957069M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/10873626-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/10873626-M.jpg",
      large: "https://covers.openlibrary.org/b/id/10873626-L.jpg",
    },
  },
  {
    title: "Essentialism",
    authors: ["Greg McKeown"],
    id: "/books/OL31985130M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/10658806-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/10658806-M.jpg",
      large: "https://covers.openlibrary.org/b/id/10658806-L.jpg",
    },
  },
  {
    title: "The Metaverse",
    authors: ["Matthew Ball"],
    id: "/books/OL35858081M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/12873368-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/12873368-M.jpg",
      large: "https://covers.openlibrary.org/b/id/12873368-L.jpg",
    },
  },
  {
    title: "Surrounded by Idiots",
    authors: ["Thomas Erikson"],
    id: "/books/OL28207106M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/10142008-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/10142008-M.jpg",
      large: "https://covers.openlibrary.org/b/id/10142008-L.jpg",
    },
  },
  {
    title: "Make time",
    authors: ["Jake Knapp"],
    id: "/books/OL26964687M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/14179816-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/14179816-M.jpg",
      large: "https://covers.openlibrary.org/b/id/14179816-L.jpg",
    },
  },
  {
    title: "Thinking in systems : a primer",
    authors: ["Donella H. Meadows"],
    id: "/books/OL26445570M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/8166043-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/8166043-M.jpg",
      large: "https://covers.openlibrary.org/b/id/8166043-L.jpg",
    },
  },
  {
    title: "The Almanack of Naval Ravikant",
    authors: ["Eric Jorgenson"],
    id: "/books/OL30319349M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/10449931-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/10449931-M.jpg",
      large: "https://covers.openlibrary.org/b/id/10449931-L.jpg",
    },
  },
  {
    title: "Mind Mapping",
    authors: ["Kam Knight"],
    id: "/books/OL32146961M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/10813163-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/10813163-M.jpg",
      large: "https://covers.openlibrary.org/b/id/10813163-L.jpg",
    },
  },
  {
    title: "Making Work Visible, Second Edition",
    authors: ["Dominica DeGrandis"],
    id: "/books/OL35036498M",
    cover: {
      small:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      medium:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      large:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
    },
  },
  {
    title: "Make It Stick",
    authors: ["Peter C. Brown", "Henry L. Roediger", "Mark A. McDaniel"],
    id: "/books/OL26459567M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/8188891-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/8188891-M.jpg",
      large: "https://covers.openlibrary.org/b/id/8188891-L.jpg",
    },
  },
  {
    title: "Ultralearning",
    authors: ["Scott H. Young"],
    id: "/books/OL28223712M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/10156205-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/10156205-M.jpg",
      large: "https://covers.openlibrary.org/b/id/10156205-L.jpg",
    },
  },
  {
    title: "Automate Your Busywork",
    authors: ["Tank"],
    id: "/books/OL37999961M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/14328384-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/14328384-M.jpg",
      large: "https://covers.openlibrary.org/b/id/14328384-L.jpg",
    },
  },
  {
    title: "Pragmatic thinking and learning",
    authors: ["Andy Hunt"],
    id: "/books/OL24804392M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/7306727-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/7306727-M.jpg",
      large: "https://covers.openlibrary.org/b/id/7306727-L.jpg",
    },
  },
  {
    title: "The Second in Command",
    authors: ["Cameron Herold"],
    id: "/books/OL47320744M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/13852723-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/13852723-M.jpg",
      large: "https://covers.openlibrary.org/b/id/13852723-L.jpg",
    },
  },
  {
    title: "The coaching habit",
    authors: ["Michael Bungay Stanier"],
    id: "/books/OL27218477M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/12515817-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/12515817-M.jpg",
      large: "https://covers.openlibrary.org/b/id/12515817-L.jpg",
    },
  },
  {
    title: "Age of Invisible Machines",
    authors: ["Robb Wilson"],
    id: "/books/OL38327704M",
    cover: {
      small:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      medium:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      large:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
    },
  },
  {
    title: "The Art of Thinking Clearly",
    authors: ["Rolf Dobelli"],
    id: "/books/OL28283675M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/10209002-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/10209002-M.jpg",
      large: "https://covers.openlibrary.org/b/id/10209002-L.jpg",
    },
  },
  {
    title: "Dopamine Nation",
    authors: ["Dr. Anna Lembke"],
    id: "/books/OL39796352M",
    cover: {
      small:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      medium:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      large:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
    },
  },
  {
    title: "How to Begin",
    authors: ["Michael Bungay Stanier"],
    id: "/books/OL34191809M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/12997367-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/12997367-M.jpg",
      large: "https://covers.openlibrary.org/b/id/12997367-L.jpg",
    },
  },
  {
    title: "How to Measure Anything",
    authors: ["Douglas W. Hubbard"],
    id: "/books/OL28004165M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/9388439-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/9388439-M.jpg",
      large: "https://covers.openlibrary.org/b/id/9388439-L.jpg",
    },
  },
  {
    title: "The Laws of human nature",
    authors: ["Robert Greene"],
    id: "/books/OL26974419M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/12786526-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/12786526-M.jpg",
      large: "https://covers.openlibrary.org/b/id/12786526-L.jpg",
    },
  },
  {
    title: "Hyperfocus",
    authors: ["Chris Bailey"],
    id: "/books/OL32333817M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/10956018-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/10956018-M.jpg",
      large: "https://covers.openlibrary.org/b/id/10956018-L.jpg",
    },
  },
  {
    title: "Attention Span",
    authors: ["Gloria Mark"],
    id: "/books/OL38128279M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/13151982-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/13151982-M.jpg",
      large: "https://covers.openlibrary.org/b/id/13151982-L.jpg",
    },
  },
  {
    title: "Four Thousand Weeks",
    authors: ["Oliver Burkeman"],
    id: "/books/OL32962994M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/11990973-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/11990973-M.jpg",
      large: "https://covers.openlibrary.org/b/id/11990973-L.jpg",
    },
  },
  {
    title: "Art of Impossible",
    authors: ["Steven Kotler"],
    id: "/books/OL38122140M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/13268984-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/13268984-M.jpg",
      large: "https://covers.openlibrary.org/b/id/13268984-L.jpg",
    },
  },
  {
    title: "15 secrets successful people know about time management",
    authors: ["Kevin Kruse"],
    id: "/books/OL27227604M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/12804794-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/12804794-M.jpg",
      large: "https://covers.openlibrary.org/b/id/12804794-L.jpg",
    },
  },
  {
    title: "Actionable Gamification",
    authors: ["Yu-kai Chou"],
    id: "/books/OL34312961M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/12031229-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/12031229-M.jpg",
      large: "https://covers.openlibrary.org/b/id/12031229-L.jpg",
    },
  },
  {
    title: "Speed Reading",
    authors: ["Kam Knight"],
    id: "/books/OL40223181M",
    cover: {
      small:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      medium:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      large:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
    },
  },
  {
    title: "Staff Engineer's Path",
    authors: ["Tanya Reilly"],
    id: "/books/OL38407145M",
    cover: {
      small:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      medium:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      large:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
    },
  },
  {
    title: "Communication Book",
    authors: ["Mikael Krogerus", "Roman Tschappeler"],
    id: "/books/OL29442353M",
    cover: {
      small:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      medium:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      large:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
    },
  },
  {
    title: "How to Win Friends and Influence People",
    authors: ["Dale Carnegie"],
    id: "/books/OL47326740M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/13899721-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/13899721-M.jpg",
      large: "https://covers.openlibrary.org/b/id/13899721-L.jpg",
    },
  },
  {
    title: "Principles",
    authors: ["Ray Dalio"],
    id: "/books/OL38122838M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/13166495-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/13166495-M.jpg",
      large: "https://covers.openlibrary.org/b/id/13166495-L.jpg",
    },
  },
  {
    title: "Toyota Way, Second Edition",
    authors: ["Jeffrey K. Liker"],
    id: "/books/OL30013923M",
    cover: {
      small:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      medium:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      large:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
    },
  },
  {
    title: "Operating Manual",
    authors: ["Michael Bungay Stanier"],
    id: "/books/OL38122759M",
    cover: {
      small:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      medium:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      large:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
    },
  },
  {
    title: "Rest",
    authors: ["Alex Soojung-Kim Pang"],
    id: "/books/OL30405525M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/10453387-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/10453387-M.jpg",
      large: "https://covers.openlibrary.org/b/id/10453387-L.jpg",
    },
  },
  {
    title: "Joie",
    authors: ["Ajiri Aki"],
    id: "/books/OL39383221M",
    cover: {
      small:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      medium:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      large:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
    },
  },
  {
    title: "The Workshop Survival Guide",
    authors: ["Rob Fitzpatrick", "Devin Hunt"],
    id: "/books/OL30095158M",
    cover: {
      small: "https://covers.openlibrary.org/b/id/10423207-S.jpg",
      medium: "https://covers.openlibrary.org/b/id/10423207-M.jpg",
      large: "https://covers.openlibrary.org/b/id/10423207-L.jpg",
    },
  },
  {
    title: "Get the Respect You Deserve",
    authors: ["Veronica Anderson"],
    id: "/books/OL46612414M",
    cover: {
      small:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      medium:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
      large:
        "chrome-extension://aaipgmahajkhglkdbdpgpelkimhobdga/empty-cover.svg",
    },
  },
];

export default testData