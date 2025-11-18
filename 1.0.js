// Type code
Peremens = {}
TypeCommands = {
  "console.log": function(c) { console.log(c) },
  "console.error": function(c) { console.error(c) },
  "console.warn": function(c) { console.warn(c) },
  "let": function(n, z) { let Peremens[n] = z },
  "var": function(n, z) { Peremens[n] = z },
  "if": function(b, c) { if (b) { eval(RunTypeCode(c)) } },
  "if else": function(b, c, e) { if (b) { eval(RunTypeCode(c)) } else { eval(RunTypeCode(e)) } }
}
