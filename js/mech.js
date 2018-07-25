var mechDict = [];
mechDict["controls"] = {
  images:
  `<div class="carousel-item active" >
    <img class="d-block w-100" src="img/controls.jpg" alt="Default Keyboard Controls for Faraway Story">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/button_mapping.jpg" alt="Sample button mapping">
  </div>`,
text:
  `<div class = "container-fluid">
   <div class = "row align-items-center">
    <article class=" col-12 ">
    <h2>Control Settings</h2>
    <h3>Getting Started</h3>
    <p>
      Despite this being a 2D game, it uses a lot more key/button inputs than your average RPG Maker or Wolf RPG game, and you'll definitely want to take the time to configure the key and button mappings to your liking. To set the controls, go to Options from the title screen (or alternately, Main Menu->Book->Options while in-game). Use the Tab Left and Tab Right keys (A & S by default) to reach the Keys tab, then use the left and right arrow keys to select your control scheme. Pressing the down arrow key, then the confirm key (space or Z) will allow you to use the up and down keys to go through every function and assign a button or key.
    </p>
    <p>
      There is one small caveat when playing with modern non-classic controllers: the game will not recognize the D-pad for directional movement, only the joystick. To get around this limitation and use the D-pad, you will need to use a controller-to-keyboard mapping program such as <a href="https://github.com/AntiMicro/antimicro">AntiMicro</a> to map the D-pad to the arrow keys.
    </p>
    <h3>Combat Controls</h3>
    <p>
      The control setup screen doesn't indicate what the functions translate to in battle, but it's surprisingly simple.
    </p>
    <ul>
      <li>Confirm -> Pick up items and interact with switches. Holding down confirm will force the playable character to walk.</li>
      <li>Cancel -> Standard attack, 2-3 attacks per combo depending on the weapon.</li>
      <li>Subkey -> Guard(Reduces physical damage, as well as magical damage to a lesser extent)</li>
      <li>Tab Okay -> Uses currently selected shortcut to activate a skill or item. Note that skills have MP costs, BP costs, and delay while items take from your Cost Points.</li>
      <li>Tab left/right -> Change currently selected shortcut slot</li>
      <li>Toggle Info -> Toggle Minimap</li>
    </ul>
    </article>
    </div>
    </div>`
};

mechDict["stats"] = {
  images:
  `<div class="carousel-item active" >
    <img class="d-block w-100" src="img/stats1.jpg" alt="Tutorial for the following stats: HP, MP, BP, Co, ATK, DEF, MAG, RES, DEX">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/stats2.jpg" alt="Tutorial for the following stats: AGI, CRI, BLO">
  </div>`,
text:
  `<div class = "container-fluid">
   <div class = "row align-items-center">
    <article class=" col-12 ">
    <h2>Combat Statistics</h2>
    <h3>Intro</h3>
    <p>
      Most of the stats are familiar to those who played RPGs before, but this game adds a few that are easy to overlook, namely BP, Co, CRI, and BLO.
    </p>
    <h3>Stat List</h3>
    <ul>
      <li><strong>HP</strong>: Indicates how many damage points a character can take before they fall.</li>
      <li><strong>MP</strong>: Indicates how much mana a character has left to use skills.</li>
      <li><strong>BP</strong>: See Balance Points modal for more information. In short, try not to run out of BP, but try not to max it at 200.</li>
      <li><strong>Co</strong>: A stat that limits the amount of items a character can use before resting.</li>
      <li><strong>ATK</strong>: Affects damage dealt by the character's physical skills and normal attacks.</li>
      <li><strong>DEF</strong>: Reduces physical damage taken.</li>
      <li><strong>MAG</strong>: Affects damage dealt by the character's magic.</li>
      <li><strong>RES</strong>: Reduces magical damage taken.</li>
      <li><strong>DEX</strong>: Affects accuracy of physical attacks.</li>
      <li><strong>AGI</strong>: Affects chance to automatically dodge physical attacks, regardless of whether or not your hitbox overlaps with a physical attack.</li>
      <li><strong>CRI</strong>: Affects critical hit rate (1.25x damage). If it's too low, the character's attacks have a high chance of being blocked.</li>
      <li><strong>BLO</strong>: Affects chance to block an attack (0.25x damage) and avoid critical damage. If a character manages to block while guarding, they'll take 0 damage.</li>
    </ul>
    </article>
    </div>
    </div>`
}

mechDict["skill"]= {
  images:
  `<div class="carousel-item active" >
    <img class="d-block w-100" src="img/skill_tree.jpg" alt="Pia's Skill Tree">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/skill_selection.jpg" alt="Setting skill shortcuts">
  </div>`,
  text:
  `<div class = "container-fluid">
    <div class = "row align-items-center">


  <article class=" col-12 ">
    <h2>Skill System</h2>
    <p>
      Skills aren't learned by leveling up, but by unlocking them on the Mission Board's skill tree. Of course, these skills aren't for free, since they'll require you to offer up specific items, which also has the side effect of requiring you to progress the story so you can increase the variety of items you can gather and craft. Fortunately, you do not need to match a skill's element graph requirement in order to learn it, allowing you to learn skills whether or not you can actually use them.
      </p>
      <p>
        Before you can use a skill, you must set it in the shortcut list. While browsing the skill section of the menu, select the desired skill, use the subkey to open the shortcut list, and confirm one of the shortcut slots. The shortcut slots will be shown in battle, with the MP cost of the skills displayed. Skills for which you lack element level will have their names in green, so don't bother equipping them unless you plan on using Pia's Essentia.
      </p>
  </article>
  </div>
  </div>`
};

mechDict["item"] = {
  images:
  `<div class="carousel-item active" >
    <img class="d-block w-100" src="img/consumables.jpg" alt="Comsumable Item Tab">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/pocket.jpg" alt="Pocket Item Tab">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/weapons.jpg" alt="Equipment Tab">
  </div>`,
  text:
  `<div class = "container-fluid">
    <div class = "row align-items-center">
  <article class=" col-12 ">
    <h2>Item Basics</h2>
    <h3>Getting Started</h3>
      <p>
        Like with skills, consumable items must be set in the shortcut slots so you can use them in battle. While you can use some items from the menu, combat won't pause, so it's in the best interests of your HP bar if you set items as shortcuts. Despite the convenience of consumables, all of them will require Cost Points, thus limiting the amount of items you can consume before resetting your Cost Points (via dungeon save points and sleeping). You'll want to do some math to figure out which of your current items are the most efficient in healing you with as little cost as possible.
        </p>
        <h3>Pocket</h3>
        <p>
          Your A.I. allies will not be able to use your consumable items unless you divert some of them into the Pocket Tab, so always keep track of that tab before going into dungeons or starting a boss fight. You'll especially want to put revival items in there, since your allies will automatically try to revive you if you get KOed. I wouldn't recommend putting anything expensive or difficult to make in the pocket, since there's no telling when or how often your allies will use those items.
        </p>
        <h3>Weapon Swapping</h3>
        <p>
          This feature isn't mentioned in the game, but you can assign equipment to shortcut slots too, allowing you to quicky change to a different weapon depending on the situation. There are some caveats to this feature, such as how this maps a shortcut slot to a specifically numbered equipment tab slot. This means if you auto-sort your equipment, you may end up changing which weapon the slot maps to. Also, you need to take into account that some weapons are two-handed, which means equipping one via a shortcut will unequip an off-hand equipment, and vice-versa.
        </p>
        <h3>Storage</h3>
        <p>Again, due to the uniqueness of equipment, there's a limit to how many you can carry on your person. Fortunately, every house has a (limited )storage chest that is synced across all houses, allowing you to hoard some more gear. Eventually, you can craft the Magic Pouch, which can access your storage from anywhere, including in dungeons and inescapable locations.</p>
  </article>
  </div>
  </div>`
};
mechDict["weapon"] = {
  images:
  `<div class="carousel-item active" >
    <img class="d-block w-100" src="img/sword.jpg" alt="Sword Description">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/greatsword.jpg" alt="Greatsword Description">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/spear.jpg" alt="Spear Description">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/bow.jpg" alt="Bow Description">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/staff.jpg" alt="Staff Description">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/book.jpg" alt="Book Description">
  </div>`,
  text:
  `<div class = "container-fluid">
    <div class = "row align-items-center">
  <article class=" col-12 ">
    <h2>Weapon Types</h2>
    <p>All the advantages and disadvantages of the weapons should be displayed in the images in carousel, but I'll write the descriptions here just in case they don't display.</p>
      <ul>
        <li><strong>Swords</strong>: Fast, 1-handed weapons with decent ATK and short range.</li>
        <li><strong>Greatswords</strong>: Slow, 2-handed weapons with high ATK and range.</li>
        <li><strong>Spears</strong>: Slow, 2-handed weapons with the most ATK and range. Unfortunately, they can only deal 2-hit combos rather than 3 hits.</li>
        <li><strong>Bow</strong>: 2-handed projectile weapons. They're good for picking enemies off from a distance, but they can only hit one enemy per arrow and are a bit slow. They also add more to DEX than ATK.</li>
        <li><strong>Staves</strong>: Fast, 1-handed weapons with low ATK and short range, but high MAG increases.</li>
        <li><strong>Books</strong>: Fast, 1-handed weapons with lower ATK, MAG, and range than staves. However, they usually have more special effects attached to them.</li>
      </ul>
     <p>Most characters can only equip one weapon type, but Pia and Ellevark can equip any of them. To take advantage of this, you may want to assign a weapon to a shortcut slot so that Pia and Ellevark have more options in the middle of combat.</p>
  </article>
  </div>
  </div>`
};
mechDict["slots"] = {
  images:
  `<div class="carousel-item active" >
    <img class="d-block w-100" src="img/slot_tutorial1.jpg" alt="Ellevark explaining equipment slots to Pia.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/slot_tutorial2.jpg" alt="A successfully slotted wand.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/slot_cleaners.jpg" alt="Consumable items that can remove stones from slots.">
  </div>`,
  text:
  `<div class = "container-fluid">
    <div class = "row align-items-center">
  <article class=" col-12 ">
    <h2>Equipment Slots</h2>
    <p>Most pieces of equipment have slots to insert customization stones, giving them extra stats, status effects, or spell enhancements. To use this function, go to the equipment menu, use the subkey, and choose to "Combine." You can also remove stones from slots using Slot Cleaner consumables. However, inserting stones risks destroying the equipment and removing stones risks destroying the equipment and stone depending on what type of cleaner you use, so be sure to save before trying this feature.</p>
  </article>
  </div>
  </div>`
};
mechDict["element"] = {
  images:
  `<div class="carousel-item active" >
    <img class="d-block w-100" src="img/opposing_elements.jpg" alt="A diagram of elements paired by opposition">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/ellevark_graph.jpg" alt="Ellevark's element graph">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/cant_use_thunderstorm.jpg" alt="Pia realizes she can't use high level thunder spells">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/crystone.jpg" alt="Ellevark brings out a Sorcerer Crystone">
  </div>`,
  text:
  `<div class = "container-fluid">
    <div class = "row align-items-center">
  <article class=" col-12 ">
    <h2>Element System</h2>
    <h3>Characteristics of all elements</h3>
      <ul>
        <li><strong>Fire</strong>: Spells of this element have high power, but also have high MP costs and can leave you open. Opposes Ice.</li>
        <li><strong>Ice</strong>: Spells of this element have low MP cost, but are also harder to aim. Opposes Fire.</li>
        <li><strong>Thunder</strong>: Spells of this element are difficult to dodge, but have long casting time. Opposes Water.</li>
        <li><strong>Water</strong>: Spells of this element are considered the most balanced, but also the least specialized in terms of combat traits. Opposes Thunder.</li>
        <li><strong>Wind</strong>: Spells of this element are fast, can combo, and can go through field obstacles, but are weak. Opposes Earth.</li>
        <li><strong>Earth</strong>: Spells of this element have high power, short cast times, and good range, but their skill delay is long.</li>
        <li><strong>Light</strong>: Spells of this element, like water, seem to be fairly balanced for the most part. Opposes Dark.</li>
        <li><strong>Dark</strong>: Not many spells of this element have been revealed in the game so far, but the standard ones seem to focus on binding the enemy. Opposes Light.</li>
        <li><strong>Life</strong>: Spells of this element generally focus on healing and support rather than offense. However, undead enemies can be targeted and harmed by healing spells. Opposes Ruin.</li>
        <li><strong>Ruin</strong>: Spells of this element are powerful against targets with no status ailments, but have high MP cost. Opposes life.</li>
      </ul>
      <h3>Element Graphs</h3>
     <p>Every character has innate talent levels in the various elements, determining which spells they can use. This will indicated by their element graph, which can be viewed by going into a character's status screen and pressing the left or right arrow keys. All elements have opposites, and opposing element levels cannot add up to more than 6. Strangely, most characters will only be at level 1 for both Life and Ruin while other opposing elements add up to exactly 6. Even more strange is that Light, Dark, Life, and Ruin get a separate graph from the other elements.</p>
     <p>Element levels are determined at birth and cannot be changed without extremely rare "Crystones." A Power Crystone can change the levels of a pair opposing elements by 1 level per use while a Sorcerer Crystone can change any amount of opposing pairs by any level amount per use. Only Pia and Ellevark are willing to use these items, with Pia only being able to change Fire, Ice, Thunder, Water, Wind, and Earth element levels and Ellevark only being able to change Light, Dark, Life, and Ruin element levels.</p>
  </article>
  </div>
  </div>`
};
mechDict["ailment"] = {
  images:
  `<div class="carousel-item active" >
    <img class="d-block w-100" src="img/stat_ail1.jpg" alt="Breakdown of the first six status ailments.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/stat_ail2.jpg" alt="Breakdown of the last four status ailments.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/ail_resist_gear.jpg" alt="Socks to resist the Freeze status ailment.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/status_ail_elements.jpg" alt="Diagram showing which status effects are related to which element.">
  </div>`,
  text:
  `<div class = "container-fluid">
    <div class = "row align-items-center">
  <article class=" col-12 ">
    <h2>Ailments</h2>
    <h3>Intro</h3>
    <p>Many skills and certain pieces of gear have the ability to inflict status effects on targets, as well as the ability to resist them. Like in most RPGs, you'll want to be one inflicting ailments rather than the other way around, so be sure to change your gear setup depending on what dungeon you plan on exploring. This also means you'll need to put status ailment curing items in your shortcut and your pocket, since you might not be able to get total resistance to ailments depending on the available gear.</p>
    <ul>
      <li><strong>Burn (Fire)</strong>: Deals damage over time, though not as much as venom. This works great against enemies with high defense.</li>
      <li><strong>Freeze (Ice)</strong>: Makes it easier to swing between the extremes of low and high BP. You may want to guard until you can get this cured. If you can inflict this on an enemy, try to Balance Break them.</li>
      <li><strong>Numb (Thunder)</strong>: Temporarily stops movement and actions.</li>
      <li><strong>Mute (Water)</strong>: Prevents skill usage, but not normal attacks.</li>
      <li><strong>Confuse (Wind)</strong>: Muddles directional movement if the target tries to run rather than walk.</li>
      <li><strong>Petrify (Earth)</strong>: Like numb, except it also causes the target to take more damage.</li>
      <li><strong>Blind (Light)</strong>: Reduces the accuracy of physical attacks (but fortunately, not magic).</li>
      <li><strong>Venom (Dark)</strong>: Deals high damage over time.</li>
      <li><strong>Fainted (Ruin)</strong>: An obvious consequence of having HP reduced to 0 or being hit by an instant death skill. Target cannot act until revived.</li>
      <li><strong>Normal (Life)</strong>: The target has no status ailments whatsover. Yay!</li>
    </ul>
    <h3>Tie in w/Elements</h3>
    <p>All status effects are tied to an element, causing the target to become weak to the opposite element. For example, a burned target will take extra damage from ice. This will work even if the target has prior resistance to an element, making status elements more complex than in most other RPGs. Note that this applies to Life and Ruin elements too, which means a non-ailed character will take extra damage from Ruin skills unless they are under the effects of a Ruin Pill.</p>
  </article>
  </div>
  </div>`
};
mechDict["bp"] = {
  images:
  `<div class="carousel-item active" >
    <img class="d-block w-100" src="img/mp_bp_consumption.jpg" alt="Pia's spell consumed both her MP and BP.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/almost_balance_break.jpg" alt="The scarecrows are about to break Pia's balance by attacking her repeatedly">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/balance_broken.jpg" alt="Pia is unbalanced and weakened">
  </div>`,
  text:
  `<div class = "container-fluid">
    <div class = "row align-items-center">


  <article class=" col-12 ">
    <h2>Balance Points</h2>
    <h3>Intro</h3>
    <p>All skills and normal attacks have Balance Point costs in addition to consuming MP. While BP will not increase through leveling, it will automatically gravitate back to 100 as long as you aren't using skills or getting damaged repeatedly. BP can increase quickly as you take repeated damage, which you can take advantage of by spamming skills. However, you don't want to get your BP too high...</p>
    <h3>BP Drawbacks</h3>
    <p>If you have low BP, you won't be able to use skills, but you can use normal attacks. However, normal attacks performed in this condition cannot stagger enemies, so it's not very useful unless the enemy is near death. Having high BP is nice, but if your BP reaches 200, you'll be stunned and your defensive stats will be drastically lowered. Guarding will help deal with these drawbacks, since it causes BP to refill faster when you're below 100 or causes it to fill slower when you take damage. This applies to enemies too, though you'll need the Clearspeccio skill to see their BP.</p>
  </article>
  </div>
  </div>`
};

mechDict["special"] = {
  images:
  `<div class="carousel-item active" >
    <img class="d-block w-100" src="img/essentia_desc.jpg" alt="Description of Pia's Hyper Special, Essentia.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/hyper_aura.jpg" alt="Aura indicating that a character is ready to activate their Hyper Special.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/flame_whirlwind.jpg" alt="Erena's Hyper Special, Flame Whirlwind.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/quartet.jpg" alt="Marinet's Hyper Special, Quartet.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/ellevark_cut_in.jpg" alt="Ellevark's cut-in when using his Hyper Special.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/imagined_world.jpg" alt="Ellevark's Hyper Special, Imagined World.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/element_zero.jpg" alt="Pia's Finisher, Element Zero.">
  </div>`,
  text:
  `<div class = "container-fluid">
    <div class = "row align-items-center">


  <article class=" col-12 ">
    <h2>Hyper Specials</h2>
    <h3>Intro</h3>
    <p>Combatants have the potential to awaken a Hyper Special, a skill that grants the user superhuman and often unique effects. For example, Pia has Essentia, which opens with a damaging ring of elemental magic before doubling her MAG and giving her access to spells regardless of her element levels. No one is quite sure what the cexact conditions are for unlocking them are, but they tend to awaken when one is in a life-or-death situation or when one is at an emotional peak.</p>
    <h3>Activation</h3>
    <p>Each Hyper Special user has an invisible gauge that needs to be filled before they automatically gain a Hyper Special aura, which indicates their Hyper Special is ready to use. If you get this aura, be mindful about the timing to use it. While you may want to save the Hyper Special, the aura for activating it doesn't last long. Additionally, only one Hyper Special can be active at a time and can only be activated once per battle. If both you and your opponent have a Hyper Special aura, you can try to activate yours first to prevent them from using their own HS.</p>
    <h3>Finishers</h3>
    <p>With further training, Hyper Special users can learn a Finisher, which is a powerful skill that can only be used while one's Hyper Special is active. These will typically deal massive damage to targets at the cost of ending the Hyper Special early. Ideally, you'll want to activate your Finisher just before the Hyper Special expires, allowing you to reap the maximum benefit of your Hyper Special before ending it with a bang.</p>
  </article>
  </div>
  </div>`
};

mechDict["crafting"] = {
  images:
  `<div class="carousel-item active" >
    <img class="d-block w-100" src="img/alchemy_screen.jpg" alt="Menu for choosing items to alchemize.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/forge_screen.jpg" alt="Menu for choosing equipment to forge.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/making_potions.jpg" alt="Potions being produced in bulk.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/alchemy_exp.jpg" alt="Gaining experience points for Alchemy level.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/potion_recipev2.jpg" alt="Alternate recipe for Red Potion.">
  </div>`,
  text:
  `<div class = "container-fluid">
    <div class = "row align-items-center">
  <article class=" col-12 ">
    <h2>Crafting</h2>
    <h3>Intro</h3>
    <p>Alchemy and forging follow the same basic mechanics of sacrificing specific items to make a new items, with the former producing non-equipment and the latter producing equipment. All characters have their own Alchemy and Forge levels, which determine their chances of succeeding at making items. Ideally, you'll want to be at or above the level of the recipe you're attempting, though you'll get experience for the current crafting type regardless of the results. To start crafting, examine the the work table in any of the houses.</p>
    <h3>Other mechanics</h3>
    <ul>
    <li>You'll find new recipes by buying them from shops, finding them in dungeons, or receiving them in events.</li>
    <li>Some items can be made with different recipes, which substitute certain ingredients for others. Alternate recipes may even have different level requirements to reflect the difficulty of handling rarer ingredients. To view alternate recipes, select an item from the crafting list and use the tab left/right buttons.</li>
    <li>Some recipes will reveal the materials to make an item, but not the details of the item itself, at least until you make the item for the first time.</li>
    <li>If you have the Equip Upgrade Book, any C-rank equipment you forge will automatically gain a +1 modifier.</li>
  </ul>
  </article>
  </div>
  </div>`
};

mechDict["shop"] = {
  images:
  `<div class="carousel-item active" >
    <img class="d-block w-100" src="img/choosing_stock.jpg" alt="Manu for choosing items to put up for sale.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/selling.jpg" alt="Opening shop and waiting for items to be bought.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/rare_item_price.jpg" alt="The settled market price for the Marinet Doll.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/VIP.jpg" alt="Explanation of the VIP system.">
  </div>`,
  text:
  `<div class = "container-fluid">
    <div class = "row align-items-center">
  <article class=" col-12 ">
    <h2>Shopkeeping</h2>
    <h3>Intro</h3>
    <p>Enemies don't drop money, only items, which means it's up to you to sell them to make a living. Fortunately, Pia already bought a shop in Port Fina and Ellevark already has shops on several continents, making it easy to start peddling your spare potions and hand-me-down gear. Fortunately, you don't have to worry about rent or other overhead costs in this game, so you can take your time getting your stock ready.</p>
    <h3>Setting the Shop's Inventory</h3>
    <p>Before opening the shop, you can set the stock by taking items from your inventory and storage, and then setting the prices for each one. In the case of non-equipment, you can stack multiples of them, since they don't have any uniqueness or customizability like equipment. You're still limited by the number of sale slots you can use, as well as the total number of items from all sale slots, though you can complete certain missions to increase these limits.</p>
    <h3>Rare Items</h3>
    <p>Price setting is based on a percentage of the item's market price, but not all items have one established. Some rare items, such as Yuva Oil, have no established market price, meaning you can only guess a price to sell them at. Once you manage to sell enough of a rare item, you'll eventually learn its market price, though finding enough to sell is easier said than done.</p>
    <h3>Other Tips</h3>
    <ul>
      <li>The demand of goods depends on the region, date, customer types, and other random factors.</li>
      <li>Shop EXP gained is inversely proportional to the demand of sold items.</li>
      <li>If you're lucky, a VIP customer may browse your shop and possibly put in a good word for it, driving sales up for a few days.</li>
      <li>There's a chance that during one of your shop sessions, all of the customers will be the same type of NPC with the same preferences.</li>
      <li>There doesn't seem to be a way to speed through a sale, so you may want to do something else for a few minutes.</li>
      <li>The store closes when you choose to cancel, when it become 6 pm, or when you run out of items to sell.</li>
      <li>Since shopkeeping takes in-game time, be sure that every party member is doing another task, like material gathering.</li>
      <li>This is somewhat loosely related, but aside from the more mainstream armory, item shops, and library, the marketplace will feature randomized merchants with randomized stock. Like you the player, they don't have to sell their items at market price, meaning they can potentially rip you off, but you might not have much choice if they have a rare item you really want.</li>
    </ul>
  </article>
  </div>
  </div>`
};

mechDict["mission"] = {
  images:
  `<div class="carousel-item active" >
    <img class="d-block w-100" src="img/dark_emperor_karnel.png" alt="Mission to duel and recruit Karnel.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/assign_roles.jpg" alt="Ordering party members to do various jobs.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/leadership_mission.jpg" alt="Opening cutscene for the mission to unlock Marinet as a party leader.">
  </div>`,
  text:
  `<div class = "container-fluid">
    <div class = "row align-items-center">
  <article class=" col-12 ">
    <h2>Mission Board</h2>
    <h3>Intro</h3>
    <p>All of your houses will contain a Mission Board, which has the function of listing optional sidequests, listing mandatory events, listing tutorial missions, accessing the skill tree, and assigning tasks to party members. Like with store stock and storage, the Mission Board is synced across all houses.</p>
    <h3>Recruitment Missions</h3>
    <p>As a teacher, Ellevark doesn't want Pia to depend on stronger allies to do all the work for her, but at the same time, not having allies makes it difficult to search for materials and grind levels in dungeons. Therefore, he established a rule where party members can only be recruited after Pia defeats them in a one-on-one duel. While the party members might help you out in certain story events, they can't help with side missions and regular dungeon crawling until you prove yourself worthy of their aid. Ellevark himself is a special case, since he can be put into the party and ordered to perform menial tasks, but he won't contribute much in battle and his alchemy/forge/shop levels are locked to Pia's levels.</p>
    <p>These duels can be quite difficult, but remember that for the most part, the duelists will have the same strengths and weaknesses as when they were guest characters. Again, Ellevark is an exception, since the boss version of him has access to skills that he normally cannot learn, though as a tradeoff, he can't heal unless he petrifies you and he can't use his weapon-based skills.</p>
    <h3>Leadership Missions</h3>
    <p>While you can recruit full-time party members, you normally can't directly control them like you can with Pia. Later, you'll be able to take quests to earn the right to control them as party leader, but only if you prove yourself competent at using their playstyle. Ellevark will create an obstacle course based around the examinee's skillset and mindset, and then challenge them to finish the course in a limited amount of time. Fortunately, failed missions are repeatable, so feel free to keep trying until you figure out the optimal way to clear the course.</p>
    <h3>Ally Orders</h3>
    <p>You can have allies perform the following tasks, which are performed as time passes. Of course, they won't do anything during the time you choose to sleep, or that would be an unfair division of labor! Additionally, some of these options won't be available until you unlock them via missions.</p>
    <ul>
      <li><strong>Rest</strong>: This option will simply let them recover their HP, MP, and Co, since their current stamina can affect their progress in automatic tasks.</li>
      <li><strong>Member</strong>: This option will make them a party member alongside the current leader, and you can select up to two extra members. Again, if he isn't officially recruited, Ellevark won't do much to help in battle if you make him a party member, though there is a rather obscure exception to this rule.</li>
      <li><strong>Alchemy/Forge</strong>: Allies can craft items in the background, but with some caveats. First, they will automatically gather ingredients on their own rather than take them from the inventory menu, which makes the process take longer. Second, they can't use recipes that are higher than Pia's or their own alchemy/forge levels. Third, they can only make items up to Rank C that Pia already made at least once, and cannot use recipes that use ingredients of Rank B or higher. Since allies craft slower, I wouldn't recommend using this option to train their alchemy and forge levels. Only use this option if you actually need an item made.</li>
      <li><strong>Shop Duty</strong>: Allies will be able to manage the shop, but you're still responsible for choosing which items to put up for sale.
      <li><strong>Harvest</strong>: Allies can go to dungeons that Pia has already beaten before, excluding unique dungeons or map-only dungeons, in order to gather ingredients. If the ally is not at a high level, they won't gather as many items, so make sure to level everyone evenly. Additionally, all items they gather are sent to storage, and it's possible to overfill on equipment, so keep an eye on how full the storage chest is.</li>
    </ul>
  </article>
  </div>
  </div>`
};

mechDict["archive"] = {
  images:
  `<div class="carousel-item active" >
    <img class="d-block w-100" src="img/past_archive.jpg" alt="Past Archive Menu.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/erena_episode.jpg" alt="Erena's Past Archive event">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/hourglass_prompt.jpg" alt="Dialogue box telling player that they can use the hourglass to leave the flashback.">
  </div>`,
  text:
  `<div class = "container-fluid">
    <div class = "row align-items-center">
  <article class=" col-12 ">
    <h2>Past Archive</h2>
    <p>The Past Archive is a feature on the Faraway Continent that allows the player to view past missions and even play through some of them again. Of course, replayed missions won't allow you to farm previously obtained rewards, for the sake of balance. The archive also has events from individual characters' pasts, which aren't otherwise viewable in normal gameplay. Note that it won't show every cutscene in the game, just flashbacks to flesh out the characters and mission related scenes.</p>
  </article>
  </div>
  </div>`
};

mechDict["dungeon"] = {
  images:
  `<div class="carousel-item active" >
    <img class="d-block w-100" src="img/obvious_trap.jpg" alt="A button surrounded by BONES.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/recovery_point.jpg" alt="A healing point in a dungeon.">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="img/alternate_maps.jpg" alt="Maps that can be used to enter a preset or harder version of a normally random dungeon.">
  </div>`,
  text:
  `<div class = "container-fluid">
    <div class = "row align-items-center">
  <article class=" col-12 ">
    <h2>Dungeons</h2>
    <h3>Intro</h3>
    <p>Every time you enter a dungeon normally, you end up in a different version of it, with randomly placed items, enemies, passages, and switches. Thus, don't be surprised if the layout seems nonsensical or if some items are unreachable. There are some constants, such as special rooms or miniboss rooms, which occur after a set number of rooms. Some special rooms, including certain minibosses, are so rare that you may never encounter them on most runs through the dungeon. Additionally, be careful when examining switches or stepping on buttons, since these can have both beneficial or dangerous effects, like creating treasure chests or summoning more enemies. Also, be sure to be prepared if you know a boss if going to appear, since you can't save in most rooms.</p>
    <h3>Alternate Maps</h3>
    <p>Every time you visit a dungeon on the world map, you're given the choice of entering a random collection of rooms or using a map item. These items allow you to visit a preset or harder version of the dungeon, which often play into story events. While the layout of preset dungeons never changes, most of their items will be randomized every time you enter them, allowing you to farm them like regular dungeons.</p>
    <h3>Recovery Points/Rooms</h3>
    <p>In some preset maps, you'll find a glowing crest in certain room with no enemies, which can heal you. These rooms are also treated separately from normal rooms, in that you're allowed to save. Also note that using these recovery points will make a few hours pass, but only if you're not at full health.</p>
  </article>
  </div>
  </div>`
};
/*
Changes the HTML content of the modal of mechanics.HTML
@param title the title that the modal should be set to
@param key the key for a dictionary entry
*/
function editModal(title, key) {
  document.getElementById("modalLabel").innerHTML = "Modal: " + title;
  document.getElementById("dynamicModal").innerHTML = mechDict[key].text;
  document.getElementById("dynamicCarousel").innerHTML = mechDict[key].images;

  var imgNum = mechDict[key].images.split("<div").length - 1;
  if(imgNum > 0)
  {
    var indicString = '<li data-target="#carouselMod" data-slide-to="0" class="active"></li>';
    for(var i = 1; i < imgNum; i++)
    {
      indicString += '<li data-target="#carouselMod" data-slide-to="'+ i +'"></li>';
    }
    document.getElementById("dynamicIndicator").innerHTML = indicString;
  }
}
