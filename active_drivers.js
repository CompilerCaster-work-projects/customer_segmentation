// language: mongodb

db.inspections.aggregate([
{'$match':{
'timestamps.processedAt': {'$gte': new ISODate("2023-10-01T00:00:00.000Z"), '$lte': new ISODate("2024-01-17T23:59:59.999Z")},
'isTest': false,
'organization.inn': {'$in':[
                             '7731447380',
                             '5001038736',
                             '7709359770',
                             '7810000499',
                             '9102034421',
                             '7814148471',
                             '7736322345',
                             '7721546864',
                             '7703744408',
                             '7714211088',
                             '5406807595',
                             '7709921300',
                             '8709014670',
                             '7715290822',
                             '6367044243',
                             '7814605287',
                             '6732055048',
                             '5107909951',
                             '5263131683',
                             '7701011412',
                             '6671271218',
                             '7704219345',
                             '7709606250',
                             '3914010751',
                             '7710294238',
                             '6227009062',
                             '7743181945',
                             '5011037026',
                             '4024017040',
                             '9725045830',
                             '3305792187'
                           ]}

}},

{'$project':{
'inn':'$organization.inn',
'org_id':'$organization.id',
'license': '$host.license',
'dt':'$timestamps.processedAt',
'emp_id':'$employee.id'


}},

{'$group':{'_id':{'inn':'$inn'},
'unique_employees':{'$addToSet':'$emp_id'},
}},

{'$project':{'_id':0, 'inn':'$_id.inn', 'unique_employees':{'$size':'$unique_employees'}}}

])
