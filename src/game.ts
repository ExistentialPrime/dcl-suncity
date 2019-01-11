

// ---- Spawn the Well ----
// Note: the model spawns 1.25m above specified location for some reason, adjust accordingly
const well = spawnWell(5.6, -1.25, 2.1)
function spawnWell(x: number, y: number, z: number) {
  // create the entity
  let myWell = new Entity()

  // Set the model
  myWell.add(new GLTFShape("models/well.gltf"))

  // set a transform to the entity for POSITION
  myWell.set(new Transform({ position: new Vector3(x, y, z) }))

  // Scale the entity
  // myWell.set(new Transform({ scale: new Vector3(2, 2, 2) })) // 2x size!

  // add the entity to the engine
  engine.addEntity(myWell)

  return myWell
}

// ---- Spawn the island ----
const island = spawnIsland()
function spawnIsland() {
  // create the entity
  let isle = new Entity()

  // Create and add a `Transform` component to that entity
  isle.add(new Transform())
  isle.get(Transform).position.set(9, -5.6, 9)
  isle.get(Transform).scale.set(4, 4, 4)
  isle.get(Transform).rotation.setEuler(0, 0, 0)  // Reminder, second number 'spins it flat'

  // Set the model
  isle.add(new GLTFShape("models/island.gltf"))

  // add the entity to the engine
  engine.addEntity(isle)

  return isle
}

// ---- Spawn the bars ----
// Note: Two bars breaks the 10k polygon limit to 12,028
const bar1 = spawnBar(8, 0, 4.8)
function spawnBar(x: number, y: number, z: number) {
  let bar = new Entity()
  bar.add(new Transform())
  bar.get(Transform).position.set(x, y, z)
  bar.get(Transform).scale.set(0.3, 0.3, 0.3)
  bar.get(Transform).rotation.setEuler(0, 180, 0)  // Reminder, second number 'spins it flat'
  bar.add(new GLTFShape("models/fancybar.gltf"))
  engine.addEntity(bar)
  return bar
}


