import { createContext } from 'react';
import { getAccountsKycedNominees, postAccountsKyc, postAccountsKycedNominees, putAccountsKyc, putAccountsKycedNominees } from '../../service/ash_mlm';

export const KycNomineeContext = createContext();

export const KycNomineeContextProvider = (props) => {
  // TODO: Error Case Needs to be handled
  const _fetchKycNomineeData = async (kycId) => {
    try {
      const nominees = await getAccountsKycedNominees(kycId);
      console.log("[KycNomineeContextProvider]::[_fetchKycNomineeData]::", nominees);
      return nominees;
    } catch (error) {
      console.error("[KycNomineeContextProvider]::[_fetchKycNomineeData]::err", error);
      return {};
    }
  };

  const _createKycNominee = async (nominee, kycId) => {
    /** Cases
     * 1.) KYC Already exist
    */
    try {
      const payload = { nominee: nominee };
      console.log(`[KycNomineeContextProvider]::[_createKycNominee]:: Enter ${payload}`);
      const data = await postAccountsKycedNominees(payload, kycId);
      console.log("[KycNomineeContextProvider]::[_createKycNominee]::", data);
      return data
    } catch (error) {
      console.error("[KycNomineeContextProvider]::[_createKycNominee]::err", error);
      return {}
    }
  };

  const _updateKycNominee = async (nominee) => {
    try {
      const payload = { nominee: nominee };
      console.log(`[KycNomineeContextProvider]::[_updateKycNominee]:: Enter ${payload}`);
      const data = await putAccountsKycedNominees(payload, nominee.id);
      console.log('[KycNomineeContextProvider]::[_updateKycNominee]:: ', data);
      return data
    } catch (error) {
      console.error("[KycNomineeContextProvider]::[_updateKycNominee]::err", error);
      return {}
    }
  };

  return <KycNomineeContext.Provider
   value={{
     fetchKycNomineeData: _fetchKycNomineeData,
     createKycNominee: _createKycNominee,
     updateKycNominee: _updateKycNominee,
   }}>
    {props.children}
  </KycNomineeContext.Provider>
}