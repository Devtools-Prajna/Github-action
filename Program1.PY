num1=50
num2=80
num3=95

if(num1>num2):
 print(num1 is greater)
elif(num2>num3 and num2>num1):
    print("num2 is greatest")
elif(num3>num2 and num3>num1):
    print("num3 is greatest")
else:
    print("all numbers are equal")
