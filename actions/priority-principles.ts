"use server";
import { connectDB } from "lib/mongodb";
import priority_principles from "models/priority-principles";

export const setAntiCorruptionStatementAndPolicy = async (values: any) => {
  const { user_id } = values;

  try {
    await connectDB();
    await priority_principles.updateOne(
      {
        user_id,
      },
      {
        $set: {
          principle: {
            one_compliance: {
              anti_corruption_statement_and_policy: true,
            },
          },
        },
      },
      { upsert: true }
    );
    return {
      success: "success",
      message: "Anti Corruption Statement And Policy saved",
    };
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};

export const setAntiSlaveryHumanTraffickingAndForcedLaborPolicy = async (
  values: any
) => {
  const { user_id } = values;

  try {
    await connectDB();
    await priority_principles.updateOne(
      {
        user_id,
      },
      {
        $set: {
          "principle.two_humanities.anti_slavery_human_trafficking_and_forced_labor_policy":
            true,
        },
      },
      { upsert: true }
    );
    return {
      success: "success",
      message: "Anti Slavery Human Trafficking And Forced LaborPolicy saved",
    };
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};

export const setHealthSafetySecurityAndEnvironmentalPolicy = async (
  values: any
) => {
  const { user_id } = values;

  try {
    await connectDB();
    await priority_principles.updateOne(
      {
        user_id,
      },
      {
        $set: {
          "principle.two_humanities.health_safety_security_and_environmental_policy":
            true,
        },
      },
      { upsert: true }
    );
    return {
      success: "success",
      message: "Health Safety Security And Environmental Policy saved",
    };
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};

export const setHumanRightsAndModernSlaveryStatement = async (values: any) => {
  const { user_id } = values;

  try {
    await connectDB();
    await priority_principles.updateOne(
      {
        user_id,
      },
      {
        $set: {
          "principle.two_humanities.human_rights_and_modern_slavery_statement":
            true,
        },
      },
      { upsert: true }
    );
    return {
      success: "success",
      message: "Human Rights And Modern Slavery Statement saved",
    };
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};

export const setWhistleblowerPolicy = async (values: any) => {
  const { user_id } = values;

  try {
    await connectDB();
    await priority_principles.updateOne(
      {
        user_id,
      },
      {
        $set: {
          "principle.two_humanities.whistleblower_policy": true,
        },
      },
      { upsert: true }
    );
    return {
      success: "success",
      message: "Whistleblower Policy saved",
    };
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};

export const setInternationalStandardForSustainableProcurement = async (
  values: any
) => {
  const { user_id } = values;

  try {
    await connectDB();
    await priority_principles.updateOne(
      {
        user_id,
      },
      {
        $set: {
          "principle.three_sustainability.international_standard_for_sustainable_procurement":
            true,
        },
      },
      { upsert: true }
    );
    return {
      success: "success",
      message: "International Standard For Sustainable Procurement saved",
    };
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};

export const setSustainableProcurementPolicy = async (values: any) => {
  const { user_id } = values;

  try {
    await connectDB();
    await priority_principles.updateOne(
      {
        user_id,
      },
      {
        $set: {
          "principle.three_sustainability.sustainable_procurement_policy": true,
        },
      },
      { upsert: true }
    );
    return {
      success: "success",
      message: "Sustainable Procurement Policy saved",
    };
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};

export const setSupplyChainManagementPolicy = async (values: any) => {
  const { user_id } = values;

  try {
    await connectDB();
    await priority_principles.updateOne(
      {
        user_id,
      },
      {
        $set: {
          "principle.four_supplier_code_of_conduct.supply_chain_management_policy":
            true,
        },
      },
      { upsert: true }
    );
    return {
      success: "success",
      message: "Supply Chain Management Policy saved",
    };
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};

export const getPriorityPrinciples = async (id: any) => {
  try {
    await connectDB();
    const PriorityPrinciplesFounds = await priority_principles.findOne({
      user_id: id,
    });
    if (PriorityPrinciplesFounds) {
      const PriorityPrinciplesFound = JSON.parse(
        JSON.stringify(PriorityPrinciplesFounds)
      );
      return {
        success: "success",
        message: "Priority principles saved",
        data: PriorityPrinciplesFound,
      };
    }
    throw new Error("Not Agreed to Priority Principles");
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};
