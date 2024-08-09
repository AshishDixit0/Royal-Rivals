export type AuthStackParamList = {
  LoginScreen: undefined;
  SignUp: undefined;
  OTP: undefined;
};

export type AccountStackParamList = {
  AboutUs: { logoAlignment: 'left' | 'right' | string };
  Details: { logoAlignment: 'left' | 'center' | undefined };
  KYC: undefined;
  Settings: undefined;
  Wallet: undefined;
  TransactionHistory: undefined;
  Account:  { navigation: any, title: string, showBarsIcon: boolean | string | any };
  Withdraw: undefined;
  Deposit: undefined;
  Home: undefined;
  GameSelect:undefined;
  LudoScreen:undefined;
  Profile: undefined;
  AccountTabs: undefined;
}
