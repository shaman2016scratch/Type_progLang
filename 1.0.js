// Type code
Peremens = {}
TypeCommands = {
  "console.log": function(c) { console.log(GetTypeReporter(c)) },
  "console.error": function(c) { console.error(GetTypeReporter(c)) },
  "console.warn": function(c) { console.warn(GetTypeReporter(c)) },
  "let": function(n, z) { let Peremens[GetTypeReporter(n)] = GetTypeReporter(z) },
  "var": function(n, z) { Peremens[GetTypeReporter(n)] = GetTypeReporter(z) },
  "if": function(b, c) { if (b) { eval(RunTypeCode(GetTypeReporter(c))) } },
  "if else": function(b, c, e) { if (b) { eval(RunTypeCode(GetTypeReporter(c))) } else { eval(RunTypeCode(GetTypeReporter(e))) } },
  "eval": function(c) { eval(RunTypeCode(GetTypeReporter(c))) },
  "return": function(z) { return GetTypeReporter(z) },
  "const": function(n, z) { const Peremens[GetTypeReporter(n)] = GetTypeReporter(z) },
  "json": function(p, e, z) { Peremens[GetTypeReporter(p)] = eval(`Peremens[${GetTypeReporter(p)}].${GetTypeReporter(e)} = ${GetTypeReporter(z)}`) },
  "for": function(e, c) { for(GetTypeReporter(e)) { RunTypeCode(GetTypeReporter(c)) } },
  "while": function(i, c) { while (GetTypeReporter(i)) { RunTypeCode(GetTypeReporter(c)) } },
}
TypeReporters = {
  "text": function(t) { return t },
  "==": function(a, b) { return a === b },
  "<": function(a, b) { return a < b },
  ">": function(a, b) { return a > b },
  "eval": function(c) { eval(RunTypeCode(c)) },
  "typeof": function(t) { return typeof t },
  "var": function(n) { return Peremens[n] },
  "new string": function() { return '' },
  "new number": function() { return 0 },
  "new array": function() { return [] },
  "new object": function() { return {} },
  "json": function(p, e) { return eval(`Peremens[p].${e}`) },
  "true": function() { return true },
  "false": function() { return false },
  "not": function(b) { return !b },
  "<=": function(a, b) { return a <= b },
  ">=": function(a, b) { return a >= b },
  "and": function(a, b) { return a && b },
}
function RunTypeCode(c) {
  TypeLang = {}
  codeType = c.split("@;")
  TypeSysFunc = {
    "let a main()": function(c) { return c.split(";") },
  }
  for(i = 0; i < codeType.length; i++) {
    TypeLang.command = codeType[i]
    if (TypeLang.command === 'let a main(type)') {
      TypeLang.main = {}; i++; TypeLang.main.code = TypeSysFunc['let a main()'](TypeLang.command)
      for(TypeLang.main.i = 0; TypeLang.main.i < TypeLang.main.code.length; TypeLang.main.i++) {
        i++
        TypeLang.main.command = TypeLang.mian.code[TypeLang.main.i]
        eval(`TypeCommands.${TypeLang.main.command}`)
      }
    }
  }
}
function GetTypeReporter(r) {
  return eval(`TypeReporters.${r}`)
}
