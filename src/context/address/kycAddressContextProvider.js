import { createContext } from 'react';
import { getAccountsKyc, postAccountsKyc, putAccountsKyc } from '../../service/ash_mlm';

export const KycAddressContext = createContext();

export const KycAddressContextProvider = (props) => {
  // TODO: Error Case Needs to be handled
  const _fetchKycData = async () => {
    try {
      const kyc = await getAccountsKyc();
      console.log("[KycAddressContextProvider]::[_fetchKycData]::", kyc);
      return kyc;
    } catch (error) {
      console.error("[KycAddressContextProvider]::[_fetchKycData]::err", error);
      return {};
    }
  };

  const _createKyc = async (kyc) => {
    /** Cases
     * 1.) KYC Already exist
    */
    try {
      const payload = { kyc: kyc };
      console.log(`[KycAddressContextProvider]::[_createKyc]:: Enter ${payload}`);
      const data = await postAccountsKyc(payload);
      console.log("[KycAddressContextProvider]::[_createKyc]::", data);
      return data
    } catch (error) {
      console.error("[KycAddressContextProvider]::[_createKyc]::err", error);
      return {}
    }
  };

  const _updateKyc = async (kyc) => {
    try {
      const payload = { kyc: kyc };
      console.log(`[KycAddressContextProvider]::[_updateKyc]:: Enter ${payload}`);
      const data = await putAccountsKyc(payload, kyc.id);
      console.log(`[KycAddressContextProvider]::[_updateKyc]:: ${data}`);
      return data
    } catch (error) {
      console.error("[KycAddressContextProvider]::[_updateKyc]::err", error);
      return {}
    }
  };

  return <KycAddressContext.Provider
   value={{
     fetchKycData: _fetchKycData,
     createKyc: _createKyc,
     updateKyc: _updateKyc,
   }}>
    {props.children}
  </KycAddressContext.Provider>
}