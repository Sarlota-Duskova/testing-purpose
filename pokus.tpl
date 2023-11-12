package main

import (
	"html/template"
	"os"
)

func main() {

	tpl := template.Must(template.
		New("main").Parse(`{{define "T"}}{{.Html}}{{.String}}{{end}}`))
	tplVars := map[string]interface{}{
		"Html":   template.HTML("<p>Paragraph</p>"),
		"String": "<p>Paragraph</p>",
	}
	tpl.ExecuteTemplate(os.Stdout, "T", tplVars)
}
