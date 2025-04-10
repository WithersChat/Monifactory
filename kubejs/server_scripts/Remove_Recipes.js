/* Removes existing recipes */

ServerEvents.recipes(event => {
    // Snad
    event.remove("snad:snadrecipe")
    event.remove("snad:red_snad")

    // Extended Crafting
    event.remove({ output: [Item.of("extendedcrafting:recipe_maker", '{Shapeless:0b,Type:"CraftTweaker"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:tin"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:copper"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:iron"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:coal"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:steel"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:invar"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:silver"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:platinum"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:lead"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:glowstone"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:lapis_lazuli"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:electrum"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:redstone"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:aluminum"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:diamond"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:nickel"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:gold"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:emerald"}'), Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:bronze"}')] })
    event.remove({ output: ["extendedcrafting:enhanced_ender_catalyst", "extendedcrafting:enhanced_redstone_catalyst", "extendedcrafting:enhanced_redstone_component", "extendedcrafting:enhanced_ender_component", "extendedcrafting:ender_component", "extendedcrafting:black_iron_block", "extendedcrafting:black_iron_ingot", "extendedcrafting:redstone_ingot_block", "extendedcrafting:redstone_ingot", "extendedcrafting:enhanced_redstone_ingot_block", "extendedcrafting:enhanced_redstone_ingot", "extendedcrafting:ender_ingot_block", "extendedcrafting:ender_ingot", "extendedcrafting:enhanced_ender_ingot_block", "extendedcrafting:enhanced_ender_ingot", "extendedcrafting:ender_star_block", "extendedcrafting:ender_star", "extendedcrafting:flux_star_block", "extendedcrafting:flux_star", "extendedcrafting:frame", "extendedcrafting:compressor", "extendedcrafting:ender_alternator", "extendedcrafting:ender_crafter", "extendedcrafting:auto_ender_crafter", "extendedcrafting:flux_alternator", "extendedcrafting:flux_crafter", "extendedcrafting:auto_flux_crafter", "extendedcrafting:black_iron_slate", "extendedcrafting:ender_catalyst", "extendedcrafting:pedestal"] })
    event.remove({ output: ["extendedcrafting:black_iron_nugget", "extendedcrafting:redstone_nugget", "extendedcrafting:enhanced_redstone_nugget", "extendedcrafting:ender_nugget", "extendedcrafting:enhanced_ender_nugget"] })

    // GT
    event.remove({ output: "gtceu:ender_fluid_link_cover" })
    event.remove({ id: "minecraft:lapis_lazuli_from_smelting_deepslate_lapis_ore" })
    event.remove({ id: "gtceu:mixer/rhodium_plated_palladium" })

    // FIXME will get fixed
    event.remove({ id: "gtceu:centrifuge/decomposition_centrifuging__fireclay" })

    // Thermal
    event.remove({ output: ["thermal:dynamo_stirling", "thermal:dynamo_lapidary", "thermal:dynamo_disenchantment", "thermal:constantan_coin"] })
    event.remove({ id: /thermal:parts.*_gear/ })
    event.remove({ output: "thermal:rubber" })
    event.remove({ output: "thermal:cured_rubber" })
    event.remove({ input: "forge:nuggets/netherite" })
    event.remove({ id: "thermal:gunpowder_4" })
    event.remove({ id: "thermal:device_xp_condenser" })

    // Systeams
    event.remove({ output: ["systeams:numismatic_boiler", "systeams:stirling_boiler", "systeams:magmatic_boiler", "systeams:compression_boiler", "systeams:gourmand_boiler", "systeams:lapidary_boiler", "systeams:disenchantment_boiler"] })
    event.remove([{ id: "systeams:boiling/steam" }, { id: "systeams:boiling/steamier"}, { id: "systeams:boiling/steamiest" }, { id: "systeams:boiling/steamiester"}])
    event.remove([{ id: "systeams:steam_dynamo/steamier" }, { id: "systeams:steam_dynamo/steamiest" }, { id: "systeams:steam_dynamo/steamiester" }, { id: "systeams:steam_dynamo/steamiestest" }])

    // Redstone arsenal
    event.remove({ id: "redstone_arsenal:smelting/flux_ingot_from_dust_smelting" })
    event.remove({ id: "redstone_arsenal:smelting/flux_ingot_from_dust_blasting" })
    event.remove({ id: "redstone_arsenal:materials/flux_ingot_fire_charge" })
    event.remove({ id: "redstone_arsenal:materials/flux_ingot_fire_charge_from_dust" })
    event.remove({ id: "redstone_arsenal:storage/flux_metal_block" })
    event.remove({ id: "redstone_arsenal:storage/flux_ingot_from_block" })

    // Ad Astra
    event.remove({ output: ["ad_astra:desh_fluid_pipe", "ad_astra:ostrum_fluid_pipe", "ad_astra:photovoltaic_etrium_cell", "ad_astra:photovoltaic_vesnium_cell", "ad_astra:oxygen_gear", "ad_astra:engine_frame", "ad_astra:fan", "ad_astra:etrionic_capacitor", "ad_astra:energizer", "ad_astra:steel_cable", "ad_astra:desh_cable", "ad_astra:cable_duct", "ad_astra:fluid_pipe_duct", "ad_astra:coal_generator", "ad_astra:compressor", "ad_astra:etrionic_blast_furnace", "ad_astra:fuel_refinery", "ad_astra:solar_panel", "ad_astra:water_pump", "ad_astra:energizer", "ad_astra:cryo_freezer"] })
    event.remove({ id: /refining_oil/ })
    event.remove({ id: /plate_from_compressing/ })
    event.remove({ id: /steel_ingot_from_alloying/ })

    // ArmorPlus
    event.remove({ output: ["armorplus:the_ultimate_material"] })

    // Misc broken recipes
    event.remove({ id: "minecraft:netherite_spikes_smithing" })

    // Angel Ring
    event.remove({ id: "better_angel_ring:angel_ring" })
    event.remove({ id: "better_angel_ring:ring" })

    // AA
    event.remove({ output: ["gtceu:flawless_palis_empowered_gem", "gtceu:flawless_diamatine_empowered_gem", "gtceu:flawless_emeradic_empowered_gem", "gtceu:restonia_empowered_rod", "gtceu:enori_empowered_rod", "gtceu:void_empowered_rod", "gtceu:palis_empowered_rod", "gtceu:diamatine_empowered_rod", "gtceu:emeradic_empowered_rod", "gtceu:exquisite_restonia_empowered_gem", "gtceu:exquisite_enori_empowered_gem", "gtceu:exquisite_void_empowered_gem", "gtceu:exquisite_palis_empowered_gem", "gtceu:exquisite_diamatine_empowered_gem", "gtceu:exquisite_emeradic_empowered_gem", "gtceu:restonia_empowered_dust", "gtceu:enori_empowered_dust", "gtceu:void_empowered_dust", "gtceu:palis_empowered_dust", "gtceu:diamatine_empowered_dust", "gtceu:emeradic_empowered_dust", "gtceu:tiny_restonia_empowered_dust", "gtceu:tiny_enori_empowered_dust", "gtceu:tiny_void_empowered_dust", "gtceu:tiny_palis_empowered_dust", "gtceu:tiny_diamatine_empowered_dust", "gtceu:tiny_emeradic_empowered_dust", "gtceu:flawless_restonia_empowered_gem", "gtceu:flawless_enori_empowered_gem", "gtceu:flawless_void_empowered_gem"] })
    event.remove({ output: ["gtceu:small_emeradic_empowered_dust", "gtceu:small_diamatine_empowered_dust", "gtceu:small_palis_empowered_dust", "gtceu:small_void_empowered_dust", "gtceu:small_enori_empowered_dust", "gtceu:small_restonia_empowered_dust"] })
    event.remove({ output: ["gtceu:exquisite_diamatine_gem", "gtceu:diamatine_dust", "gtceu:tiny_diamatine_dust", "gtceu:flawless_diamatine_gem", "gtceu:diamatine_rod", "gtceu:diamatine_plate", "gtceu:small_diamatine_dust", "gtceu:exquisite_void_gem", "gtceu:void_dust", "gtceu:tiny_void_dust", "gtceu:flawless_void_gem", "gtceu:void_rod", "gtceu:void_plate", "gtceu:small_void_dust", "gtceu:exquisite_emeradic_gem", "gtceu:emeradic_dust", "gtceu:tiny_emeradic_dust", "gtceu:flawless_emeradic_gem", "gtceu:emeradic_rod", "gtceu:emeradic_plate", "gtceu:small_emeradic_dust", "gtceu:exquisite_enori_gem", "gtceu:enori_dust", "gtceu:tiny_enori_dust", "gtceu:flawless_enori_gem", "gtceu:enori_rod", "gtceu:enori_plate", "gtceu:small_enori_dust"] })
    event.remove({ output: ["gtceu:exquisite_restonia_gem", "gtceu:restonia_dust", "gtceu:tiny_restonia_dust", "gtceu:flawless_restonia_gem", "gtceu:restonia_rod", "gtceu:restonia_plate", "gtceu:small_restonia_dust", "gtceu:exquisite_palis_gem", "gtceu:palis_dust", "gtceu:tiny_palis_dust", "gtceu:flawless_palis_gem", "gtceu:palis_rod", "gtceu:palis_plate", "gtceu:small_palis_dust"] })

    // NC
    event.remove(/nuclearcraft:fusion.*/)
    event.remove(/nuclearcraft:.*electromagnet.*/)
    event.remove({ output: /water_collector/ });
    event.remove({ output: ["nuclearcraft:tough_alloy_ingot"] });
    // JAVD
    event.remove({ output: ["javd:portal_block"] });

    // Hides useless items
    event.remove({ output: ["ae2:vibration_chamber", "hammerlib:gears/netherite", "hammerlib:gears/gold", "hammerlib:gears/copper"] })

    // Iron Furnace
    event.remove({ output: ["ironfurnaces:million_furnace"] })
    event.remove({ output: ["ironfurnaces:crystal_furnace", "ironfurnaces:emerald_furnace", "ironfurnaces:item_spooky", "ironfurnaces:item_xmas", "ironfurnaces:item_copy", "ironfurnaces:item_linker", "ironfurnaces:rainbow_core", "ironfurnaces:rainbow_plating", "ironfurnaces:rainbow_coal", "ironfurnaces:upgrade_iron", "ironfurnaces:upgrade_gold", "ironfurnaces:upgrade_diamond", "ironfurnaces:upgrade_emerald", "ironfurnaces:upgrade_obsidian", "ironfurnaces:upgrade_crystal", "ironfurnaces:upgrade_netherite", "ironfurnaces:upgrade_copper", "ironfurnaces:upgrade_obsidian2", "ironfurnaces:upgrade_silver", "ironfurnaces:upgrade_obsidian2", "ironfurnaces:upgrade_iron2", "ironfurnaces:upgrade_gold2", "ironfurnaces:upgrade_silver2", "ironfurnaces:allthemodium_furnace", "ironfurnaces:vibranium_furnace", "ironfurnaces:unobtainium_furnace", "ironfurnaces:upgrade_allthemodium", "ironfurnaces:upgrade_vibranium", "ironfurnaces:upgrade_unobtainium", "ironfurnaces:item_heater", "ironfurnaces:augment_blasting", "ironfurnaces:augment_smoking", "ironfurnaces:heater", "ironfurnaces:augment_generator"] })

    event.remove({ output: ["sophisticatedstorage:storage_io", "sophisticatedstorage:storage_input", "sophisticatedstorage:storage_output"] });

    // dml
    event.remove({ output: ["hostilenetworks:twilight_prediction"] })

    // EnderIO
    event.remove({ output: ["enderio:conduit", "enderio:energy_conduit", "enderio:plant_matter_green", "enderio:plant_matter_brown", "enderio:clayed_glowstone", "enderio:flour", "enderio:organic_green_dye", "enderio:organic_brown_dye", "enderio:industrial_insulation_block"] })

    // EnderIO (grinding balls)
    event.remove({ output: ["enderio:soularium_grinding_ball", "enderio:conductive_alloy_grinding_ball", "enderio:pulsating_alloy_grinding_ball", "enderio:redstone_alloy_grinding_ball", "enderio:energetic_alloy_grinding_ball", "enderio:vibrant_alloy_grinding_ball", "enderio:copper_alloy_grinding_ball", "enderio:dark_steel_grinding_ball", "enderio:end_steel_grinding_ball"] })

    // TelePastries
    event.remove({ output: ["telepastries:lost_city_cake", "telepastries:custom_cake2", "telepastries:custom_cake3", "telepastries:twilight_cake"] })

    // Jetpacks
    // AA
    event.remove({ output: ["gtceu:flawless_palis_empowered_gem", "gtceu:flawless_diamatine_empowered_gem", "gtceu:flawless_emeradic_empowered_gem", "gtceu:restonia_empowered_rod", "gtceu:enori_empowered_rod", "gtceu:void_empowered_rod", "gtceu:palis_empowered_rod", "gtceu:diamatine_empowered_rod", "gtceu:emeradic_empowered_rod", "gtceu:exquisite_restonia_empowered_gem", "gtceu:exquisite_enori_empowered_gem", "gtceu:exquisite_void_empowered_gem", "gtceu:exquisite_palis_empowered_gem", "gtceu:exquisite_diamatine_empowered_gem", "gtceu:exquisite_emeradic_empowered_gem", "gtceu:restonia_empowered_dust", "gtceu:enori_empowered_dust", "gtceu:void_empowered_dust", "gtceu:palis_empowered_dust", "gtceu:diamatine_empowered_dust", "gtceu:emeradic_empowered_dust", "gtceu:tiny_restonia_empowered_dust", "gtceu:tiny_enori_empowered_dust", "gtceu:tiny_void_empowered_dust", "gtceu:tiny_palis_empowered_dust", "gtceu:tiny_diamatine_empowered_dust", "gtceu:tiny_emeradic_empowered_dust", "gtceu:flawless_restonia_empowered_gem", "gtceu:flawless_enori_empowered_gem", "gtceu:flawless_void_empowered_gem"] })
    event.remove({ output: ["gtceu:small_emeradic_empowered_dust", "gtceu:small_diamatine_empowered_dust", "gtceu:small_palis_empowered_dust", "gtceu:small_void_empowered_dust", "gtceu:small_enori_empowered_dust", "gtceu:small_restonia_empowered_dust"] })
    event.remove({ output: ["gtceu:exquisite_diamatine_gem", "gtceu:diamatine_dust", "gtceu:tiny_diamatine_dust", "gtceu:flawless_diamatine_gem", "gtceu:diamatine_rod", "gtceu:diamatine_plate", "gtceu:small_diamatine_dust", "gtceu:exquisite_void_gem", "gtceu:void_dust", "gtceu:tiny_void_dust", "gtceu:flawless_void_gem", "gtceu:void_rod", "gtceu:void_plate", "gtceu:small_void_dust", "gtceu:exquisite_emeradic_gem", "gtceu:emeradic_dust", "gtceu:tiny_emeradic_dust", "gtceu:flawless_emeradic_gem", "gtceu:emeradic_rod", "gtceu:emeradic_plate", "gtceu:small_emeradic_dust", "gtceu:exquisite_enori_gem", "gtceu:enori_dust", "gtceu:tiny_enori_dust", "gtceu:flawless_enori_gem", "gtceu:enori_rod", "gtceu:enori_plate", "gtceu:small_enori_dust"] })
    event.remove({ output: ["gtceu:exquisite_restonia_gem", "gtceu:restonia_dust", "gtceu:tiny_restonia_dust", "gtceu:flawless_restonia_gem", "gtceu:restonia_rod", "gtceu:restonia_plate", "gtceu:small_restonia_dust", "gtceu:exquisite_palis_gem", "gtceu:palis_dust", "gtceu:tiny_palis_dust", "gtceu:flawless_palis_gem", "gtceu:palis_rod", "gtceu:palis_plate", "gtceu:small_palis_dust"] })


    // NuclearCraft

    event.remove({ output: ["nuclearcraft:rock_crusher", "nuclearcraft:decay_hastener", "nuclearcraft:irradiator", "nuclearcraft:nuclear_furnace", "nuclearcraft:extractor", "nuclearcraft:electrolyzer", "nuclearcraft:pressurizer", "nuclearcraft:alloy_smelter", "nuclearcraft:centrifuge", "nuclearcraft:manufactory", "nuclearcraft:gas_scrubber", "nuclearcraft:fluid_enricher", "nuclearcraft:isotope_separator", "nuclearcraft:fluid_infuser", "nuclearcraft:chemical_reactor", "nuclearcraft:analyzer", "nuclearcraft:ingot_former", "nuclearcraft:pump", "nuclearcraft:fuel_reprocessor", "nuclearcraft:leacher", "nuclearcraft:crystallizer", "nuclearcraft:assembler", "nuclearcraft:steam_turbine", "nuclearcraft:melter"] })
    event.remove({ output: ["nuclearcraft:nitrogen_collector", "nuclearcraft:compact_nitrogen_collector", "nuclearcraft:lava_collector", "nuclearcraft:dense_nitrogen_collector", "nuclearcraft:compact_helium_collector", "nuclearcraft:helium_collector", "nuclearcraft:dense_helium_collector"] })
    event.remove({ output: ["nuclearcraft:magnesium_deepslate_ore", "nuclearcraft:thorium_deepslate_ore", "nuclearcraft:uranium_deepslate_ore", "nuclearcraft:magnesium_ore", "nuclearcraft:boron_deepslate_ore", "nuclearcraft:cobalt_ore", "nuclearcraft:platinum_deepslate_ore", "nuclearcraft:silver_deepslate_ore", "nuclearcraft:lead_ore", "nuclearcraft:lithium_ore", "nuclearcraft:thorium_ore", "nuclearcraft:tin_ore", "nuclearcraft:cobalt_deepslate_ore", "nuclearcraft:silver_ore", "nuclearcraft:uranium_ore", "nuclearcraft:zinc_ore", "nuclearcraft:boron_ore", "nuclearcraft:lithium_deepslate_ore"] })
    event.remove({ output: ["nuclearcraft:foursmore", "nuclearcraft:evenmoresmore", "nuclearcraft:moresmore", "nuclearcraft:smore"] })
    event.remove({ output: ["nuclearcraft:quantum_flux_regulator", "nuclearcraft:fission_reactor_irradiation_chamber", "nuclearcraft:chamber_port", "nuclearcraft:chamber_terminal", "nuclearcraft:event_horizon_stabilizer", "nuclearcraft:quantum_transformer", "nuclearcraft:black_hole", "nuclearcraft:neutronium_frame", "nuclearcraft:photon_concentrator", "nuclearcraft:redstone_dimmer"] })
    event.remove({ id: "minecraft:nuclearcraft_hard_carbon_dust" })
    // Nugget fix
    // event.remove({id: 'minecraft:iron_nugget'})
    // event.remove({id: 'minecraft:gold_nugget'})
    // event.remove({id: 'minecraft:kjs/iron_nugget'})
    // event.remove({id: 'minecraft:kjs/gold_nugget'})

    // Posttank stuff
    event.remove({ id: /gtceu:uxv/ })
    event.remove({ id: /gtceu:opv/ })
    event.remove({ id: /gtmutils:uxv/ })
    event.remove({ id: /gtmutils:opv/ })
    event.remove({ id: "gtceu:shaped/max_machine_hull" })

    // Default Fluxed Electrum recipe (Redstone Arsenal)
    event.remove({ id: "redstone_arsenal:materials/flux_dust" })

    // PEX
    event.remove({ output: ["packagedexcrafting:flux_crafter", "packagedexcrafting:basic_crafter"] })

    // Shrink
    event.remove({ output: "shrink:shrinking_device" })
})
