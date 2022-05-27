const DELETED_ITEMS = [
 "agape_space:copper_plate",
 "agape_space:gold_plate",
 "agape_space:iron_plate",
 "croptopia:tomato_seeds",
 "valley:tomato_crate",
"sandwichable:tomato_seeds",
"sandwichable:tomato",
 "betternether:nether_lapis_ore",
 "betternether:nether_redstone_ore",
 "bewitchment:deepslate_silver_ore",
 "bewitchment:raw_silver_block",
 "betternether:nether_ruby_block",
 "bewitchment:silver_block",
 "bewitchment:silver_nugget",
 "bewitchment:silver_ore",
 "bno:aluminum_block",
 "bno:aluminum_ingot",
 "bno:aluminum_nugget",
 "bno:lead_block",
 "bno:lead_ingot",
 "bno:lead_nugget",
 "bno:nether_aluminum_ore",
 "bno:nether_nickel_ore",
 "bno:nether_osmium_ore",
 "bno:nether_silver_ore",
 "bno:nether_uranium_ore",
 "bno:nether_zinc_ore",
 "bno:nickel_block",
 "bno:nickel_ingot",
 "bno:nickel_nugget",
 "bno:osmium_block",
 "bno:osmium_ingot",
 "bno:osmium_nugget",
 "bno:raw_aluminum_block",
 "bno:raw_aluminum",
 "bno:raw_nickel_block",
 "bno:raw_nickel",
 "bno:raw_osmium_block",
 "bno:raw_osmium",
 "bno:raw_silver_block",
 "bno:raw_silver",
 "bno:raw_uranium_block",
 "bno:raw_uranium",
 "bno:raw_zinc",
 "bno:silver_block",
 "bno:silver_ingot",
 "bno:silver_nugget",
 "bno:tin_block",
 "bno:tin_ingot",
 "bno:tin_nugget",
 "bno:uranium_block",
 "bno:uranium_ingot",
 "bno:uranium_nugget",
 "bno:zinc_block",
 "bno:zinc_ingot",
 "bno:zinc_nugget",
 "byg:lignite_block",
 "byg:lignite_ore",
 "byg:lignite",
 "consistency_plus:copper_nugget",
 "create:brass_block",
 "create:brass_ingot",
 "create:brass_nugget",
 "create:brass_sheet",
 "create:crushed_zinc_ore",
 "create:deepslate_zinc_ore",
 "create:deepslate_zinc_ore",
 "create:raw_zinc_block",
 "create:raw_zinc",
 "create:zinc_block",
 "create:zinc_ingot",
 "create:zinc_ore",
 "croptopia:bacon",
 "croptopia:cabbage",
 "croptopia:dough",
 "croptopia:onion",
 "croptopia:rice",
 "croptopia:salt",
 "croptopia:tomato",
 "croptopia:cabbage_seed",
 "valley:onion_seeds",
 "sandwichable:onion_seeds",
 "valley:rice_seedlings",
 "croptopia:rice_seed",
 "croptopia:onion_seed",
 "valley:rice",
 "croptopia:lettuce",
 "croptopia:lettuce_seed",
 "expandeddelight:ground_salt",
 "expandeddelight:salt_rock",
 "gobber2:diamond_dust",
 "indrev:bronze_block", 
 "indrev:bronze_dust", 
 "indrev:bronze_ingot", 
 "indrev:bronze_nugget", 
 "indrev:bronze_plate", 
 "indrev:coal_dust", 
 "indrev:copper_dust", 
 "indrev:copper_nugget", 
 "indrev:copper_plate", 
 "indrev:deepslate_lead_ore", 
 "indrev:deepslate_tin_ore", 
 "indrev:deepslate_tungsten_ore", 
 "indrev:diamond_dust", 
 "indrev:electrum_block", 
 "indrev:electrum_dust", 
 "indrev:electrum_ingot", 
 "indrev:electrum_nugget", 
 "indrev:electrum_plate", 
 "indrev:gold_dust", 
 "indrev:gold_plate", 
 "indrev:iron_dust", 
 "indrev:iron_plate", 
 "indrev:lead_block", 
 "indrev:lead_dust", 
 "indrev:lead_ingot", 
 "indrev:lead_nugget", 
 "indrev:lead_ore", 
 "indrev:lead_plate", 
 "indrev:raw_lead", 
 "indrev:raw_silver", 
 "indrev:raw_tin", 
 "indrev:raw_tungsten", 
 "indrev:silver_block", 
 "indrev:silver_dust", 
 "indrev:silver_ingot", 
 "indrev:silver_nugget", 
 "indrev:silver_plate", 
 "indrev:steel_block", 
 "indrev:steel_dust", 
 "indrev:steel_ingot", 
 "indrev:steel_nugget", 
 "indrev:steel_plate", 
 "indrev:sulfur_dust", 
 "indrev:tin_block", 
 "indrev:tin_dust", 
 "indrev:tin_ingot", 
 "indrev:tin_nugget", 
 "indrev:tin_ore", 
 "indrev:tin_plate", 
 "indrev:tungsten_block", 
 "indrev:tungsten_dust", 
 "indrev:tungsten_ingot", 
 "indrev:tungsten_nugget", 
 "indrev:tungsten_ore", 
 "indrev:tungsten_plate",
 "mining_dims:diamond_nugget",
 "modern_industrialization:aluminum_block",
 "modern_industrialization:aluminum_dust",
 "modern_industrialization:aluminum_ingot",
 "modern_industrialization:aluminum_nugget",
 "modern_industrialization:aluminum_plate",
 "modern_industrialization:bauxite_block",
 "modern_industrialization:bauxite_dust",
 "modern_industrialization:bauxite_ore",
 "modern_industrialization:bronze_block",
 "modern_industrialization:bronze_dust",
 "modern_industrialization:bronze_ingot",
 "modern_industrialization:bronze_nugget",
 "modern_industrialization:bronze_plate",
 "modern_industrialization:chromium_block",
 "modern_industrialization:chromium_dust",
 "modern_industrialization:chromium_ingot",
 "modern_industrialization:chromium_nugget",
 "modern_industrialization:chromium_plate",
 "modern_industrialization:coal_dust",
 "modern_industrialization:copper_nugget",
 "modern_industrialization:copper_plate",
 "modern_industrialization:deepslate_bauxite_ore",
 "modern_industrialization:deepslate_iridium_ore",
 "modern_industrialization:deepslate_lead_ore",
 "modern_industrialization:deepslate_platinum_ore",
 "modern_industrialization:deepslate_salt_ore",
 "modern_industrialization:deepslate_silver_ore",
 "modern_industrialization:deepslate_tin_ore",
 "modern_industrialization:deepslate_tungsten_ore",
 "modern_industrialization:diamond_dust",
 "modern_industrialization:electrum_block",
 "modern_industrialization:electrum_dust",
 "modern_industrialization:electrum_ingot",
 "modern_industrialization:electrum_nugget",
 "modern_industrialization:electrum_plate",
 "modern_industrialization:gold_plate",
 "modern_industrialization:invar_block",
 "modern_industrialization:invar_dust",
 "modern_industrialization:invar_ingot",
 "modern_industrialization:invar_nugget",
 "modern_industrialization:invar_plate",
 "modern_industrialization:iridium_block",
 "modern_industrialization:iridium_dust",
 "modern_industrialization:iridium_ingot",
 "modern_industrialization:iridium_nugget",
 "modern_industrialization:iridium_ore",
 "modern_industrialization:iridium_plate",
 "modern_industrialization:iron_plate",
 "modern_industrialization:lead_block",
 "modern_industrialization:lead_ingot",
 "modern_industrialization:lead_nugget",
 "modern_industrialization:lead_ore",
 "modern_industrialization:lead_plate",
 "modern_industrialization:platinum_block",
 "modern_industrialization:platinum_dust",
 "modern_industrialization:platinum_ingot",
 "modern_industrialization:platinum_nugget",
 "modern_industrialization:platinum_ore",
 "modern_industrialization:platinum_plate",
 "modern_industrialization:raw_iridium",
 "modern_industrialization:raw_lead",
 "modern_industrialization:raw_platinum_block",
 "modern_industrialization:raw_platinum",
 "modern_industrialization:raw_silver_block",
 "modern_industrialization:raw_silver",
 "modern_industrialization:raw_tin",
 "modern_industrialization:raw_titanium_block",
 "modern_industrialization:raw_titanium",
 "modern_industrialization:raw_tungsten_block",
 "modern_industrialization:raw_tungsten",
 "modern_industrialization:ruby_dust",
 "modern_industrialization:salt_block",
 "modern_industrialization:salt_dust",
 "modern_industrialization:salt_ore",
 "modern_industrialization:silver_block",
 "modern_industrialization:silver_dust",
 "modern_industrialization:silver_ingot",
 "modern_industrialization:silver_nugget",
 "modern_industrialization:silver_ore",
 "modern_industrialization:silver_plate",
 "modern_industrialization:steel_block",
 "modern_industrialization:steel_dust",
 "modern_industrialization:steel_ingot",
 "modern_industrialization:steel_nugget",
 "modern_industrialization:steel_plate",
 "modern_industrialization:sulfur_dust",
 "modern_industrialization:tin_block",
 "modern_industrialization:tin_dust",
 "modern_industrialization:tin_ingot",
 "modern_industrialization:tin_nugget",
 "modern_industrialization:tin_ore",
 "modern_industrialization:tin_plate",
 "modern_industrialization:titanium_block",
 "modern_industrialization:titanium_dust",
 "modern_industrialization:titanium_ingot",
 "modern_industrialization:titanium_nugget",
 "modern_industrialization:titanium_ore",
 "modern_industrialization:titanium_plate",
 "modern_industrialization:tungsten_block",
 "modern_industrialization:tungsten_dust",
 "modern_industrialization:tungsten_ingot",
 "modern_industrialization:tungsten_nugget",
 "modern_industrialization:tungsten_ore",
 "modern_industrialization:tungsten_plate",
 "mythicmetals:bronze_block",
 "mythicmetals:bronze_ingot",
 "mythicmetals:bronze_nugget",
 "mythicmetals:copper_ingot",
 "mythicmetals:copper_nugget",
 "mythicmetals:manganese_block",
 "mythicmetals:manganese_ingot",
 "mythicmetals:manganese_nugget",
 "mythicmetals:platinum_ingot",
 "mythicmetals:platinum_nugget",
 "mythicmetals:platinum_ore",
 "mythicmetals:silver_block",
 "mythicmetals:silver_ingot",
 "mythicmetals:silver_nugget",
 "mythicmetals:silver_ore",
 "mythicmetals:steel_ingot",
 "mythicmetals:steel_nugget",
 "mythicmetals:tin_block",
 "mythicmetals:tin_ingot",
 "mythicmetals:tin_nugget",
 "mythicmetals:tin_ore",
 "resourceful_tools:copper_nugget",
 "resourceful_tools:powder_carbon",
 "resourceful_tools:powder_copper",
 "resourceful_tools:powder_gold",
 "resourceful_tools:powder_iron",
 "resourceful_tools:powder_steel",
 "resourceful_tools:powder_tin",
 "valley:bread_dough",
 "valley:copper_nugget",
 "valley:onion",
 "valley:salt",
 "valley:tomato",
 "valley:raw_bacon",
 "veggie_way:dough"
 ];
onEvent("rei.hide.items", event => {
    DELETED_ITEMS.forEach(id => event.hide(id));
});