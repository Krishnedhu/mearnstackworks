class Bank{
    createAccount(acno,pName,pan,branch,phone,bal){
       this.accountNumber=acno;
       this.personName=pName;
       this.pan=pan;
       this.branch=branch;
       this.phone=phone;
       this.bal=bal; 

    }
    withdraw(amount){
        if(amount>this.bal){
            console.log(`transaction failed insufficient blance on ur ${this.accountNumber}`);
        }
        else{
            this.bal-=amount;
             console.log(`your account ${this.accountNumber} has been debited with amount ${amount} your available bal ${this.bal}`)
        

        }

    }
    deposit(amount){
        this.bal+=amount;
        console.log(`your account ${this.accountNumber} has been credited with amount ${amount} your available bal ${this.bal}`);

    }
    balanceEnquiry(){
        console.log(`your available bal=${this.bal}`);
        

    }
}

var bank=new Bank();
bank.createAccount(1010,"Arjun",1234,"kakkanad",7840858690,5000)
// bank.withdraw(1000)
bank.deposit(2000)
bank.balanceEnquiry()