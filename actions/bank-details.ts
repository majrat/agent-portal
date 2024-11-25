"use server";
import { connectDB } from "lib/mongodb";
import bank_details from "models/bank-details";

export const setBankDetails = async (values: any) => {
  const {
    beneficiary_payee_name,
    beneficiary_payee_address,
    bank_account_no,
    bank_name,
    bank_address,
    branch,
    swift_code,
    iban,
    currency,
    user_id,
  } = values;

  try {
    await connectDB();

    const addBankDetailsFound = await bank_details.findOne({
      user_id,
    });
    if (addBankDetailsFound) {
      await bank_details.updateOne(
        { user_id },
        {
          $set: {
            beneficiary_payee_name,
            beneficiary_payee_address,
            bank_account_no,
            bank_name,
            bank_address,
            branch,
            swift_code,
            iban,
            currency,
            status: 1,
          },
        },
        { upsert: true }
      );
    } else {
      const newBankDetails = new bank_details({
        beneficiary_payee_name,
        beneficiary_payee_address,
        bank_account_no,
        bank_name,
        bank_address,
        branch,
        swift_code,
        iban,
        currency,
        user_id,
        status: 1,
      });
      await newBankDetails.save();
    }
    return {
      success: "success",
      message: "BankDetails saved",
    };
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};

export const getBankDetails = async (id: any) => {
  try {
    await connectDB();
    const BankDetailsFounds = await bank_details.findOne({
      user_id: id,
    });
    if (BankDetailsFounds) {
      const BankDetailsFound = JSON.parse(JSON.stringify(BankDetailsFounds));
      return {
        success: "success",
        message: "BankDetails saved",
        data: BankDetailsFound,
      };
    }
    throw new Error("BankDetails Data Not Found");
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};
