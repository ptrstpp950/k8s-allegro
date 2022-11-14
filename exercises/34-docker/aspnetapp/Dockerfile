FROM mcr.microsoft.com/dotnet/core/sdk:3.1

WORKDIR /app

COPY . .
ENV ASPNETCORE_URLS=http://*:80
RUN dotnet publish -c Release -o out

ENTRYPOINT ["dotnet", "out/aspnetapp.dll"]