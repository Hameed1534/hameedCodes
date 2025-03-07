import java.util.*;
class atmMachine{
    Scanner sc=new Scanner(System.in);
    public float bal=0;
    public void verify(String n){
        if(n.length()!=4||!n.matches("[0-9]+")){
            System.out.println("Please Enter a valid Pin");
        }else{
            menu();
        }
    }

    public void menu()
    {
        
        while(true){
            // System.out.println();
            System.out.println("\nPlease Select Your Transaction");
            System.out.println("1.Check Balance");
            System.out.println("2.Cash Deposit");
            System.out.println("3.Withdrawl");
            System.out.println("4.Exit");
            System.out.println();

            int choice=sc.nextInt();
            if(choice==1){
                checkBal();
            }else if(choice==2){
                deposit(sc);
            }else if(choice==3){
                withDraw(sc);
            }else if(choice==4){
                break;
            }
            else{
                System.out.println("Please select a valid choice");
                menu();
            }
            System.out.println("Do You Want to continue ? true/false");
            Boolean ck=sc.nextBoolean();
            if(ck==true){
                continue;
            }else{
                break;
            }
            
        }
        System.out.println();
        System.out.println("Your Trasaction Has Been Completed");
        System.out.println("-----------Thank You------------");
    }


    public void checkBal()
    {
        System.out.println("Balance: "+bal);
    }
    public  void deposit(Scanner sc)
    {
        System.out.println("Please Enter an amount:");
        
        int amt=sc.nextInt();
        if (amt > 0) {
            bal += amt;
            System.out.println("₹" + amt + " has been deposited successfully!");
        } else {
            System.out.println("Invalid amount. Please enter a valid amount.");
        }
    }
    public void withDraw(Scanner sc)
    {
        System.out.println("Enter amount to withdraw");
        
        int amt=sc.nextInt();
        if(bal>=amt)
        {
            bal=bal-amt;
            System.out.println("Amount has been Withdrawed!");
        }else
        {
            System.out.println("Insufficient Funds");
        }
        
    }
    
}

public class Main {
    public static void main(String[] args) {
        Scanner sx=new Scanner(System.in);
        atmMachine obj=new atmMachine();
        System.out.println("Enter your card Number:");
        String pin=sx.next();
        obj.verify(pin);
        
    }
}
