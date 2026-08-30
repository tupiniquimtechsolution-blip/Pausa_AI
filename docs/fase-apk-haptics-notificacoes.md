# Fase APK: haptics e notificacoes locais

## Estado atual

A base nativa ja esta preparada no app Expo:

- `expo-haptics` instalado no projeto `mobile`;
- `expo-notifications` instalado no projeto `mobile`;
- WebView escuta mensagens do app web;
- timer de respiracao envia evento nativo nas trocas de fase;
- conclusao de pratica envia evento nativo de sucesso;
- app mobile possui botoes para lembrete diario as 20h e lembrete de teste em 1 minuto.

## Como funciona

O app web envia mensagens para a WebView quando esta dentro do Expo:

```json
{
  "source": "pausa-ai",
  "type": "native-feedback",
  "moment": "breathing-phase"
}
```

O app mobile recebe a mensagem e executa haptics quando o aparelho suporta.

## Limitacoes

- Em navegador web comum, nada acontece; a web continua funcionando normalmente.
- `expo-notifications` tem limitacoes no Expo Go. Para validar de forma confiavel, use development build ou APK interno.
- Notificacoes exigem permissao do usuario.
- Alguns Androids podem restringir alarmes em segundo plano dependendo de bateria e permissao do sistema.

## Validacao no APK

1. Abrir uma ficha de respiracao.
2. Iniciar o timer 4-4-6.
3. Confirmar vibracao suave em cada troca de fase.
4. Concluir a pratica.
5. Confirmar feedback de sucesso.
6. Tocar em `Teste 1 min`.
7. Confirmar notificacao local apos 1 minuto.
8. Tocar em `Lembrete 20h`.
9. Confirmar permissao e agendamento.
