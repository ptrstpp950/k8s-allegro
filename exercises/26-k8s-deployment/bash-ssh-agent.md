1. Run bash (for example git bash or normal bash)
2. Ensure that you have ssh and ssh-agent installed
3. Start ssh-agent with
```
eval $(ssh-agent -s)
```
4. Enter directory with prep files
5. Add ssh-key with
```
ssh-add id_rsa_lab
```