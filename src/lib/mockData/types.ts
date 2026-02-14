export type Race = {
    name: string;
    description: string;
    traits: string[];
  }

export type DieType = "d4" | "d6" | "d8" | "d10" | "d12";

export type Attribute = {
    id: string; // например: "agility", "smarts" и т.д.
    name: string;
    description: string;
    startingDie: DieType;
    progression: DieType[];
    mechanicalImpact?: string; // дополнительное механическое влияние
  }

  
export type AttributeId = "agility" | "smarts" | "spirit" | "strength" | "vigor";

export type Skill = {
    id: string;
    name: string;
    description: string;
    linkedAttribute: AttributeId;
    progression: DieType[];
    hasSpecialties?: boolean; // Для навыков с подкатегориями (Знание, Языки)
    specialtiesExamples?: string[]; // Примеры специализаций
    notes?: string; // Дополнительные правила/нюансы
  }

export  type Hindrance = {
  id: string;
  name: string;
  size: "minor" | "major"; // мелкий / крупный
  description: string;
  mechanicalEffects: {
    // Штрафы/бонусы к характеристикам (отрицательные = штраф)
    attributeModifiers?: Partial<Record<AttributeId, number>>;
    
    // Штрафы к проверкам в определённых ситуациях
    checkPenalties?: Array<{
      situation: string; // описание ситуации
      penalty: number;   // величина штрафа
    }>;
    
    // Особые механические правила
    specialRules?: string[];
    
    // Влияние на ресурсы (фишки, деньги и т.д.)
    resourceEffects?: Array<{
      type: "bennies" | "money" | "pace" | "skillPoints";
      effect: string;
    }>;
  };
  notes?: string;
}

export type EdgeRequirementsCheck = {
    meetsRank: boolean;
    meetsAttributes: boolean;
    meetsSkills: boolean;
    meetsPrerequisites: boolean;
    meetsSpecial: boolean;
    canTake: boolean;
    missingRequirements: string[];
  }

  export type Edge ={
    id: string;
    name: string;
    description: string;
    category: 
      | "background"      // Предыстория
      | "combat"          // Боевые
      | "leadership"      // Лидерские
      | "weird"           // Потусторонние
      | "professional"    // Профессиональные
      | "supernatural"    // Сверхъестественные
      | "social"          // Социальные
      | "legendary";      // Легендарные
    rankRequirement: Rank;
    attributeRequirements?: AttributeRequirement[];
    skillRequirements?: SkillRequirement[];
    prerequisiteEdges?: string[]; // Требуемые черты (для усиленных версий)
    specialRequirements?: string[]; // Особые условия (Мистический дар и т.д.)
    isEnhancedVersion?: boolean; // Является ли усиленной версией (+)
    baseEdgeId?: string; // ID базовой черты (для версий +)
    mechanicalEffects: string[];
    notes?: string;
  }


type SkillId = 
  | "fighting" | "knowledge" | "shooting" | "notice" | "stealth" | "healing"
  | "survival" | "tracking" | "intimidation" | "gambling" | "riding" | "lockpicking"
  | "driving" | "climbing" | "taunt" | "investigation" | "repair" | "piloting"
  | "swimming" | "boating" | "persuasion" | "streetwise" | "throwing";

export type Rank = "novice" | "seasoned" | "veteran" | "hero" | "legend";

interface AttributeRequirement {
  attribute: AttributeId;
  minDie: DieType;
}

interface SkillRequirement {
  skill: SkillId;
  minDie: DieType;
  // Для Знания с подкатегориями
  specialty?: string;
}
