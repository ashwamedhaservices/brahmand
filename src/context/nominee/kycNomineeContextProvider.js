import { createContext } from 'react';
import { getAccountsKyc, postAccountsKyc, putAccountsKyc } from '../../service/ash_mlm';

export const KycNomineeContext = createContext();

export const KycNomineeContextProvider = (props) => {
  // TODO: Error Case Needs to be handled
  const _fetchKycData = async () => {
    try {
      const kyc = await getAccountsKyc();
      console.log("[KycNomineeContextProvider]::[_fetchKycData]::", kyc);
      return kyc;
    } catch (error) {
      console.error("[KycNomineeContextProvider]::[_fetchKycData]::err", error);
      return {};
    }
  };

  const _createKyc = async (kyc) => {
    /** Cases
     * 1.) KYC Already exist
    */
    try {
      const payload = { kyc: kyc };
      console.log(`[KycNomineeContextProvider]::[_createKyc]:: Enter ${payload}`);
      const data = await postAccountsKyc(payload);
      console.log("[KycNomineeContextProvider]::[_createKyc]::", data);
      return data
    } catch (error) {
      console.error("[KycNomineeContextProvider]::[_createKyc]::err", error);
      return {}
    }
  };

  const _updateKyc = async (kyc) => {
    try {
      const payload = { kyc: kyc };
      console.log(`[KycNomineeContextProvider]::[_updateKyc]:: Enter ${payload}`);
      const data = await putAccountsKyc(payload, kyc.id);
      console.log(`[KycNomineeContextProvider]::[_updateKyc]:: ${data}`);
      return data
    } catch (error) {
      console.error("[KycNomineeContextProvider]::[_updateKyc]::err", error);
      return {}
    }
  };

  return <KycNomineeContext.Provider
   value={{
     fetchKycData: _fetchKycData,
     createKyc: _createKyc,
     updateKyc: _updateKyc,
   }}>
    {props.children}
  </KycNomineeContext.Provider>
}