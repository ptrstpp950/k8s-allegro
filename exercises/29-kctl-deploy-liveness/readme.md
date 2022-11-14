# Instructions

- deploy `dep.yaml`
- modify `dep.yaml` to include livelinessProbe
- set httpGet:path to `/test` url
- add env variable to be sure that changes are applied
- re-deploy `dep.yaml` with changes
- confirm that deployment did succeeded/failed