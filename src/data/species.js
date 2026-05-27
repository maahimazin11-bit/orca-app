export const kingdoms = [
  { id: 'animal', name: 'Animal Kingdom', icon: '🐠' },
  { id: 'plant', name: 'Plant Kingdom', icon: '🌿' },
]

export const categories = {
  animal: [
    { id: 'fish', name: 'Fish', icon: 'fish', count: 8 },
    { id: 'sharks-rays', name: 'Sharks & Rays', icon: 'shark', count: 7 },
    { id: 'marine-mammals', name: 'Marine Mammals', icon: 'whale', count: 6 },
    { id: 'reptiles', name: 'Reptiles', icon: 'turtle', count: 5 },
    { id: 'invertebrates', name: 'Invertebrates', icon: 'jellyfish', count: 7 },
    { id: 'coral-reef', name: 'Coral & Reef', icon: 'coral', count: 5 },
    { id: 'deep-sea', name: 'Deep Sea', icon: 'deepsea', count: 6 },
  ],
  plant: [
    { id: 'seagrass', name: 'Seagrasses', icon: 'seagrass', count: 1 },
    { id: 'mangroves', name: 'Mangroves', icon: 'mangrove', count: 1 },
    { id: 'algae', name: 'Algae & Kelp', icon: 'algae', count: 4 },
  ],
}

export const species = {
  fish: [
    { id: 'clownfish', common: 'Clownfish', scientific: 'Amphiprioninae', teaser: 'The reef\'s most famous resident, forever bound to its anemone.', imageQuery: 'clownfish anemone reef' },
    { id: 'blue-tang', common: 'Blue Tang', scientific: 'Paracanthurus hepatus', teaser: 'Vivid blue surgeonfish with a hidden scalpel at its tail.' },
    { id: 'lionfish', common: 'Lionfish', scientific: 'Pterois', teaser: 'Spectacular and venomous — a reef predator wrapped in warning colours.' },
    { id: 'bumphead-parrotfish', common: 'Bumphead Parrotfish', scientific: 'Bolbometopon muricatum', teaser: 'It literally eats coral and poops out white sand beaches.' },
    { id: 'mandarin-fish', common: 'Mandarin Fish', scientific: 'Synchiropus splendidus', teaser: 'Possibly the most colourful vertebrate on Earth.', imageQuery: 'mandarin dragonet fish coral' },
    { id: 'seahorse', common: 'Seahorse', scientific: 'Hippocampus', teaser: 'The only animal where the male becomes pregnant.', imageQuery: 'seahorse ocean marine' },
    { id: 'barracuda', common: 'Barracuda', scientific: 'Sphyraena', teaser: 'Torpedo-shaped apex predator, terrifying up close.' },
    { id: 'trevally', common: 'Trevally', scientific: 'Caranx ignobilis', teaser: 'A powerful pack hunter that dominates open-water reefs.', imageQuery: 'giant trevally fish ocean' },
  ],
  'sharks-rays': [
    { id: 'whale-shark', common: 'Whale Shark', scientific: 'Rhincodon typus', teaser: 'The ocean\'s largest fish — and it only eats tiny plankton.', imageQuery: 'whale shark underwater swimming diver' },
    { id: 'whitetip-reef-shark', common: 'Whitetip Reef Shark', scientific: 'Triaenodon obesus', teaser: 'Rests on the seafloor all day, hunts through reef caves at night.' },
    { id: 'hammerhead-shark', common: 'Hammerhead Shark', scientific: 'Sphyrna lewini', teaser: 'Its bizarre head is actually a finely tuned sensory instrument.', imageQuery: 'scalloped hammerhead shark underwater' },
    { id: 'oceanic-manta-ray', common: 'Oceanic Manta Ray', scientific: 'Mobula birostris', teaser: 'Wingspan of seven metres, brain bigger than any other fish.' },
    { id: 'blue-spotted-stingray', common: 'Blue-spotted Stingray', scientific: 'Neotrygon kuhlii', teaser: 'Jewel-spotted and venomous — a hidden gem of the sandy reef floor.' },
    { id: 'zebra-shark', common: 'Zebra Shark', scientific: 'Stegostoma tigrinum', teaser: 'Born with stripes, grows into spots — and can reproduce without a mate.', imageQuery: 'zebra shark reef spotted' },
    { id: 'nurse-shark', common: 'Nurse Shark', scientific: 'Ginglymostoma cirratum', teaser: 'The ocean\'s most docile shark, often found napping in piles.', wikiTitle: 'Nurse_shark' },
  ],
  'marine-mammals': [
    { id: 'orca', common: 'Orca', scientific: 'Orcinus orca', teaser: 'Not a whale — the largest dolphin, and the ocean\'s apex predator.' },
    { id: 'humpback-whale', common: 'Humpback Whale', scientific: 'Megaptera novaeangliae', teaser: 'Composes the most complex songs in the animal kingdom.' },
    { id: 'spinner-dolphin', common: 'Spinner Dolphin', scientific: 'Stenella longirostris', teaser: 'Leaps and spins for reasons science still hasn\'t fully explained.' },
    { id: 'dugong', common: 'Dugong', scientific: 'Dugong dugon', teaser: 'The real mermaid — ancient mariners mistook these for half-human creatures.' },
    { id: 'irrawaddy-dolphin', common: 'Irrawaddy Dolphin', scientific: 'Orcaella brevirostris', teaser: 'Chubby-cheeked river dolphin that spits water to herd fish.' },
    { id: 'indo-pacific-bottlenose-dolphin', common: 'Indo-Pacific Bottlenose Dolphin', scientific: 'Tursiops aduncus', teaser: 'Smarter than a dog, social as a human, and deeply misunderstood.' },
  ],
  reptiles: [
    { id: 'green-sea-turtle', common: 'Green Sea Turtle', scientific: 'Chelonia mydas', teaser: 'Returns to the exact beach where it was born, decades later.', imageQuery: 'green sea turtle underwater swimming' },
    { id: 'hawksbill-sea-turtle', common: 'Hawksbill Sea Turtle', scientific: 'Eretmochelys imbricata', teaser: 'Eats sponges that would otherwise smother coral reefs.', imageQuery: 'hawksbill turtle underwater reef' },
    { id: 'leatherback-sea-turtle', common: 'Leatherback Sea Turtle', scientific: 'Dermochelys coriacea', teaser: 'Dives deeper than most submarines and has no hard shell.', imageQuery: 'leatherback turtle nesting beach' },
    { id: 'olive-ridley-turtle', common: 'Olive Ridley Turtle', scientific: 'Lepidochelys olivacea', teaser: 'Thousands nest simultaneously in one of nature\'s great spectacles.', imageQuery: 'olive ridley turtle underwater' },
    { id: 'banded-sea-krait', common: 'Banded Sea Krait', scientific: 'Laticauda colubrina', teaser: 'Venom ten times stronger than a cobra — yet remarkably docile.', imageQuery: 'sea krait snake ocean' },
  ],
  invertebrates: [
    { id: 'crown-of-thorns-starfish', common: 'Crown of Thorns Starfish', scientific: 'Acanthaster planci', teaser: 'Beautiful predator that can single-handedly destroy a coral reef.', wikiTitle: 'Crown-of-thorns_starfish' },
    { id: 'giant-clam', common: 'Giant Clam', scientific: 'Tridacna gigas', teaser: 'Farms its own algae like a solar-powered living reef.' },
    { id: 'blue-ringed-octopus', common: 'Blue-ringed Octopus', scientific: 'Hapalochlaena lunulata', teaser: 'Golf-ball-sized animal carrying enough venom to kill 26 humans.', wikiTitle: 'Blue-ringed_octopus' },
    { id: 'nudibranch', common: 'Nudibranch', scientific: 'Nudibranchia', teaser: 'Naked sea slugs that are among the most flamboyant creatures alive.' },
    { id: 'moon-jellyfish', common: 'Moon Jellyfish', scientific: 'Aurelia aurita', teaser: 'No brain, no heart, no blood — yet one of Earth\'s most successful animals.' },
    { id: 'coconut-crab', common: 'Coconut Crab', scientific: 'Birgus latro', teaser: 'The world\'s largest land invertebrate can crack open a coconut.', wikiTitle: 'Coconut_crab' },
    { id: 'peacock-mantis-shrimp', common: 'Peacock Mantis Shrimp', scientific: 'Odontodactylus scyllarus', teaser: 'The most visually complex creature known — sees 16 types of colour receptors.' },
  ],
  'coral-reef': [
    { id: 'staghorn-coral', common: 'Staghorn Coral', scientific: 'Acropora cervicornis', teaser: 'Fastest-growing coral that forms the backbone of Caribbean reefs.' },
    { id: 'brain-coral', common: 'Brain Coral', scientific: 'Diploria labyrinthiformis', teaser: 'Can live for 900 years and looks exactly like a human brain.', wikiTitle: 'Brain_coral' },
    { id: 'table-coral', common: 'Table Coral', scientific: 'Acropora hyacinthus', teaser: 'Grows flat like a table to maximise sunlight in the shallows.' },
    { id: 'fire-coral', common: 'Fire Coral', scientific: 'Millepora', teaser: 'Not a true coral — a colonial hydrozoan that stings anyone who touches it.', wikiTitle: 'Fire_coral' },
    { id: 'coral-bleaching', common: 'Coral Bleaching', scientific: 'Thermal Stress Phenomenon', teaser: 'When rising temperatures turn reefs from a rainbow to a ghost.', wikiTitle: 'Coral_bleaching' },
  ],
  'deep-sea': [
    { id: 'anglerfish', common: 'Anglerfish', scientific: 'Lophiiformes', teaser: 'Hunts in total darkness using a bioluminescent lure growing from its head.', imageQuery: 'anglerfish deep sea' },
    { id: 'giant-squid', common: 'Giant Squid', scientific: 'Architeuthis dux', teaser: 'The largest invertebrate on Earth — rarely seen alive by humans.', imageQuery: 'giant squid deep ocean' },
    { id: 'vampire-squid', common: 'Vampire Squid', scientific: 'Vampyroteuthis infernalis', teaser: 'Not a squid, not an octopus — a living fossil from 300 million years ago.', imageQuery: 'vampire squid deep sea' },
    { id: 'bioluminescent-jellyfish', common: 'Bioluminescent Jellyfish', scientific: 'Aequorea victoria', teaser: 'Glows in the dark and gave science one of its greatest research tools.', imageQuery: 'bioluminescent jellyfish ocean' },
    { id: 'dumbo-octopus', common: 'Dumbo Octopus', scientific: 'Grimpoteuthis', teaser: 'Flaps ear-like fins to swim in the deepest parts of the ocean.', imageQuery: 'dumbo octopus deep sea' },
    { id: 'goblin-shark', common: 'Goblin Shark', scientific: 'Mitsukurina owstoni', teaser: 'A living fossil with a jaw that shoots forward to catch prey.', imageQuery: 'goblin shark deep sea' },
  ],
  seagrass: [
    { id: 'seagrass', common: 'Seagrass', scientific: 'Posidonia oceanica', teaser: 'Ancient underwater meadows that store more carbon than rainforests.' },
  ],
  mangroves: [
    { id: 'mangrove', common: 'Mangrove', scientific: 'Rhizophora apiculata', teaser: 'The ocean\'s nursery — where half the world\'s commercial fish species begin life.' },
  ],
  algae: [
    { id: 'giant-kelp', common: 'Giant Kelp', scientific: 'Macrocystis pyrifera', teaser: 'Grows 60 centimetres a day, creating underwater forests taller than trees.' },
    { id: 'sea-lettuce', common: 'Sea Lettuce', scientific: 'Ulva lactuca', teaser: 'Bright green seaweed found on every coastline on Earth.' },
    { id: 'coralline-algae', common: 'Coralline Algae', scientific: 'Corallinales', teaser: 'Pink stone-like algae that cements reefs together from the inside.' },
    { id: 'sargassum', common: 'Sargassum', scientific: 'Sargassum muticum', teaser: 'Floating forests that shelter a unique ocean ecosystem in open water.' },
  ],
}

export const kingdomCategories = {
  animal: ['fish', 'sharks-rays', 'marine-mammals', 'reptiles', 'invertebrates', 'coral-reef', 'deep-sea'],
  plant: ['seagrass', 'mangroves', 'algae'],
}

export function searchSpecies(query) {
  const q = query.toLowerCase().trim()
  if (!q) return []
  const results = []
  for (const [categoryId, speciesList] of Object.entries(species)) {
    for (const s of speciesList) {
      if (
        s.common.toLowerCase().includes(q) ||
        s.scientific.toLowerCase().includes(q) ||
        s.teaser.toLowerCase().includes(q)
      ) {
        results.push({ ...s, categoryId })
      }
    }
  }
  return results
}

export function getSpeciesById(id) {
  for (const [categoryId, speciesList] of Object.entries(species)) {
    const found = speciesList.find(s => s.id === id)
    if (found) return { ...found, categoryId }
  }
  return null
}

export function getCategoryById(id) {
  for (const cats of Object.values(categories)) {
    const found = cats.find(c => c.id === id)
    if (found) return found
  }
  return null
}