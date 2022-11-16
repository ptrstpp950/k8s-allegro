## Installation
- EKS ->
https://docs.aws.amazon.com/eks/latest/userguide/vertical-pod-autoscaler.html
- GCP ->
https://cloud.google.com/kubernetes-engine/docs/concepts/verticalpodautoscaler
- AKS ->
https://learn.microsoft.com/en-us/azure/aks/vertical-pod-autoscaler
- "universal" from kubernetes.io ->
https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler

## Verification
```
kubectl --namespace=kube-system get pods|grep vpa
```
Three pods should be working:
- recommender
- updater
- admission-controller

Check that VPA CRD was created:
```
kubectl get customresourcedefinition | grep verticalpodautoscalers
```

If something goes wrong check logs of above pods


## Demo

```
# create namespace and switch to it
k create ns vpa-demo
kubens vpa-demo

# deploy hamster app with VPA
k apply -f https://raw.githubusercontent.com/kubernetes/autoscaler/master/vertical-pod-autoscaler/examples/hamster.yaml

# run describe
k describe pod hamster-<TAB><TAB>

# run watch for VPA in separate window
k get vpa -w

# check pods with
k get --watch pods -l app=hamster

# wait a few minutes and run describe again on different pod
k describe pod hamster-<TAB><TAB>

# clean up with
kubens default
k delete ns vpa-demo
```