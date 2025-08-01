class WordleBot {
    constructor() {
        this.commonWords = [
            "aback", "abase", "abate", "abbey", "abbot", "abhor", "abide", "abled", "abode", "abort", "about", "above", "abuse", "abyss", "acorn", "acrid", "actor", "acute", "adage", "adapt", "adept", "admin", "admit", "adobe", "adopt", "adore", "adorn", "adult", "affix", "afire", "afoot", "afoul", "after", "again", "agape", "agate", "agent", "agile", "aging", "aglow", "agony", "agree", "ahead", "aider", "aisle", "alarm", "album", "alert", "algae", "alibi", "alien", "align", "alike", "alive", "allay", "alley", "allot", "allow", "alloy", "aloft", "alone", "along", "aloof", "aloud", "alpha", "altar", "alter", "amass", "amaze", "amber", "amble", "amend", "amiss", "amity", "among", "ample", "amply", "amuse", "angel", "anger", "angle", "angry", "angst", "anime", "ankle", "annex", "annoy", "annul", "anode", "antic", "anvil", "aorta", "apart", "aphid", "aping", "apnea", "apple", "apply", "apron", "aptly", "arbor", "ardor", "arena", "argue", "arise", "armor", "aroma", "arose", "array", "arrow", "arson", "artsy", "ascot", "ashen", "aside", "askew", "assay", "asset", "atoll", "atone", "attic", "audio", "audit", "augur", "aunty", "avail", "avert", "avian", "avoid", "await", "awake", "award", "aware", "awash", "awful", "awoke", "axial", "axiom", "axion", "azure", "bacon", "badge", "badly", "bagel", "baggy", "baker", "baler", "balmy", "banal", "banjo", "barge", "baron", "basal", "basic", "basil", "basin", "basis", "baste", "batch", "bathe", "baton", "batty", "bawdy", "bayou", "beach", "beady", "beard", "beast", "beech", "beefy", "befit", "began", "begat", "beget", "begin", "begun", "being", "belch", "belie", "belle", "belly", "below", "bench", "beret", "berry", "berth", "beset", "betel", "bevel", "bezel", "bible", "bicep", "biddy", "bigot", "bilge", "billy", "binge", "bingo", "biome", "birch", "birth", "bison", "bitty", "black", "blade", "blame", "bland", "blank", "blare", "blast", "blaze", "bleak", "bleat", "bleed", "bleep", "blend", "bless", "blimp", "blind", "blink", "bliss", "blitz", "bloat", "block", "bloke", "blond", "blood", "bloom", "blown", "bluer", "bluff", "blunt", "blurb", "blurt", "blush", "board", "boast", "bobby", "boney", "bongo", "bonus", "booby", "boost", "booth", "booty", "booze", "boozy", "borax", "borne", "bosom", "bossy", "botch", "bough", "boule", "bound", "bowel", "boxer", "brace", "braid", "brain", "brake", "brand", "brash", "brass", "brave", "bravo", "brawl", "brawn", "bread", "break", "breed", "briar", "bribe", "brick", "bride", "brief", "brine", "bring", "brink", "briny", "brisk", "broad", "broil", "broke", "brood", "brook", "broom", "broth", "brown", "brunt", "brush", "brute", "buddy", "budge", "buggy", "bugle", "build", "built", "bulge", "bulky", "bully", "bunch", "bunny", "burly", "burnt", "burst", "bused", "bushy", "butch", "butte", "buxom", "buyer", "bylaw", "cabal", "cabby", "cabin", "cable", "cacao", "cache", "cacti", "caddy", "cadet", "cagey", "cairn", "camel", "cameo", "canal", "candy", "canny", "canoe", "canon", "caper", "caput", "carat", "cargo", "carol", "carry", "carve", "caste", "catch", "cater", "catty", "caulk", "cause", "cavil", "cease", "cedar", "cello", "chafe", "chaff", "chain", "chair", "chalk", "champ", "chant", "chaos", "chard", "charm", "chart", "chase", "chasm", "cheap", "cheat", "check", "cheek", "cheer", "chess", "chest", "chick", "chide", "chief", "child", "chili", "chill", "chime", "china", "chirp", "chock", "choir", "choke", "chord", "chore", "chose", "chuck", "chump", "chunk", "churn", "chute", "cider", "cigar", "cinch", "circa", "civic", "civil", "clack", "claim", "clamp", "clang", "clank", "clash", "clasp", "class", "clean", "clear", "cleat", "cleft", "clerk", "click", "cliff", "climb", "cling", "clink", "cloak", "clock", "clone", "close", "cloth", "cloud", "clout", "clove", "clown", "cluck", "clued", "clump", "clung", "coach", "coast", "cobra", "cocoa", "colon", "color", "comet", "comfy", "comic", "comma", "conch", "condo", "conic", "copse", "coral", "corer", "corny", "couch", "cough", "could", "count", "coupe", "court", "coven", "cover", "covet", "covey", "cower", "coyly", "crack", "craft", "cramp", "crane", "crank", "crash", "crass", "crate", "crave", "crawl", "craze", "crazy", "creak", "cream", "credo", "creed", "creek", "creep", "creme", "crepe", "crept", "cress", "crest", "crick", "cried", "crier", "crime", "crimp", "crisp", "croak", "crock", "crone", "crony", "crook", "cross", "croup", "crowd", "crown", "crude", "cruel", "crumb", "crump", "crush", "crust", "crypt", "cubic", "cumin", "curio", "curly", "curry", "curse", "curve", "curvy", "cutie", "cyber", "cycle", "cynic", "daddy", "daily", "dairy", "daisy", "dally", "dance", "dandy", "datum", "daunt", "dealt", "death", "debar", "debit", "debug", "debut", "decal", "decay", "decor", "decoy", "decry", "defer", "deign", "deity", "delay", "delta", "delve", "demon", "demur", "denim", "dense", "depot", "depth", "derby", "deter", "detox", "deuce", "devil", "diary", "dicey", "digit", "dilly", "dimly", "diner", "dingo", "dingy", "diode", "dirge", "dirty", "disco", "ditch", "ditto", "ditty", "diver", "dizzy", "dodge", "dodgy", "dogma", "doing", "dolly", "donor", "donut", "dopey", "doubt", "dough", "dowdy", "dowel", "downy", "dowry", "dozen", "draft", "drain", "drake", "drama", "drank", "drape", "drawl", "drawn", "dread", "dream", "dress", "dried", "drier", "drift", "drill", "drink", "drive", "droit", "droll", "drone", "drool", "droop", "dross", "drove", "drown", "druid", "drunk", "dryer", "dryly", "duchy", "dully", "dummy", "dumpy", "dunce", "dusky", "dusty", "dutch", "duvet", "dwarf", "dwell", "dwelt", "dying", "eager", "eagle", "early", "earth", "easel", "eaten", "eater", "ebony", "eclat", "edict", "edify", "eerie", "egret", "eight", "eject", "eking", "elate", "elbow", "elder", "elect", "elegy", "elfin", "elide", "elite", "elope", "elude", "email", "embed", "ember", "emcee", "empty", "enact", "endow", "enema", "enemy", "enjoy", "ennui", "ensue", "enter", "entry", "envoy", "epoch", "epoxy", "equal", "equip", "erase", "erect", "erode", "error", "erupt", "essay", "ester", "ether", "ethic", "ethos", "etude", "evade", "event", "every", "evict", "evoke", "exact", "exalt", "excel", "exert", "exile", "exist", "expel", "extol", "extra", "exult", "eying", "fable", "facet", "faint", "fairy", "faith", "false", "fancy", "fanny", "farce", "fatal", "fatty", "fault", "fauna", "favor", "feast", "fecal", "feign", "fella", "felon", "femme", "femur", "fence", "feral", "ferry", "fetal", "fetch", "fetid", "fetus", "fever", "fewer", "fiber", "ficus", "field", "fiend", "fiery", "fifth", "fifty", "fight", "filer", "filet", "filly", "filmy", "filth", "final", "finch", "finer", "first", "fishy", "fixer", "fizzy", "fjord", "flack", "flail", "flair", "flake", "flaky", "flame", "flank", "flare", "flash", "flask", "fleck", "fleet", "flesh", "flick", "flier", "fling", "flint", "flirt", "float", "flock", "flood", "floor", "flora", "floss", "flour", "flout", "flown", "fluff", "fluid", "fluke", "flume", "flung", "flunk", "flush", "flute", "flyer", "foamy", "focal", "focus", "foggy", "foist", "folio", "folly", "foray", "force", "forge", "forgo", "forte", "forth", "forty", "forum", "found", "foyer", "frail", "frame", "frank", "fraud", "freak", "freed", "freer", "fresh", "friar", "fried", "frill", "frisk", "fritz", "frock", "frond", "front", "frost", "froth", "frown", "froze", "fruit", "fudge", "fugue", "fully", "fungi", "funky", "funny", "furor", "furry", "fussy", "fuzzy", "gaffe", "gaily", "gamer", "gamma", "gamut", "gassy", "gaudy", "gauge", "gaunt", "gauze", "gavel", "gawky", "gayer", "gayly", "gazer", "gecko", "geeky", "geese", "genie", "genre", "ghost", "ghoul", "giant", "giddy", "gipsy", "girly", "girth", "given", "giver", "gland", "glare", "glass", "glaze", "gleam", "glean", "glide", "glint", "gloat", "globe", "gloom", "glory", "gloss", "glove", "glyph", "gnash", "gnome", "godly", "going", "golem", "golly", "gonad", "goner", "goody", "gooey", "goofy", "goose", "gorge", "gouge", "gourd", "grace", "grade", "graft", "grail", "grain", "grand", "grant", "grape", "graph", "grasp", "grass", "grate", "grave", "gravy", "graze", "great", "greed", "green", "greet", "grief", "grill", "grime", "grimy", "grind", "gripe", "groan", "groin", "groom", "grope", "gross", "group", "grout", "grove", "growl", "grown", "gruel", "gruff", "grunt", "guard", "guava", "guess", "guest", "guide", "guild", "guile", "guilt", "guise", "gulch", "gully", "gumbo", "gummy", "guppy", "gusto", "gusty", "gypsy", "habit", "hairy", "halve", "handy", "happy", "hardy", "harem", "harpy", "harry", "harsh", "haste", "hasty", "hatch", "hater", "haunt", "haute", "haven", "havoc", "hazel", "heady", "heard", "heart", "heath", "heave", "heavy", "hedge", "hefty", "heist", "helix", "hello", "hence", "heron", "hilly", "hinge", "hippo", "hippy", "hitch", "hoard", "hobby", "hoist", "holly", "homer", "honey", "honor", "horde", "horny", "horse", "hotel", "hotly", "hound", "house", "hovel", "hover", "howdy", "human", "humid", "humor", "humph", "humus", "hunch", "hunky", "hurry", "husky", "hussy", "hutch", "hydro", "hyena", "hymen", "hyper", "icily", "icing", "ideal", "idiom", "idiot", "idler", "idyll", "igloo", "iliac", "image", "imbue", "impel", "imply", "inane", "inbox", "incur", "index", "inept", "inert", "infer", "ingot", "inlay", "inlet", "inner", "input", "inter", "intro", "ionic", "irate", "irony", "islet", "issue", "itchy", "ivory", "jaunt", "jazzy", "jelly", "jerky", "jetty", "jewel", "jiffy", "joint", "joist", "joker", "jolly", "joust", "judge", "juice", "juicy", "jumbo", "jumpy", "junta", "junto", "juror", "kappa", "karma", "kayak", "kebab", "khaki", "kinky", "kiosk", "kitty", "knack", "knave", "knead", "kneed", "kneel", "knelt", "knife", "knock", "knoll", "known", "koala", "krill", "label", "labor", "laden", "ladle", "lager", "lance", "lanky", "lapel", "lapse", "large", "larva", "lasso", "latch", "later", "lathe", "latte", "laugh", "layer", "leach", "leafy", "leaky", "leant", "leapt", "learn", "lease", "leash", "least", "leave", "ledge", "leech", "leery", "lefty", "legal", "leggy", "lemon", "lemur", "leper", "level", "lever", "libel", "liege", "light", "liken", "lilac", "limbo", "limit", "linen", "liner", "lingo", "lipid", "lithe", "liver", "livid", "llama", "loamy", "loath", "lobby", "local", "locus", "lodge", "lofty", "logic", "login", "loopy", "loose", "lorry", "loser", "louse", "lousy", "lover", "lower", "lowly", "loyal", "lucid", "lucky", "lumen", "lumpy", "lunar", "lunch", "lunge", "lupus", "lurch", "lurid", "lusty", "lying", "lymph", "lyric", "macaw", "macho", "macro", "madam", "madly", "mafia", "magic", "magma", "maize", "major", "maker", "mambo", "mamma", "mammy", "manga", "mange", "mango", "mangy", "mania", "manic", "manly", "manor", "maple", "march", "marry", "marsh", "mason", "masse", "match", "matey", "mauve", "maxim", "maybe", "mayor", "mealy", "meant", "meaty", "mecca", "medal", "media", "medic", "melee", "melon", "mercy", "merge", "merit", "merry", "metal", "meter", "metro", "micro", "midge", "midst", "might", "milky", "mimic", "mince", "miner", "minim", "minor", "minty", "minus", "mirth", "miser", "missy", "mocha", "modal", "model", "modem", "mogul", "moist", "molar", "moldy", "money", "month", "moody", "moose", "moral", "moron", "morph", "mossy", "motel", "motif", "motor", "motto", "moult", "mound", "mount", "mourn", "mouse", "mouth", "mover", "movie", "mower", "mucky", "mucus", "muddy", "mulch", "mummy", "munch", "mural", "murky", "mushy", "music", "musky", "musty", "myrrh", "nadir", "naive", "nanny", "nasal", "nasty", "natal", "naval", "navel", "needy", "neigh", "nerdy", "nerve", "never", "newer", "newly", "nicer", "niche", "niece", "night", "ninja", "ninny", "ninth", "noble", "nobly", "noise", "noisy", "nomad", "noose", "north", "nosey", "notch", "novel", "nudge", "nurse", "nutty", "nylon", "nymph", "oaken", "obese", "occur", "ocean", "octal", "octet", "odder", "oddly", "offal", "offer", "often", "olden", "older", "olive", "ombre", "omega", "onion", "onset", "opera", "opine", "opium", "optic", "orbit", "order", "organ", "other", "otter", "ought", "ounce", "outdo", "outer", "outgo", "ovary", "ovate", "overt", "ovine", "ovoid", "owing", "owner", "oxide", "ozone", "paddy", "pagan", "paint", "paler", "palsy", "panel", "panic", "pansy", "papal", "paper", "parer", "parka", "parry", "parse", "party", "pasta", "paste", "pasty", "patch", "patio", "patsy", "patty", "pause", "payee", "payer", "peace", "peach", "pearl", "pecan", "pedal", "penal", "pence", "penne", "penny", "perch", "peril", "perky", "pesky", "pesto", "petal", "petty", "phase", "phone", "phony", "photo", "piano", "picky", "piece", "piety", "piggy", "pilot", "pinch", "piney", "pinky", "pinto", "piper", "pique", "pitch", "pithy", "pivot", "pixel", "pixie", "pizza", "place", "plaid", "plain", "plait", "plane", "plank", "plant", "plate", "plaza", "plead", "pleat", "plied", "plier", "pluck", "plumb", "plume", "plump", "plunk", "plush", "poesy", "point", "poise", "poker", "polar", "polka", "polyp", "pooch", "poppy", "porch", "poser", "posit", "posse", "pouch", "pound", "pouty", "power", "prank", "prawn", "preen", "press", "price", "prick", "pride", "pried", "prime", "primo", "print", "prior", "prism", "privy", "prize", "probe", "prone", "prong", "proof", "prose", "proud", "prove", "prowl", "proxy", "prude", "prune", "psalm", "pubic", "pudgy", "puffy", "pulpy", "pulse", "punch", "pupil", "puppy", "puree", "purer", "purge", "purse", "pushy", "putty", "pygmy", "quack", "quail", "quake", "qualm", "quark", "quart", "quash", "quasi", "queen", "queer", "quell", "query", "quest", "queue", "quick", "quiet", "quill", "quilt", "quirk", "quite", "quota", "quote", "quoth", "rabbi", "rabid", "racer", "radar", "radii", "radio", "rainy", "raise", "rajah", "rally", "ralph", "ramen", "ranch", "randy", "range", "rapid", "rarer", "raspy", "ratio", "ratty", "raven", "rayon", "razor", "reach", "react", "ready", "realm", "rearm", "rebar", "rebel", "rebus", "rebut", "recap", "recur", "recut", "reedy", "refer", "refit", "regal", "rehab", "reign", "relax", "relay", "relic", "remit", "renal", "renew", "repay", "repel", "reply", "rerun", "reset", "resin", "retch", "retro", "retry", "reuse", "revel", "revue", "rhino", "rhyme", "rider", "ridge", "rifle", "right", "rigid", "rigor", "rinse", "ripen", "riper", "risen", "riser", "risky", "rival", "river", "rivet", "roach", "roast", "robin", "robot", "rocky", "rodeo", "roger", "rogue", "roomy", "roost", "rotor", "rouge", "rough", "round", "rouse", "route", "rover", "rowdy", "rower", "royal", "ruddy", "ruder", "rugby", "ruler", "rumba", "rumor", "rupee", "rural", "rusty", "sadly", "safer", "saint", "salad", "sally", "salon", "salsa", "salty", "salve", "salvo", "sandy", "saner", "sappy", "sassy", "satin", "satyr", "sauce", "saucy", "sauna", "saute", "savor", "savoy", "savvy", "scald", "scale", "scalp", "scaly", "scamp", "scant", "scare", "scarf", "scary", "scene", "scent", "scion", "scoff", "scold", "scone", "scoop", "scope", "score", "scorn", "scour", "scout", "scowl", "scram", "scrap", "scree", "screw", "scrub", "scrum", "scuba", "sedan", "seedy", "segue", "seize", "semen", "sense", "sepia", "serif", "serum", "serve", "setup", "seven", "sever", "sewer", "shack", "shade", "shady", "shaft", "shake", "shaky", "shale", "shall", "shalt", "shame", "shank", "shape", "shard", "share", "shark", "sharp", "shave", "shawl", "shear", "sheen", "sheep", "sheer", "sheet", "sheik", "shelf", "shell", "shied", "shift", "shine", "shiny", "shire", "shirk", "shirt", "shoal", "shock", "shone", "shook", "shoot", "shore", "shorn", "short", "shout", "shove", "shown", "showy", "shrew", "shrub", "shrug", "shuck", "shunt", "shush", "shyly", "siege", "sieve", "sight", "sigma", "silky", "silly", "since", "sinew", "singe", "siren", "sissy", "sixth", "sixty", "skate", "skier", "skiff", "skill", "skimp", "skirt", "skulk", "skull", "skunk", "slack", "slain", "slang", "slant", "slash", "slate", "sleek", "sleep", "sleet", "slept", "slice", "slick", "slide", "slime", "slimy", "sling", "slink", "sloop", "slope", "slosh", "sloth", "slump", "slung", "slunk", "slurp", "slush", "slyly", "smack", "small", "smart", "smash", "smear", "smell", "smelt", "smile", "smirk", "smite", "smith", "smock", "smoke", "smoky", "smote", "snack", "snail", "snake", "snaky", "snare", "snarl", "sneak", "sneer", "snide", "sniff", "snipe", "snoop", "snore", "snort", "snout", "snowy", "snuck", "snuff", "soapy", "sober", "soggy", "solar", "solid", "solve", "sonar", "sonic", "sooth", "sooty", "sorry", "sound", "south", "sower", "space", "spade", "spank", "spare", "spark", "spasm", "spawn", "speak", "spear", "speck", "speed", "spell", "spelt", "spend", "spent", "sperm", "spice", "spicy", "spied", "spiel", "spike", "spiky", "spill", "spilt", "spine", "spiny", "spire", "spite", "splat", "split", "spoil", "spoke", "spoof", "spook", "spool", "spoon", "spore", "sport", "spout", "spray", "spree", "sprig", "spunk", "spurn", "spurt", "squad", "squat", "squib", "stack", "staff", "stage", "staid", "stain", "stair", "stake", "stale", "stalk", "stall", "stamp", "stand", "stank", "stare", "stark", "start", "stash", "state", "stave", "stead", "steak", "steal", "steam", "steed", "steel", "steep", "steer", "stein", "stern", "stick", "stiff", "still", "stilt", "sting", "stink", "stint", "stock", "stoic", "stoke", "stole", "stomp", "stone", "stony", "stood", "stool", "stoop", "store", "stork", "storm", "story", "stout", "stove", "strap", "straw", "stray", "strip", "strut", "stuck", "study", "stuff", "stump", "stung", "stunk", "stunt", "style", "suave", "sugar", "suing", "suite", "sulky", "sully", "sumac", "sunny", "super", "surer", "surge", "surly", "sushi", "swami", "swamp", "swarm", "swash", "swath", "swear", "sweat", "sweep", "sweet", "swell", "swept", "swift", "swill", "swine", "swing", "swirl", "swish", "swoon", "swoop", "sword", "swore", "sworn", "swung", "synod", "syrup", "tabby", "table", "taboo", "tacit", "tacky", "taffy", "taint", "taken", "taker", "tally", "talon", "tamer", "tango", "tangy", "taper", "tapir", "tardy", "tarot", "taste", "tasty", "tatty", "taunt", "tawny", "teach", "teary", "tease", "teddy", "teeth", "tempo", "tenet", "tenor", "tense", "tenth", "tepee", "tepid", "terra", "terse", "testy", "thank", "theft", "their", "theme", "there", "these", "theta", "thick", "thief", "thigh", "thing", "think", "third", "thong", "thorn", "those", "three", "threw", "throb", "throw", "thrum", "thumb", "thump", "thyme", "tiara", "tibia", "tidal", "tiger", "tight", "tilde", "timer", "timid", "tipsy", "titan", "tithe", "title", "toast", "today", "toddy", "token", "tonal", "tonga", "tonic", "tooth", "topaz", "topic", "torch", "torso", "torus", "total", "totem", "touch", "tough", "towel", "tower", "toxic", "toxin", "trace", "track", "tract", "trade", "trail", "train", "trait", "tramp", "trash", "trawl", "tread", "treat", "trend", "triad", "trial", "tribe", "trice", "trick", "tried", "tripe", "trite", "troll", "troop", "trope", "trout", "trove", "truce", "truck", "truer", "truly", "trump", "trunk", "truss", "trust", "truth", "tryst", "tubal", "tuber", "tulip", "tulle", "tumor", "tunic", "turbo", "tutor", "twang", "tweak", "tweed", "tweet", "twice", "twine", "twirl", "twist", "twixt", "tying", "udder", "ulcer", "ultra", "umbra", "uncle", "uncut", "under", "undid", "undue", "unfed", "unfit", "unify", "union", "unite", "unity", "unlit", "unmet", "unset", "untie", "until", "unwed", "unzip", "upper", "upset", "urban", "urine", "usage", "usher", "using", "usual", "usurp", "utile", "utter", "vague", "valet", "valid", "valor", "value", "valve", "vapid", "vapor", "vault", "vaunt", "vegan", "venom", "venue", "verge", "verse", "verso", "verve", "vicar", "video", "vigil", "vigor", "villa", "vinyl", "viola", "viper", "viral", "virus", "visit", "visor", "vista", "vital", "vivid", "vixen", "vocal", "vodka", "vogue", "voice", "voila", "vomit", "voter", "vouch", "vowel", "vying", "wacky", "wafer", "wager", "wagon", "waist", "waive", "waltz", "warty", "waste", "watch", "water", "waver", "waxen", "weary", "weave", "wedge", "weedy", "weigh", "weird", "welch", "welsh", "whack", "whale", "wharf", "wheat", "wheel", "whelp", "where", "which", "whiff", "while", "whine", "whiny", "whirl", "whisk", "white", "whole", "whoop", "whose", "widen", "wider", "widow", "width", "wield", "wight", "willy", "wimpy", "wince", "winch", "windy", "wiser", "wispy", "witch", "witty", "woken", "woman", "women", "woody", "wooer", "wooly", "woozy", "wordy", "world", "worry", "worse", "worst", "worth", "would", "wound", "woven", "wrack", "wrath", "wreak", "wreck", "wrest", "wring", "wrist", "write", "wrong", "wrote", "wrung", "wryly", "yacht", "yearn", "yeast", "yield", "young", "youth", "zebra", "zesty", "zonal"
        ];
        this.possibleWords = [...this.commonWords];
        this.knownInfo = {
            greenLetters: {},      // position -> letter
            yellowLetters: [],     // letters that are in word but wrong position
            blackLetters: [],      // letters not in word
            wrongPositions: {}     // letter -> [positions where it's not]
        };
    }

    reset() {
        this.possibleWords = [...this.commonWords];
        this.knownInfo = {
            greenLetters: {},      // position -> letter
            yellowLetters: [],     // letters that are in word but wrong position
            blackLetters: [],      // letters not in word
            wrongPositions: {}     // letter -> [positions where it's not]
        };
        this.log(`Bot reset. Starting with ${this.possibleWords.length} possible words.`);
    }

    log(message) {
        console.log(message);
        // Allow override for testing/debugging (check if running in browser with debugLog)
        if (typeof window !== 'undefined' && typeof debugLog === 'function') {
            debugLog(message);
        }
    }

    getSmartWord(attemptNum) {
        // Excellent starter with 4 vowels
        if (attemptNum === 1) {
            return "ADIEU";
        }

        // After first guess, use actual intelligence
        return this.getBestWord();
    }

    getBestWord() {
        this.log(`getBestWord called with ${this.possibleWords.length} possible words: ${this.possibleWords.slice(0, 10).join(", ")}`);
        
        if (this.possibleWords.length === 0) {
            this.log("ERROR: No possible words left! Using fallback.");
            // If we have no possibilities, try a word that uses common letters we haven't tested
            const untested = this.getUntestedCommonWords();
            const fallback = untested.length > 0 ? untested[0] : "HOUSE";
            this.log(`Fallback word: ${fallback}`);
            return fallback;
        }
        if (this.possibleWords.length === 1) {
            this.log(`Only one word left: ${this.possibleWords[0]}`);
            return this.possibleWords[0];
        }

        // If we have very few possibilities, pick the most likely one
        if (this.possibleWords.length <= 3) {
            const best = this.getBestFromCandidates(this.possibleWords);
            this.log(`Picking best from ${this.possibleWords.length} candidates: ${best}`);
            return best;
        }

        // Strategy decision: should we guess a possible answer or get more information?
        
        // If we have a reasonable number of candidates, try to guess the answer
        if (this.possibleWords.length <= 8) {
            const best = this.getBestFromCandidates(this.possibleWords);
            this.log(`Smart guess from ${this.possibleWords.length} options: ${best}`);
            return best;
        }

        // If we have too many possibilities, find a word that will eliminate the most
        const informative = this.getMostInformativeWord();
        this.log(`Elimination word from ${this.possibleWords.length} possibilities: ${informative}`);
        return informative;
    }

    getUntestedCommonWords() {
        const testedLetters = new Set([
            ...this.knownInfo.blackLetters,
            ...this.knownInfo.yellowLetters,
            ...Object.values(this.knownInfo.greenLetters)
        ]);
        
        const commonWords = ["STORY", "LYNCH", "CHUMP", "WRONG", "CLOTH", "BRING"];
        return commonWords.filter(word => {
            return word.split('').some(letter => !testedLetters.has(letter)) &&
                   this.isWordConsistentWithKnowledge(word);
        });
    }

    getBestFromCandidates(candidates) {
        // Pick the candidate word with highest score based on letter frequency
        let bestWord = candidates[0];
        let bestScore = this.scoreWord(bestWord);

        for (const word of candidates) {
            const score = this.scoreWord(word);
            if (score > bestScore) {
                bestScore = score;
                bestWord = word;
            }
        }

        return bestWord;
    }

    scoreWord(word) {
        // Score based on common English letter frequencies
        const frequencies = {
            'e': 12.7, 'a': 8.2, 'r': 6.0, 'i': 7.0, 'o': 7.5, 't': 9.1,
            'n': 6.7, 's': 6.3, 'l': 4.0, 'c': 2.8, 'u': 2.8, 'd': 4.3,
            'p': 1.9, 'm': 2.4, 'h': 6.1, 'g': 2.0, 'b': 1.3, 'f': 2.2,
            'y': 2.0, 'w': 2.4, 'k': 0.8, 'v': 1.0, 'x': 0.15, 'z': 0.07,
            'j': 0.15, 'q': 0.10
        };

        let score = 0;
        const uniqueLetters = new Set(word);
        
        // Bonus for unique letters (avoid repeated letters)
        score += uniqueLetters.size * 10;

        // Add frequency scores
        for (const letter of uniqueLetters) {
            score += frequencies[letter] || 1;
        }

        return score;
    }

    getMostInformativeWord() {
        // Find a word that will eliminate the most possibilities
        // This could be from our possible words or from a strategic word list
        
        const strategicWords = [
            "STORY", "LYNCH", "CHUMP", "FLING", "WRONG", 
            "CLOTH", "BRING", "SWORN", "PLUMB", "GRIND"
        ];

        let bestWord = this.possibleWords[0];
        let bestElimination = 0;

        // Test strategic words first
        for (const word of strategicWords) {
            if (this.isWordConsistentWithKnowledge(word)) {
                const eliminationPower = this.calculateEliminationPower(word);
                if (eliminationPower > bestElimination) {
                    bestElimination = eliminationPower;
                    bestWord = word;
                }
            }
        }

        // Also test top candidates from possible words
        const topCandidates = this.possibleWords.slice(0, 5);
        for (const word of topCandidates) {
            const eliminationPower = this.calculateEliminationPower(word);
            if (eliminationPower > bestElimination) {
                bestElimination = eliminationPower;
                bestWord = word;
            }
        }

        return bestWord;
    }

    calculateEliminationPower(word) {
        // Estimate how many words this guess would eliminate on average
        const uniqueLetters = new Set(word);
        const letterCounts = this.getLetterCounts();
        
        let eliminationPower = 0;
        
        for (const letter of uniqueLetters) {
            // Letters that appear in many remaining words have high elimination potential
            eliminationPower += letterCounts[letter] || 0;
        }

        // Bonus for letters we haven't tested yet
        for (const letter of uniqueLetters) {
            if (!this.knownInfo.blackLetters.includes(letter) && 
                !this.knownInfo.yellowLetters.includes(letter) &&
                !Object.values(this.knownInfo.greenLetters).includes(letter)) {
                eliminationPower += 5; // Bonus for untested letters
            }
        }

        return eliminationPower;
    }

    getLetterCounts() {
        const counts = {};
        for (const word of this.possibleWords) {
            for (const letter of word) {
                counts[letter] = (counts[letter] || 0) + 1;
            }
        }
        return counts;
    }

    isWordConsistentWithKnowledge(word) {
        // Check if word conflicts with what we know

        // Check green letters (must be in correct positions)
        for (const [pos, letter] of Object.entries(this.knownInfo.greenLetters)) {
            if (word[parseInt(pos) - 1] !== letter) {
                return false;
            }
        }

        // Check yellow letters (must be in word but not in known wrong positions)
        for (const letter of this.knownInfo.yellowLetters) {
            if (!word.includes(letter)) {
                return false;
            }
            
            // Also check that the letter is not in any of its known wrong positions
            if (this.knownInfo.wrongPositions && this.knownInfo.wrongPositions[letter]) {
                for (const wrongPos of this.knownInfo.wrongPositions[letter]) {
                    if (word[wrongPos - 1] === letter) {
                        return false;
                    }
                }
            }
        }

        // Check black letters (must not be in word)
        for (const letter of this.knownInfo.blackLetters) {
            if (word.includes(letter)) {
                return false;
            }
        }

        return true;
    }

    simulateGuess(guess, target) {
        const result = ['B', 'B', 'B', 'B', 'B'];
        const targetChars = target.split('');

        // First pass: mark greens
        for (let i = 0; i < 5; i++) {
            if (guess[i] === target[i]) {
                result[i] = 'G';
                targetChars[i] = null;
            }
        }

        // Second pass: mark yellows
        for (let i = 0; i < 5; i++) {
            if (result[i] === 'B' && targetChars.includes(guess[i])) {
                result[i] = 'Y';
                targetChars[targetChars.indexOf(guess[i])] = null;
            }
        }

        return result.join('');
    }

    updateKnowledge(guess, result) {
        // Clear previous yellow/black tracking for this guess
        for (let i = 0; i < 5; i++) {
            const letter = guess[i];
            const resultChar = result[i];

            if (resultChar === 'G') {
                // Green: exact position match
                this.knownInfo.greenLetters[i + 1] = letter;

                // Remove from yellow list if it was there
                const yellowIndex = this.knownInfo.yellowLetters.indexOf(letter);
                if (yellowIndex > -1) {
                    this.knownInfo.yellowLetters.splice(yellowIndex, 1);
                }

            } else if (resultChar === 'Y') {
                // Yellow: letter is in word but wrong position
                if (!this.knownInfo.yellowLetters.includes(letter)) {
                    this.knownInfo.yellowLetters.push(letter);
                }

                // Track wrong positions for this letter
                if (!this.knownInfo.wrongPositions) {
                    this.knownInfo.wrongPositions = {};
                }
                if (!this.knownInfo.wrongPositions[letter]) {
                    this.knownInfo.wrongPositions[letter] = [];
                }
                if (!this.knownInfo.wrongPositions[letter].includes(i + 1)) {
                    this.knownInfo.wrongPositions[letter].push(i + 1);
                }

            } else if (resultChar === 'B') {
                // Black/Gray: letter not in word (unless it appears as green/yellow elsewhere)
                const appearsElsewhere = result.split('').some((r, idx) =>
                    idx !== i && guess[idx] === letter && (r === 'G' || r === 'Y')
                );

                if (!appearsElsewhere && !this.knownInfo.blackLetters.includes(letter)) {
                    this.knownInfo.blackLetters.push(letter);
                }
            }
        }

        // Debug: Let's see what's happening to our word list
        this.log("=== PROCESSING GUESS ===");
        this.log("Guess: " + guess + " Result: " + result);

        // Update possible words based on this new information
        this.filterPossibleWords(guess, result);
    }

    filterPossibleWords(guess, result) {
        const beforeCount = this.possibleWords.length;
        this.log(`Starting filter with ${beforeCount} words`);
        this.log(`Applying constraints from guess: ${guess} -> ${result}`);
        
        // Show what constraints we're applying
        this.log(`Active constraints:`);
        this.log(`  Green letters: ${JSON.stringify(this.knownInfo.greenLetters)}`);
        this.log(`  Yellow letters: ${JSON.stringify(this.knownInfo.yellowLetters)}`);
        this.log(`  Black letters: ${JSON.stringify(this.knownInfo.blackLetters)}`);
        this.log(`  Wrong positions: ${JSON.stringify(this.knownInfo.wrongPositions)}`);
        
        // First filter based on this specific guess/result
        const beforeFirstFilter = this.possibleWords.length;
        this.possibleWords = this.possibleWords.filter(word => {
            return this.isWordPossible(word, guess, result);
        });
        this.log(`After guess-specific filter: ${beforeFirstFilter} -> ${this.possibleWords.length}`);
        
        // Then apply all accumulated knowledge constraints
        const beforeSecondFilter = this.possibleWords.length;
        this.possibleWords = this.possibleWords.filter(word => {
            return this.isWordConsistentWithKnowledge(word);
        });
        this.log(`After accumulated knowledge filter: ${beforeSecondFilter} -> ${this.possibleWords.length}`);
        
        this.log(`Remaining words (first 10): ${this.possibleWords.slice(0, 10).join(", ")}`);
    }

    isWordPossible(word, guess, result) {
        // Check each position against the result
        for (let i = 0; i < 5; i++) {
            const guessChar = guess[i];
            const resultChar = result[i];
            const wordChar = word[i];

            if (resultChar === 'G') {
                // Green: must match exactly
                if (wordChar !== guessChar) {
                    return false;
                }
            } else if (resultChar === 'Y') {
                // Yellow: letter must be in word but not in this position
                if (!word.includes(guessChar)) {
                    return false;
                }
                if (wordChar === guessChar) {
                    return false; // Can't be in same position
                }
            } else if (resultChar === 'B') {
                // Black: letter should not be in word
                // UNLESS it appears as green or yellow elsewhere in the same guess
                const isGreenElsewhere = result.split('').some((r, idx) =>
                    r === 'G' && guess[idx] === guessChar && idx !== i
                );
                const isYellowElsewhere = result.split('').some((r, idx) =>
                    r === 'Y' && guess[idx] === guessChar && idx !== i
                );

                if (!isGreenElsewhere && !isYellowElsewhere) {
                    // Letter is completely not in the word
                    if (word.includes(guessChar)) {
                        return false;
                    }
                } else {
                    // Letter is in word but not at this position
                    if (wordChar === guessChar) {
                        return false;
                    }
                }
            }
        }

        return true; // Word is consistent with this specific guess/result
    }
} 