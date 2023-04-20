FROM gcc:latest
COPY main.cpp .
COPY input.txt .
COPY MyNumber_Template.h .
COPY makefile .
RUN g++ -o main main.cpp
CMD ["./main", "input.txt"]
