# Instructions

- create two files: `service.yaml` and `deploy.yaml`
- in `service.yaml` define `NodePort` exposing pods that have `app=api` label
- in `deploy.yaml` create deployment for `gutek/dumpster:v1` image that will have labels defined in `service.yaml`
- write down assumptions: what needs to be deployed first
- verify your assumptions