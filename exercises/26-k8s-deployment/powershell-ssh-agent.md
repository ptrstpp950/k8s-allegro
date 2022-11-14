1. Run PowerShell
2. Ensure that you have git installed
3. Enter directory with preparation files for this exercise
4. Run commands to set environment variables
```
Set-Alias ssh "$env:ProgramFiles\Git\usr\bin\ssh.exe"
Set-Alias ssh-agent "$env:ProgramFiles\git\usr\bin\ssh-agent.exe"
Set-Alias ssh-add "$env:ProgramFiles\git\usr\bin\ssh-add.exe"
```
5. Import ssh agent utils and start ssh-agent:
```
. .\ssh-agent-utils.ps1
```

6. Add lab key with:
```
Add-SshKey .\id_rsa_lab
```

7. The result should be:
```
Adding ssh key
Identity added: .\id_rsa_lab (.\id_rsa_lab)
```