# Instructions

- set resources limit/requests and deploy deploy.yaml
- create autoscaler using kubectl (cpu resource needs to be defined) or template.yaml
- set minimum replicas to 5, maximum to 15
- in new shell tab execute:

```
kubectl run -it load-generator --image=busybox /bin/sh
   
Hit enter for command prompt
while true; do wget -q -O- http://dumpster-svc.default.svc.cluster.local; done
```
   
- see if it autoscaled, if not play around with metrics and redeploy autoscaler