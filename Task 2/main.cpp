#include <iostream>
#include <fstream>
#include <string>
#include <iomanip>

# include "MyNumber_Template.h"

using namespace std;

int main(int argc, char* argv[])
{ 
    // figure out if we have files given
    if(argc != 2)
    {
        cout << "Please provide the test input!" <<endl;
        return 0;
    }

    // open file 
    ifstream f_input;
    f_input.open(argv[1]);	

    //file error handling
    if (0 == f_input.is_open())	    
    {
        cout << "Error for opening the test input!"<<endl;
        return 0;
    }

    else
    {
        string line;
        while(getline(f_input, line))
        {
            float num = stof(line);
            MyNumber<float> a {num};
            MyNumber<float> b = a;
            MyNumber<float> c;
            c.write(a.read() / 2);

            cout.setf(ios::fixed);
            cout << setprecision(3) << a.read() << "\t" << b.read() << "\t" << c.read() << endl;  
        }
    }
    f_input.close();

    return 1;
}