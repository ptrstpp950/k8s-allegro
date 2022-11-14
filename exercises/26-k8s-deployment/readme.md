Instructions part 1

- Run ssh-agent and add a key (check bash-ssh-agent.md or powershell-ssh-agent.md )
- Connect to the machine with: ssh uczen@onPremK8SXX.westeurope.cloudapp.azure.com
- Verify (it should be already):
  - sudo apt update
  - sudo apt install docker.io
  - sudo usermod -aG docker uczen


Instructions part 2
- What is "rancher" and why?
- Machine requirements: https://rancher.com/docs/rke/v0.1.x/en/os/
- To your LOCAL machine download RKE from:  https://github.com/rancher/rke/releases/tag/v0.1.11
- Save it as rke or rke.exe
- Make it runnable (non-Windows): chmod u+x rke
- Add it to path or exercise dir

Instructions part 3
- Run: ./rke config
- And follow the rabbit
- The result is in exercise dir

Instructions part 4:
- Replace host dir in config.yml to your host
- Run: ./rke up
- Read logs :)
- Set context: kubectl config --kubeconfig=kube_config_cluster.yml set-context local
- Get nodes
-  Try access dashboard

Instructions part 5:

- Run: kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/master/src/deploy/recommended/kubernetes-dashboard.yaml
- Get deployment state (hint: --namespace)
- Try access dashboard

Instructions part 6:
- Run: kubectl apply -f admin-user.yml
  kubectl apply -f admin-cluster-role.yml
- To get token run: kubectl -n kube-system describe secret USER_NAME
- To find user USER_NAME: kubectl -n kube-system get secret